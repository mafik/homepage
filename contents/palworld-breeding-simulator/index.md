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

<p>Enter the Pals that you have caught in the table below. This is the initial population that will be bred together to create stronger Pals.</p>

<p>Once you're ready to start the search, click one of the buttons below the table.</p>

<p>When breeding, make sure to add the new Pals which you obtain as you go, even if they're not the intended ones. It's possible that the search algorithm will figure out a more efficient path using those Pals!</p>

<p><small>Sources for this website (C++) can be downloaded from <a href="src.zip">here</a>. They were meant as throwaway code so they might be a little messy!</small></p>

<div id="simulator">
<style>

    table {
      border: 1px solid black;
      text-align: left;
      box-shadow: 0 5px 10px rgba(90, 91, 127, 0.5);
      background: #eee;
      cursor: default;
      border-collapse: collapse;
    }

    table th {
      background: #ddd;
    }

    table td,
    table th {
      border: 1px solid #aaa;
    }

    table button {
      cursor: pointer !important;
    }


    details summary {
      cursor: pointer;
      margin-bottom: 0px;
      /* for more prominent move */
      transition: margin 150ms ease-out;
    }

    details summary:hover {
      background: #f0f0f0;
    }

    details[open] summary {
      margin-bottom: 10px;
    }

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

    article {
      max-width: none !important;
    }
</style>
</div>

<script src="index.js"></script>
<script src="breed.js"></script>
