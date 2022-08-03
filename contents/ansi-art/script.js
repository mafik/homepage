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