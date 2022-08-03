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
<script src="script.js"></script>
<script src="ansi.js"></script>
