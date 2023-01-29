---
date: 2015-06-14
title_pl: Affinity Propagation
title_en: Affinity Propagation
desc_pl: Jak grupować dane, o których nic nie wiemy
desc_en: How to group stuff without any prior knowledge
renderer: render_article
thumb: thumb.jpg
---

<h1 class=compact>Affinity Propagation</h1>

<p lang=pl>Całkiem ciekawy algorytm grupowania. Nie musimy w nim z góry wiedzieć ile grup występuje w naszych danych. Żeby działał prawidłowo wciąż musimy zadbać o to, żeby przestrzeń była w miarę jednorodna, ale do tego powinna wystarczyć PCA. W efekcie dostajemy całkowicie bezparametrowy silnik grupujący dane!

<p lang=en>Quite nice grouping algorithm. When using it you don't need to know how many groups there is in the data. In order for it to work the space needs to be more or less uniform (you can ensure this by doing PCA without dimension normalization). As a result you get completele knob-free data grouping engine!
  
<p lang=pl>Opis algorytmu możesz przeczytać <a href="http://www.psi.toronto.edu/affinitypropagation/FreyDueckScience07.pdf">tutaj</a>, a moją javascriptową implementację, <a href=script.js>tutaj</a>.
  
<p lang=en>Description of the algorithm can be found <a href="http://www.psi.toronto.edu/affinitypropagation/FreyDueckScience07.pdf">here</a>. My javascript implementation can be found <a href=script.js>here</a>.</p>

<canvas style="background:#eee; width:100%; height:20em" id=fg></canvas>
<script src="script.js"></script>
