---
date: 2022-08-03
title_pl: ANSI🔥Art
title_en: ANSI🔥Art
desc_pl: ANSI Art + Unicode + 24-bit color
desc_en: ANSI Art + Unicode + 24-bit color
template: article.pug
thumb: thumb.jpg
---

<style>
  hr {
    border-color: black;
    margin: 2em !important;
  }
  #image, #font, #result-canvas {
    display: block;
    max-width: 100%;
    border: 2px dashed #888;
    box-sizing: border-box;
    padding: 1em;
  }
  #image > img {
    max-width: 100%;
    max-height: 100%;
  }
  #sample {
    line-break: anywhere;
    margin: .5em 0;
    font-family: 'AnsiArt', monospace; /* font family created by JS */
  }
  body > *, #result > *, #font > * {
    margin-top: .5em;
  }
  button, input, select {
    font-family: inherit;
    font-size: inherit;
  }
  #result-canvas {
    padding: 0 !important;
  }
  textarea {
    width: 100%;
  }
  #render {
    text-align: center;
  }
  #render > button {
    padding: .5em;
  }
</style>
<h1>ANSI🔥Art</h1>
<p>Original <a href="https://en.wikipedia.org/wiki/ANSI_art">ANSI Art</a> is typically limited to
  <a href="https://en.wikipedia.org/wiki/ANSI_escape_code#3-bit_and_4-bit">16 colors</a> and the
  character set used by the original <a href="https://www.youtube.com/watch?v=_mZBa3sqTrI&t=1061s">IBM PC</a>.</p>
<p>Times have changed. Modern terminal emulators support 24-bit RGB colors & can display arbitrary
  Unicode characters. This opens entirely new possibilities for the art that can be displayed in the terminal.</p>
<p><audio controls style="float: right"><source src="624425__foleyhaven__fire-burning-03.ogg" type="audio/ogg"></audio>Let's call this 24-bit, Unicode-capable version of ANSI Art, an <strong>ANSI🔥Art</strong> (pronounced
  just like a regular ANSI Art, although with a sound of blazing fire in the background).</p>
<p>ANSI🔥Art can be used in the output of interactive <a href="https://www.youtube.com/watch?v=_oHByo8tiEY">CLI</a>
  commands, <a href="http://mewbies.com/how_to_customize_your_console_login_message_tutorial.htm">SSH MOTD</a>, an
  element of a <a href="https://www.youtube.com/watch?v=4G_cthFZeJ8">ncurses</a> interface or even for
  <a href="https://www.youtube.com/watch?v=MJZvWgcxV0M">animation</a>.</p>
<p>Here are some examples of what can be achieved:</p>
<img src="sample1.png"><img src="sample2.png"><img src="sample3.png"><img src="sample4.png">
<p>This website allows you to render a regular image as an ANSI🔥Art. Just drop your image / TTF font of choice onto this webpage & click the <em>Render</em> button below. If you create something cool, please post it to <a href="https://www.reddit.com/r/ANSIart/">/r/ANSIart/</a>.</p>
<p>For those, who know how to git pull & push, there is also a <a href="https://github.com/mafik/ansi-art">C++ library</a> for rendering ANSI🔥Art.</p>
<hr>
<h2>1. Image selection</h2>
<p>You can drop an image anywhere on this page or open an image by clicking the button below.</p>
<div id="image">
  <img id="image-img" src="sample.webp">
</div>
<input id="image-input" type="file" onchange="ImageInputChanged(event);">
<h2>2. Font selection</h2>
<p>You can drop a TTF file anywhere on this page. Alternatively click the button below to open a TTF file.</p>
<p>Various fonts can offer different character support. They also have different glyphs & aspect ratio.
For optimal results upload the TTF file of the font to be used. By default
<a href="https://design.ubuntu.com/font/">Ubuntu Monospace</a> will be used.
It is the default terminal font on Ubuntu-based systems.</p>
<p>Note that only fixed-width characters will be used. Most of variable-size fonts will not work.</p>
<div id="font">
  <p id="sample">ABCDEF</p>
</div>
<input id="font-input" type="file" onchange="FontInputChanged(event);">
<h2>3. Settings</h2>
<div id="forbidden_characters">
  <h3>Forbidden characters</h3>
  <p class="note">Some terminals replace specific characters with built-in images.
    This may break the alignment of ANSI Art. By default we're excluding the characters which are overridden on the Ubuntu OS.</p>
  <textarea id="forbidden_characters_textarea" onchange="ForbiddenChanged(event);">⬛⬜⏪⏩⏫⏬⚡⚪⚫⭐⭕🆎🆑🆒🆓🆔🆕🆖🆗🆘🆙🆚🌑🌒🌓🌔🌕🌖🌗🌘❌</textarea>
</div>
<div id="colorset">
  <h3>Colors</h3>
  <select id="color-select" onchange="ColorSetChanged(event);">
    <option value="0">24-bit color</option>
    <option value="1">8-bit color</option>
    <option value="2">0-bit (white on black)</option>
    <option value="3">0-bit (black on white)</option>
  </select>
</div>
<div id="size">
  <h3>Width</h3>
  <input type="number" id="size-width" min="1" step="1" value="80" onchange="WidthChanged(event);">
</div>
<hr>
<div id="render">
  <button id="render-button">Render</button><br>
  <progress id="progress" max="100" value="0"> 100% </progress>
</div>
<hr>
<div id="result">
  <p>Preview:</p>
  <canvas id="result-canvas" style="background-color: #888;"></canvas>
  <p>C-escaped string:</p>
  <textarea id="result-c"></textarea>
  <p>Bash-escaped string:</p>
  <textarea id="result-bash"></textarea>
  <p>Raw unicode string:</p>
  <textarea id="result-raw"></textarea>
</div>
<script>
  var art;
  var interval;
  function CheckResult() {
    var p = art.GetRenderProgress();
    var bar = document.getElementById('progress');
    bar.value = p * bar.max;
    if (p >= 1) {
      window.clearInterval(interval);
      interval = null;
      var btn = document.getElementById('render-button');
      btn.innerText = 'Render';
    }
    document.getElementById('result-raw').value = art.result_raw;
    document.getElementById('result-c').value = art.result_c;
    document.getElementById('result-bash').value = art.result_bash;
    var canvas = document.getElementById('result-canvas');
    canvas.width = art.result_rgba_width;
    canvas.height = art.result_rgba_height;
    var ctx = canvas.getContext('2d');
    var int8_arr = art.result_rgba_bytes();
    var uint8_arr = new Uint8Array(int8_arr);
    var image_data = ctx.createImageData(canvas.width, canvas.height);
    image_data.data.set(uint8_arr);
    ctx.putImageData(image_data, 0, 0);
  }
  var img = document.getElementById('image-img');
  var image_input = document.getElementById('image-input');
  var font_input = document.getElementById('font-input');

  function DropHandler(ev) {
    console.log('drop', event.dataTransfer);
    ev.preventDefault();
    if (ev.dataTransfer.files.length == 0) {
      return;
    }
    if (ev.dataTransfer.files.length > 1) {
      alert('Only one file can be dropped at a time!');
      return;
    }

    const file = ev.dataTransfer.files[0];
    if (file.type.startsWith('font')) {
      font_input.files = ev.dataTransfer.files;
      FontInputChanged();
      return;
    } else if (file.type.startsWith('image')) {
      image_input.files = ev.dataTransfer.files;
      ImageInputChanged();
      return;
    } else {
      alert('Only images & fonts can be dropped onto this page!');
      return;
    }
  }

  function FontInputChanged(event) {
    if (font_input.files.length != 1) {
      alert('Only one file can be selected');
      font_input.value = '';
      return;
    }
    const file = font_input.files[0];
    if (!file.type.startsWith('font')) {
      alert('Only font files can be selected');
      font_input.value = '';
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      var dataUrl = e.target.result;
      var base64 = dataUrl.substring(dataUrl.indexOf(',') + 1);
      var arr = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
      art.LoadTTF(arr);
      ShowFontSample(dataUrl);
    };
    reader.readAsDataURL(file);
  }

  function ImageInputChanged(event) {
    if (image_input.files.length != 1) {
      alert('Only one file can be selected');
      image_input.value = '';
      return;
    }
    const file = image_input.files[0];
    if (!file.type.startsWith('image')) {
      alert('Only image files can be selected');
      image_input.value = '';
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
      img.onload = function () {
        LoadImage();
      };
    };
    reader.readAsDataURL(file);
  }

  function LoadImage() {
    var w = img.naturalWidth;
    var h = img.naturalHeight;
    var canvas = new OffscreenCanvas(w, h);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var rgba_arr = ctx.getImageData(0, 0, w, h).data.buffer;
    art.LoadImage(w, h, rgba_arr);
  }
  function DragOver(event) {
    event.preventDefault();
  }
  document.body.parentElement.ondrop = DropHandler;
  document.body.parentElement.ondragover = DragOver;

  function ShowFontSample(data_url) {
    document.getElementById('sample').innerText = art.glyphs_utf8;
    var font = new FontFace('AnsiArt', 'url(' + data_url + ')');
    document.fonts.clear();
    document.fonts.add(font);
  }
  function ColorSetChanged(event) {
    art.color_palette = Module.ColorPalette.values[event.target.value];
  }
  function ForbiddenChanged(event) {
    art.forbidden_characters = event.target.value;
  }
  function WidthChanged(event) {
    art.width = event.target.value;
  }
  var Module = {
    onRuntimeInitialized: function() {
      art = new Module.AnsiArt;
      art.LoadDefaultTTF();
      ShowFontSample(Module.GetDefaultTTF());
      LoadImage();

      var forbidden = document.getElementById('forbidden_characters_textarea');
      art.forbidden_characters = forbidden.value;

      var btn = document.getElementById('render-button');
      btn.addEventListener('click', function() {
        if (interval) {
          var bar = document.getElementById('progress');
          bar.value = 0;
          art.CancelRender();
          window.clearInterval(interval);
          interval = null;
          btn.innerText = 'Render';
        } else {
          document.getElementById('result-raw').value = '';
          document.getElementById('result-c').value = '';
          document.getElementById('result-bash').value = '';
          var canvas = document.getElementById('result-canvas');
          var ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          art.StartRender(navigator.hardwareConcurrency);
          interval = window.setInterval(CheckResult, 100);
          btn.innerText = 'Cancel';
        }
      });
    }
  };
</script>
<script src="ansi.js"></script>