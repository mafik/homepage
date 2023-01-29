---
title_pl: Obrazy Wykonywalne
title_en: Image Executable
desc_pl: Czemu zwyczajnie nie zaczniemy zapisywać obrazów jako plików wykonywalnych?
desc_en: Why don't we just save images and videos as executables?
renderer: render_article
thumb: page.png
date: 2014-04-19
---

<h1 lang=en class=compact>Image Executable</h1>
<h1 lang=pl>Obrazy Wykonywalne</h1>

<p lang=en>When saving images we always have to make a choice of an image format. There are hundreds of them. Each with its own tradeoffs and features. Some of the most performant and interesting ones usually come from scientific papers - they show an amazing compression or novel features but die shortly after because the web and pretty much every operating system supports only the baseline: JPG, BMP, GIF, PNG, SVG. These five formats are our only options - as long as someone has to view the image later.

<p lang=pl>Zapisując obrazy zawsze musimy wybrać dla nich odpowiedni format. Są ich setki. Każdy cechuje się własnymi kompromisami i właściwościami. Najwydajniejsze i najciekawsze zwykle pojawiają się na łamach artykułów naukowych - pokazują niesamowite współczynniki kompresji lub nowe, ciekawe właściwości, ale giną niedługo później. Dlaczego? Ponieważ sieć www i praktycznie każdy system operacyjny wspiera tylko te podstawowe: JPG, BMP, GIF, PNG, SVG. Te pięć formatów to nasze jedyne opcje - o ile ktoś ma później obejrzeć dany obraz.

<p lang=en>But why don't we save an image together with it's decoder? It would certainly enlarge some pictures, especially those with large decoders but overall it would equalize formats and give the innovative formats easier way to go mainstream.

<p lang=pl>Czemu więc nie zapiszemy obrazu razem z jego dekoderem? Z pewnością powiększyłoby to część obrazów, zwłaszcza tych ze skomplikowanymi dekoderami, ale w sumie wyrównałoby szanse formatów i utorowałoby drogę innowacyjnym podejściom.

<p lang=en>So the way to go would be: use portable bytecode (JVM / LLVM / other IR) that can be compiled on the destination machine to produce decoder program. Then run the program in a sandbox to produce the image.</p>

<p lang=pl>Sposób działania wyglądałby tak: wykorzystać przenośny bajtkod (JVM / LLVM / inny IR), który może być skompilowany na docelowej maszynie, do uzyskania dekodera. Następnie uruchomić dekoder w <a href=http://pl.wikipedia.org/wiki/Piaskownica_(bezpiecze%C5%84stwo_informatyczne)>piaskownicy</a> aby uzyskać gotowy obraz.</p>

<img src=eng.png style=width:100% lang=en />

<img src=pl.png style=width:100% lang=pl />

<p lang=en>What would such method give us? Here are the tradeoffs:

<p lang=pl>Co dałoby nam takie podejście? Oto kompromisy:

<h2 lang=en>Advantages and tradeoffs</h2>

<h2 lang=pl>Korzyści i kompromisy</h2>

<p lang=en><strong class=good>Animation</strong> - executable could be run with a time as an input to produce consecutive frames of an animation.</p>

<p lang=pl><strong class=good>Animacja</strong> - dekoder mógłby zostać uruchomiony z czasem jako argumentem - pozwoliłoby to rysować kolejne klatki animacji.</p>

<p lang=en><strong class=good>Scalability</strong> - using bitmap size as another input would make the image natively scalable.</p>

<p lang=pl><strong class=good>Skalowalność</strong> - użycie wymiarów bitmapy jako kolejnego wejścia pozwoliłoby dekoderowi natywnie przeskalować obraz (ograniczyłoby więc artefakty związane z rozciąganiem).</p>

<p lang=en><strong class=good>Compression ratio</strong> - given good enough codecs, near-optimal (approaching Kolmogorov complexity of an image in the bytecode used).</p>

<p lang=pl><strong class=good>Współczynnik kompresji</strong> - zakładając dość zaawansowane kodeki, niemal optymalny (bliski złożoności Kołmogorowa obrazu w użytym bajtkodzie).</p>

<p lang=en><strong class=bad>Compression ratio</strong> - every image would have to embed its own decoder - thus enlarging the image. Moving common functions into runtime would reduce the overhead.</p>

<p lang=pl><strong class=bad>Współczynnik kompresji</strong> - każdy obraz musiałby zawierać dekoder - tym samym zwiększając swój rozmiar. Przenoszenie częstych funkcji do środowisiska uruchomieniowego (runtime) zmniejszyłoby ten nadkład.</p>

<p lang=en><strong class=good>Performance</strong> - image executable could use a set of natively optimized libraries available during runtime (fft, H.264, svg primitives, OpenGL, etc.). When used to draw animation, executable could retain its state to allow inter-frame compression.</p>

<p lang=pl><strong class=good>Wydajność</strong> - obrazy wykonywalne mogłyby korzystać z lokalnych, zoptymalizowanych wersji częstych operacji (fft, H.264, prymitywy svg, OpenGL, itd.). Podczas rysowania animacji, mogłyby zachowywać swój stan - pozwoliłoby to na kompresję międzyklatkową.</p>

<p lang=en><strong class=bad>Performance</strong> - before decoding the image, bytecode has to be compiled. It would result in slower decoding speed compared to current codecs.</p>

<p lang=pl><strong class=bad>Wydajność</strong> - przed zdekodowaniem obrazu, bajtkod musi zosać skompilowany. W porównaniu ze współczesnymi formatami spowolni to cały proces dekodowania.</p>

<p lang=en><strong class=good>Safety</strong> - complex (and vulnerable) part of decoding is sandboxed.</p>

<p lang=pl><strong class=good>Bezpieczeństwo</strong> - złożone (i wrażliwe) elementy dekodera będą działać w piaskownicy - oznaczać to będzie większą odporność na wstrzykiwanie kodu.</p>

<p lang=en><strong class=good>Promoting innovative codecs</strong> - differences between encoding techniques would promote competition and innovation. Any forseeable encoder could save its output as an image executable.</p>

<p lang=pl><strong class=good>Faworyzowanie innowacyjnych kodeków</strong> - różnice w technikach kodowania będą promować rywalizację oraz innowacje. Teoretycznie dowolny kodek móże zapisać obraz w formacie wykonywalnym.</p>

<p lang=en><strong class=bad>Bytecode lock-in</strong> - bytecode choosen as the standard would be very hard to change.</p>

<p lang=pl><strong class=bad>Związanie z bajtkodem</strong> - bajtkod wybrany jako część standardu byłby bardzo ciężki do zmiany.</p>

<h2 lang=pl>Dość teoretyzowania</h2>

<h2 lang=en>Enough teorizing</h2>

<p lang=en>Executable image format is a realistic and achievable goal. If you want to make it happen and you are looking for help of expierienced programmer, <a href=mailto:mafikpl@gmail.com>send me an email</a> - maybe we could help each other.</p>

<p lang=pl>Obrazy wykonywalne to cel jak najbardziej osiągalny. Jeśli chcesz zrealizować ich ideę i szukasz pomocy doświadczonego programisty, <a href=mailto:mafikpl@gmail.com>napisz do mnie</a> - być może będziemy mogli sobie pomóc.</p>
