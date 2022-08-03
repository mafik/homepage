
var canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = -1;
document.body.appendChild(canvas);


if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = (function () {
		return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback, element) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();
}

try {
	var gl = canvas.getContext('experimental-webgl', { preserveDrawingBuffer: true });
} catch (error) { }

if (!gl) {
	// do nothing
} else {

	var quality = 32, compileTimer, errorLines = [];
	var code, gl, currentProgram, vertexPosition, screenVertexPosition, panButton,
		parameters = { startTime: Date.now(), time: 0, mouseX: 0.5, mouseY: 0.5, screenWidth: 0, screenHeight: 0 },
		surface = { centerX: 0, centerY: 0, width: 1, height: 1, isPanning: false, isZooming: false, lastX: 0, lastY: 0 },
		frontTarget, backTarget, screenProgram, getWebGL, resizer = {}, compileOnChangeCode = true;


	var buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([- 1.0, - 1.0, 1.0, - 1.0, - 1.0, 1.0, 1.0, - 1.0, 1.0, 1.0, - 1.0, 1.0]), gl.STATIC_DRAW);

	surface.buffer = gl.createBuffer();

	document.addEventListener('mousemove', function (event) {
		parameters.mouseX = event.clientX / innerWidth;
		parameters.mouseY = 1 - event.clientY / innerHeight;
	}, false);

	//

	function createTarget(width, height) {

		var target = {};

		target.framebuffer = gl.createFramebuffer();
		target.renderbuffer = gl.createRenderbuffer();
		target.texture = gl.createTexture();

		// set up framebuffer

		gl.bindTexture(gl.TEXTURE_2D, target.texture);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

		gl.bindFramebuffer(gl.FRAMEBUFFER, target.framebuffer);
		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, target.texture, 0);

		// set up renderbuffer

		gl.bindRenderbuffer(gl.RENDERBUFFER, target.renderbuffer);

		gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
		gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, target.renderbuffer);

		// clean up

		gl.bindTexture(gl.TEXTURE_2D, null);
		gl.bindRenderbuffer(gl.RENDERBUFFER, null);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);

		return target;

	}


	function createRenderTargets() {

		frontTarget = createTarget(parameters.screenWidth, parameters.screenHeight);
		backTarget = createTarget(parameters.screenWidth, parameters.screenHeight);

	}

	//

	function onWindowResize(event) {

		canvas.width = window.innerWidth / quality;
		canvas.height = window.innerHeight / quality;

		parameters.screenWidth = canvas.width;
		parameters.screenHeight = canvas.height;

		if (gl) {
			gl.viewport(0, 0, canvas.width, canvas.height);
			createRenderTargets();
		}
	}


	onWindowResize();
	window.addEventListener('resize', onWindowResize, false);

	//

	function createShader(src, type) {

		var shader = gl.createShader(type);
		var line, lineNum, lineError, index = 0, indexEnd;

		while (errorLines.length > 0) {
			line = errorLines.pop();
			code.setLineClass(line, null);
			code.clearMarker(line);
		}

		gl.shaderSource(shader, src);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {

			var error = gl.getShaderInfoLog(shader);

			// Remove trailing linefeed, for FireFox's benefit.
			while ((error.length > 1) && (error.charCodeAt(error.length - 1) < 32)) {
				error = error.substring(0, error.length - 1);
			}

			console.error(error);

			compileButton.style.color = '#ff0000';
			compileButton.textContent = 'compiled with errors';

			set_save_button('hidden');

			while (index >= 0) {
				index = error.indexOf("ERROR: 0:", index);
				if (index < 0) { break; }
				index += 9;
				indexEnd = error.indexOf(':', index);
				if (indexEnd > index) {
					lineNum = parseInt(error.substring(index, indexEnd));
					if ((!isNaN(lineNum)) && (lineNum > 0)) {
						index = indexEnd + 1;
						indexEnd = error.indexOf("ERROR: 0:", index);
						lineError = htmlEncode((indexEnd > index) ? error.substring(index, indexEnd) : error.substring(index));
						line = code.setMarker(lineNum - 1, '<abbr title="' + lineError + '">' + lineNum + '</abbr>', "errorMarker");
						code.setLineClass(line, "errorLine");
						errorLines.push(line);
					}
				}
			}

			return null;

		}

		return shader;

	}

	function cacheUniformLocation(program, label) {

		if (program.uniformsCache === undefined) {

			program.uniformsCache = {};

		}

		program.uniformsCache[label] = gl.getUniformLocation(program, label);

	}

	function compileScreenProgram() {

		if (!gl) { return; }

		var program = gl.createProgram();
		var fragment = "#ifdef GL_ES\n\
precision mediump float;\n\
#endif\n\
\n\
uniform vec2 resolution;\n\
uniform sampler2D texture;\n\
\n\
void main() {\n\
\n\
vec2 uv = gl_FragCoord.xy / resolution.xy;\n\
gl_FragColor = texture2D( texture, uv );\n\
\n\
}";
		var vertex = "attribute vec3 position;\n\
void main() {\n\
gl_Position = vec4( position, 1.0 );\n\
}";

		var vs = createShader(vertex, gl.VERTEX_SHADER);
		var fs = createShader(fragment, gl.FRAGMENT_SHADER);

		gl.attachShader(program, vs);
		gl.attachShader(program, fs);

		gl.deleteShader(vs);
		gl.deleteShader(fs);

		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {

			console.error('VALIDATE_STATUS: ' + gl.getProgramParameter(program, gl.VALIDATE_STATUS), 'ERROR: ' + gl.getError());

			return;

		}

		screenProgram = program;

		gl.useProgram(screenProgram);

		cacheUniformLocation(program, 'resolution');
		cacheUniformLocation(program, 'texture');

		screenVertexPosition = gl.getAttribLocation(screenProgram, "position");
		gl.enableVertexAttribArray(screenVertexPosition);

	}


	compileScreenProgram();

	function compile() {

		if (!gl) {

			if (!getWebGL) {

				getWebGL = true;
				compileButton.addEventListener('click', function (event) {

					document.location = 'http://get.webgl.org/';

				}, false);
				compileButton.title = 'http://get.webgl.org/';
				compileButton.style.color = '#ff0000';
				compileButton.textContent = 'WebGL not supported!';
				set_save_button('hidden');

			}
			return;

		}

		var program = gl.createProgram();
		var fragment = "#ifdef GL_ES\n\
precision lowp float;\n\
#endif\n\
\
uniform float time;\
uniform vec2 mouse;\
uniform vec2 resolution;\
\
vec3 hsv2rgb(vec3 c)\
{\
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\
}\
\
void main( void ) {\
\
	vec2 center = mouse;\
	float d = distance(gl_FragCoord.xy, mouse * resolution) / length(resolution);\
	d *= d;\
	\
	float w = length(1.0 - sin(gl_FragCoord.xy / resolution * 3.14)) / length(vec2(1));\
  w *= w;\
  w *= w;\
  w *= w;\
	\
	float hue = d*0.3 + time/40.;\
	float sat = 1. - d;\
	float val = 0.7 * (1. - d) * min(1., 1.1 - w);\
	vec3 color = hsv2rgb(vec3(hue, sat, val));\
	gl_FragColor = vec4( color, 1.0 );\
\
}";
		var vertex = "attribute vec3 position;\n\
attribute vec2 surfacePosAttrib;\n\
varying vec2 surfacePosition;\n\
void main() {\n\
surfacePosition = surfacePosAttrib;\n\
gl_Position = vec4( position, 1.0 );\n\
}";

		var vs = createShader(vertex, gl.VERTEX_SHADER);
		var fs = createShader(fragment, gl.FRAGMENT_SHADER);

		if (vs == null || fs == null) return null;

		gl.attachShader(program, vs);
		gl.attachShader(program, fs);

		gl.deleteShader(vs);
		gl.deleteShader(fs);

		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {

			var error = gl.getProgramInfoLog(program);
			console.error(error);
			console.error('VALIDATE_STATUS: ' + gl.getProgramParameter(program, gl.VALIDATE_STATUS), 'ERROR: ' + gl.getError());
			return;
		}

		if (currentProgram) {
			gl.deleteProgram(currentProgram);
		}

		currentProgram = program;

		// Cache uniforms

		cacheUniformLocation(program, 'time');
		cacheUniformLocation(program, 'mouse');
		cacheUniformLocation(program, 'resolution');
		cacheUniformLocation(program, 'backbuffer');
		cacheUniformLocation(program, 'surfaceSize');

		// Load program into GPU

		gl.useProgram(currentProgram);

		// Set up buffers
		surface.positionAttribute = gl.getAttribLocation(currentProgram, "surfacePosAttrib");
		//gl.enableVertexAttribArray( surface.positionAttribute );

		vertexPosition = gl.getAttribLocation(currentProgram, "position");
		gl.enableVertexAttribArray(vertexPosition);

	}

	compile();


	//

	var dummyFunction = function () { };


	//

	function htmlEncode(str) {

		return String(str)
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

	}

	//

	function animate() {

		requestAnimationFrame(animate);
		render();

	}

	function render() {

		if (!currentProgram) return;

		parameters.time = Date.now() - parameters.startTime;

		// Set uniforms for custom shader

		gl.useProgram(currentProgram);

		gl.uniform1f(currentProgram.uniformsCache['time'], parameters.time / 1000);
		gl.uniform2f(currentProgram.uniformsCache['mouse'], parameters.mouseX, parameters.mouseY);
		gl.uniform2f(currentProgram.uniformsCache['resolution'], parameters.screenWidth, parameters.screenHeight);
		gl.uniform1i(currentProgram.uniformsCache['backbuffer'], 0);
		gl.uniform2f(currentProgram.uniformsCache['surfaceSize'], surface.width, surface.height);

		gl.bindBuffer(gl.ARRAY_BUFFER, surface.buffer);
		//gl.vertexAttribPointer( surface.positionAttribute, 2, gl.FLOAT, false, 0, 0 );

		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, backTarget.texture);

		// Render custom shader to front buffer

		gl.bindFramebuffer(gl.FRAMEBUFFER, frontTarget.framebuffer);

		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		gl.drawArrays(gl.TRIANGLES, 0, 6);

		// Set uniforms for screen shader

		gl.useProgram(screenProgram);

		gl.uniform2f(screenProgram.uniformsCache['resolution'], parameters.screenWidth, parameters.screenHeight);
		gl.uniform1i(screenProgram.uniformsCache['texture'], 1);

		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.vertexAttribPointer(screenVertexPosition, 2, gl.FLOAT, false, 0, 0);

		gl.activeTexture(gl.TEXTURE1);
		gl.bindTexture(gl.TEXTURE_2D, frontTarget.texture);

		// Render front buffer to screen

		gl.bindFramebuffer(gl.FRAMEBUFFER, null);

		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		gl.drawArrays(gl.TRIANGLES, 0, 6);

		// Swap buffers

		var tmp = frontTarget;
		frontTarget = backTarget;
		backTarget = tmp;

	}

	animate();



}
