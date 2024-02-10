---
date: 2024-02-04
title_pl: Symulator Hodowli Palworld
title_en: Palworld Breeding Simulator
desc_pl: Strona, która znajduje najlepszych Pal-i do wychodowania z zadanej populacji początkowej
desc_en: Website that finds the best possible Pals to breed from a given initial Pal population
renderer: render_article
thumb: thumb.png
---

<h1>Palworld Breeding Simulator</h1>

<p>This website uses the Palworld breeding logic to find the best possible pals that can be obtained from a given initial Pal population.</p>

<p>First enter the Pals that you have caught. This is the initial population that will be bred together to create stronger Pals. You can either use the form at the bottom of the table or drag & dropp the <code>Level.sav</code> file from <code style="white-space:normal">C:\Users\&lt;Your Username&gt;\AppData\Local\Pal\Saved\SaveGames\&lt;Save Directory&gt;\</code> <button onclick="CopyPath()">Copy path to clipboard</button> into this page.</p>

<p>Once you're ready to start the search, click one of the buttons below the table.</p>

<p>When breeding, make sure to add the new Pals which you obtain as you go, even if they're not the intended ones. It's possible that the search algorithm will figure out a more efficient path using those Pals!</p>

<p><small>Sources for this website (C++) can be downloaded from <a href="src.zip">here</a>. They were meant as throwaway code so they might be a little messy!</small></p>

<style>
.pal {
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border: 1px solid #961b82;
  border-radius: 5px;
  background: #f7e8f3;
  box-shadow: 0 5px 10px rgba(132, 30, 120, 0.5);
}

.trait {
  border: 1px solid #786221;
  background: #f5e1a4;
  border-radius: 5px;
  padding: 1px 2px;
  margin: 1px;
  display: inline-block;
}

@media (prefers-color-scheme: dark) {
  .pal {
    background: #2d2d2d;
    border: 1px solid #5e5e5e;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }

  .trait {
    border: 1px solid #5e5e5e;
    background: #3d3d3d;
  }
}
</style>

<div class="scroll-wide"><table id="pals"><thead><tr><th>Name</th><th>Gender</th><th>Skill 1</th><th>Skill 2</th><th>Skill 3</th><th>Skill 4</th><th>Actions</th></tr></thead></table></div>

<hr>

<div id="metric-buttons"></div>

<details><summary>Advanced Search</summary>
<p>Use this form to specify a custom scoring function in JavasScript. The "Score" function should return a number, where higher numbers are better.</p>
<p>This can be used for example to search for specific Pals, skill combinations or pretty much any objective you can come up with.</p>
<p>Clear the textarea and refresh the page to reset to the default scoring function.</p>
<p>Select the skills that you're interested in. Only the selected skills will be available in the <code>skills</code> variable:</p>
<div id="skill-checkboxes" style="display: grid;grid: auto-flow / 1em 1fr 1em 1fr 1em 1fr;align-items: center;"></div>
<p>WARNING: The algorithm gets significantly slower when more skills are tracked! Try not to exceed 4 skills.</p>
<textarea cols=80 rows=15 id="advanced_search_score">function Score(name, gender, skills, stats) {
  // Press F12 and click "Search" to inspect the values of arguments
  debugger;
  let score = 0.0;
  if (name === 'Lifmunk') score += 1;
  if ('Lucky' in skills) score *= 2;
  if ('Dragonkiller' in skills) score *= 2;
  return score;
}
</textarea>
<pre id="advanced_search_error" style="display: none"></pre><br>
<button onclick="AdvancedSearch()">Search</button>
</details>

<hr>

<div id="best-pals"></div>

<script>
function CopyPath() {
  var copyText = document.querySelector("code");
  var textArea = document.createElement("textarea");
  textArea.value = "%LOCALAPPDATA%\\Pal\\Saved\\SaveGames\\";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}
</script>
<script src="pako_inflate.min.js"></script>
<script src="decoder.js"></script>
<script src="index.js"></script>
<script src="breed.js"></script>
