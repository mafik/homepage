---
title_pl: GLSL
title_en: GLSL
desc_pl: Kopalnia skarbów dla amatorów (i nie tylko) GLSL
desc_en: Gold mine for every ameteur (and not only) of GLSL
template: article.pug
thumb: evolution.jpg
date: 2014-04-10
---

<h1>GLSL</h1>

<p lang=pl>Jako, że podczas prac nad Dessinem miałem okazję zaprzyjaźnić się z
GLSL, przygotowałem kilka ciekawych materiałów, które mogą przydać się
innym:</p>

<p lang=en>While working on Dessin I have had a pleasure of working
with GLSL. As a side-effect, I've prepared a few materials which might
prove useful to others.</p>

<ol>
<li lang=pl>Artykuł dla nauczycieli - *GLSL - łagodne przejście z matematyki
do programowania*</li>
<li lang=en>Article for teachers - *GLSL - smooth transition from
mathematics to programming*</li>
<li lang=pl>Tablice informatyczne - *OpenGL ES Shading Language 1.0 -
podręczna ściąga*</li>
<li lang=en>Reference sheet - *OpenGL ES Shading Language 1.0 -
handy digest* (available in polish only)</li>
<li lang=pl>Zestaw przykładowych skryptów i ciekawych stron w internecie -
dostępny na końcu tej strony</li>
<li lang=en>A collection of example scripts and interesting websites -
available at the end of this page</li>
</ol>

<p lang=pl>Zacznę od artykułu...</p>
<p lang=en>I'll start with the article...</p>

<hr>

<h2 lang=pl>GLSL - łagodne przejście z matematyki do
programowania</h2>
<h2 lang=en>GLSL - smooth transition from
mathematics to programming</h2>

<h3 lang=pl>Problem pakowania pudełek</h3>
<h3 lang=en>Box-packing problem</h3>

<p lang=pl>Problem pakowania pudełek to jeden z najstarszych i najczęściej
spotykanych problemów logistycznych. Polega on na tym, że mamy do
dyspozycji pewien zestaw prostopadłościennych pudełek o różnych
wymiarach. Jedne są mniej więcej sześcienne, inne płaskie, a jeszcze
inne długie i wąskie. Mniej więcej jak pudełka po butach lub sprzęcie
elektronicznym, które musimy gdzieś magazynować. Taki zestaw pudełek
należy zapakować do większego pudełka - na przykład szafy tak, aby
pozostało w niej jak najwięcej wolnego miejsca. Można by powiedzieć,
że problem pakowania pudełek to taka praktyczna odmiana Tetrisa.</p>

<p lang=en>Box-packing problem is one of the oldest and most-often
encountered issues in logisticts. It goes like this: you have a set of
cuboid boxes of various sizes. Some of them are more like cubes,
others are flat and others long and thin. Very much likie shoe boxes
or packages left from electronics, which we have to store
somewhere. This set of boxes has to be packed into larger box - for
example a closet i a way that will leave as much free space as
possible. You might say that box-packing problem is a practical
variant of Tetris.</p>

<p lang=pl>Co ciekawe, jak do tej pory nikomu nie udało się napisać
programu, który byłby w stanie zapakować w ten sposób więcej niż
kilkanaście pudełek. Kiedy ich liczba rośnie, powyżej ok. 20, nawet
najlepsze komputery przestają sobie radzić. Najlepsze (i najprostsze)
rozwiązanie to sprawdzenie wszystkich możliwych ustawień i wybranie
tego, które zajmuje najmniej miejsca.</p>

<p lang=en>So far nobody was able to write a program which could pack
more than a few dozens of such boxes. When their number grows beyond
20, even the fastest computers start to have trouble. The
best (and simpliest) solution is to check every possible combination
of positions and to choose the most efficient as an answer.</p>

<p lang=pl>Kilka dni temu opowiadałem o tym znajomej, która zaraz po usłyszeniu
zwróciła uwagę, że bardziej przypomina jej to problem matematyczny niż
informatyczny. Miała oczywiście zupełną rację - jednak tylko w
teorii. W praktyce, kiedy tylko adept programowania w C++ siada do
klawiatury, na jego głowę spada cała masa problemów, które nijak się
mają do sedna problemu. Kilka przykładów to:</p>

<p lang=en>A few days ago I was telling my friend about it and right
after hearing it, she pointed out that it doesn't look like a computer
science problem to her - but more like a mathematics. Of course
- she was completely right - although only in theory. In practice,
whenever an adept of C++ sits down behind a keyboard, an avalanche of
obstacles falls on his head. A few examples:</p>

<ul lang=pl>
<li>przygotować "środowisko programistyczne"
<ul>
<li>wybrać jedno z kilku dostępnych</li>
<li>pobrać i zainstalować</li>
<li>nauczyć się jego obsługi</li>
</ul></li>
<li>w trakcie pisania programu
<ul>
<li>opanować składnię C++</li>
<li>opanować standardową bibliotekę funkcji</li>
<li>zarządzać pamięcią programu</li>
</ul></li>
</ul>

<ul lang=en>
<li>prepare "programming environment"
<ul>
<li>choose one from a few available</li>
<li>download & install</li>
<li>learn how to control it</li>
</ul></li>
<li>while writing a program
<ul>
<li>learn syntax of C++</li>
<li>learn standard library of functions</li>
<li>manage memory of program</li>
</ul></li>
</ul>

<p lang=pl>Do tego warto dodać fakt, że środowiska programistyczne, które możemy
za darmo pobrać z internetu pisane były z myślą o starszych systemach,
takich jak WindowsXP, przez co uruchomienie ich na aktualnym, Windows
8.1, wymaga rozwiązania całego szeregu dodatkowych problemów.</p>

<p lang=en>I might add that programming environment that are freely
available online were written with older OS-es in mind (like
WindowsXP). Running them on current Windows8.1 requires solving a
whole new set of additional difficulties.</p>

<p lang=pl>Problem pakowania pudełek przekształcił się z matematycznego w czysto
techniczny, a nie zaczęliśmy go jeszcze rozwiązywać.</p>

<p lang=en>Box-packing problem transformed from mathematical into
purely technical - and we haven't even started to solve it.</p>

<h3 lang=pl>Programowalne karty graficzne</h3>
<h3 lang=en>Programmable graphics cards</h3>

<p lang=pl>Zmieńmy temat. Sercem każdego komputera jest procesor oraz pamięć
RAM. Nawet najszybsze procesory nie są jednak na tyle szybkie, żeby w
sposób ciągły (czyli z prędkością 60 klatek na sekundę) rysować na
ekranie złożone obrazy. Właśnie dlatego, od mniej więcej 15 lat prawie
każdy komputer (także smartfony) wyposaża się w dodatkowy układ
elektroniczny - kartę graficzną. Sztuczka, która leży u podstaw kart
graficznych polega na tym, że wypełnianie ekranu kolorami lub
kopiowanie obrazów z jednego obszaru pamięci do innego może być
zrealizowane przy wykorzystaniu dużych ilości tanich
procesorów. Zadanie takich procesorów to obliczenie odcieni pikseli na
ekranie, stąd też ich nazwa - jednostki cieniujące (ang. Shader
units).</p>

<p lang=en>Let's change topic. Heart of every computer is the main
processor and the RAM memory. Even the fastest processors aren't fast
enough to continously (which means 60 frames per second) fill the
computer screen with complex pictures. That's why, since around 15
years almost every computer (also smartphones) are equipped with
additional chip - graphical processor. Trick which lies at the
foundation of graphical processors is that filling the screen with
simple colours or copying images from one part of memory to the other
can be accomplished using large amounts of much cheaper and slower
processors. Most ofter the task of such processors is to calculate the
shade of pixels on the screen - and that's where their name comes from
- Shader Units..</p>

<p lang=pl>Jednostki cieniujące to komputery w komputerach. Nie są szybkie, ani
dokładne, ale nadrabiają to swoją ilością. W smartfonach znajdziemy od
kilku do kilkudzisięciu takich procesorów. Karty graficzne
przeznaczone dla entuzjastów gier mogą mieć ich po kilka tysięcy.</p>

<p lang=en>Shader units are computrs within computers. They're not
fast nor precise but they make up with their number. In smartphones
there are from a few to a few dozens shader units. Graphical cards
made for hardcore gamers usually have a few thousands of them.</p>

<p lang=pl>Jednostki cieniujące pracują trochę inaczej niż główny procesor -
każda z nich oblicza kolor pojedynczego piksela. Kiedy skończy, bierze
się za kolejny piksel i tak dalej. Cała bateria jednostek cieniujących
pracuje równocześnie. Programy, które są na nich uruchamiane mogą do
obliczeń wykorzystać dowolne zmienne wysłane w danej klatce przez
procesor. Jedynym wynikiem ich pracy jest końcowy kolor piksela.</p>

<p lang=en>Shader units work slightly differently than main processor
- each one of them is run to calculate the colour of a single
pixel. When it's done, it starts to work on the next one, and so
on. Whole battery of shader units works simultaneously. Programs which
are run on shader units may use any data that was sent by the main
processor in the current frame. Only result of their work is the
colour of the pixel.</p>

<p lang=pl>Język, w którym programuje się jednostki cieniujące nosi nazwę GLSL i
jest łudząco podobny do C++. Jak się okazuje - jest jego uproszczoną
wersją.</p>

<p lang=en>Language which is used to program shader units is called
GLSL and is suprisingly similar to C++. As it turns out - it's C++'s
simplified cousin.</p>

<p lang=pl>Przykładowy kod wygląda tak:</p>
<p lang=en>Simpliest program looks like this:</p>

<pre><code>void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 0.0);
}
</code></pre>

<p lang=pl>W programie są zmienne, na przykład
<code>gl_FragColor</code>, do której można wpisać kolor piksela, a
także funkcje, na przykład <code>vec4</code>, która łączy cztery
liczby w wektor 4-elementowy.</p>

<p lang=en>In the program, there are variables, such as
<code>gl_FragColor</code>, to which you can assign colour of the
pixel, and also functions, such as <code>vec4</code>, which combines
four numbers into 4-element vector.</p>

<p lang=pl>W GLSL nie ma struktur danych, szablonów, zarządzania pamięcią,
klas, ani obiektów. Wszystkie te elementy są typowe dla dużych
programów, a w GLSL się takich nie pisze.</p>

<p lang=en>In GLSL there are no data structures, templates, memory
management, classes nor objects. All these notions are important only
in large programs and in GLSL, you are not expected to write such.</p>

<p lang=pl>GLSL znajduje się gdzieś pomiędzy znaną z lekcji matematyki algebrą, a
C++. Być może ta stosunkowo prosta budowa w połączeniu z wydajnością
kart graficznych uczyni z niego dobry materiał na wprowadzenie do
programowania. Być może nawet na coś więcej.</p>

<p lang=en>GLSL is located somewhere between, known from mathematics,
algebra and C++. Maybe this relatively simple structure together with
speed of graphics cards could make a nice introduction to
programming. Maybe something more.</p>

<p lang=pl>W praktyce jednak, jak zwykle, pojawiają się przeszkody. Do
uruchomienia jakiegokolwiek programu w GLSL potrzebny jest inny
program, który zostanie uruchomiony na głównym procesorze. Program ten
musi wyświetlić okno, wysłać nasz kod GLSL do karty graficznej, oraz
zadbać o wyświetlanie tego co karta wygeneruje.</p>

<p lang=en>In practice however, as usually, there are difficulties. In
order to run any program written in GLSL we need another program,
which will run on the main processor. This main program has to display
a window, send GLSL code to grahics card and display resulting images
generated by graphics card.</p>

<p lang=pl>W zasadzie istnieje kilka programów, które właśnie coś
takiego robią, ale powtarza się tu sytuacja ze środowisk
programistycznych C++ - konieczna jest instalacja programów z którymi
coś może pójść nie tak. Do tego dochodzą ich specyficzne zachowania,
do których również trzeba będzie przywyknąć. Tym razem nie będziemy
godzić się na kompromisy i znajdziemy lepsze rozwiązanie.</p>

<p lang=en>Actually there are a few programs which do exactly this,
but the situation from C++ starts to repeat. We would need to install
more programs, which will have their own peculiar problems and which
will give us even more trouble. This time we won't go for
compromise. Let's find a better solution.</p>

<h3>WebGL</h3>

<p lang=pl>Chyba najbardziej znanym i najbliższym nam obszarem trwającej wojny są
terytoria przeglądarek internetowych. Od jakiegoś czasu zaczęły one
niemal zastępować systemy operacyjne - ogląda się w nich filmy, słucha
muzyki, prowadzi obliczenia w arkuszach kalkulacyjnych, a także gra w
trójwymiarowe gry.</p>

<p lang=en>Probably most widely known and the closest to you teritory
of ongoing war - are web browsers. Some time ago they started to
nearly replace operating systems. Using browser you may watch a movie,
listen to music, do calculations in a spreadsheet or (since recently)
play 3d games.</p>

<p lang=pl>Ten ostatni element został wprowadzony dość niedawno i szybko stał się
niezwykle popularny - głównie ze względu ogromnych pieniędzy jakie
przelewają się przez rynek gier.</p>

<p lang=en>This last piece was introduced very recently and quickly
gained popularity - mainly because of the huge amounts of money
flowing through game market.</p>

<p lang=pl>WebGL jest zestawem funkcji, który dostępny jest w większości nowych
przeglądarek, a służy do wydawania poleceń karcie graficznej. Jego
obecność można sprawdzić na stronie <a href="get.webgl.org">get.webgl.org</a>.</p>

<p lang=en>WebGL is a set of functions, available in most of the new
web browsers. It can be used to control graphics card. You can check
its presence on a website <a href="http://get.webgl.org">get.webgl.org</a>.</p>

<p lang=pl>Przy wykorzystaniu funkcji WebGL, dowolna strona może korzystać z
dobrodziejstw karty graficznej. Wygląda na to, że zneleźliśmy
odpowiedź na wcześniejsze pytanie. Program-gospodarz, który potrzebny
jest do pisania programów w GLSL może być zwyczajną stroną
internetową.</p>

<p lang=en>Using WebGL functions, any website can take advantage of
graphics card. It looks like we have found an answer to the earlier
question. Host-program, which is needed to write programs in GLSL can
be a normal website.</p>

<p lang=pl>Wciąż będziemy potrzebować aktualnej przeglądarki, ale do
programowania wystarczy nam wejść na odpowiednią stronę, na przykład
<a href="shadertoy.com">shadertoy.com</a>.</p>

<p lang=en>We are still going to need a recent browser, but in order
to program it will be enough to go certain website, for example
<a href="http://shadertoy.com">shadertoy.com</a>.</p>

<p lang=pl>Strona <a href="shadertoy.com">shadertoy.com</a> zawiera duży zestaw programów
napisanych w GLSL oraz zintegrowany edytor. Zanim rozpocznie się
kodowanie, warto przejrzeć napisane przez innych programy. Jeśli ich
kod wyda się na początku zbyt skompilkowany, nie ma co panikować -
weterani GLSL znają sporo sztuczek oraz ciekawych funkcji, które staną
się jasne w miarę nauki języka. No i, rzecz jasna dobre rozwiązania
należy powtarzać - wszystkie programy na Shadertoy mają załączony kod
z możliwością jego kopiowania.</p>

<p lang=en>Website <a href="shadertoy.com">shadertoy.com</a> contains
a large library of programs written in GLSL and an integrated
editor. Before you start writing any code, it's worth taking a look at programs
written by others. If their code looks too complicated at first, don't
panic - veterans of GLSL have some tricks which you'll understand
while learning the language. Also, good ideas should be shared - all
programs on Shadertoy have their source code attached, including
ability to copy and paste.</p>

<h3>GLSL</h3>

<p lang=pl>Jako dodatek do tego artykułu załączony jest szybki przewodnik po
języku GLSL. Zawiera prawie wszystko czego potrzeba do rozpoczęcia
programowania - opis składni, tabele z funkcjami oraz dostępnymi
typami danych.</p>

<p lang=en>As an addition to this article there is a quick digest of
GLSL syntax attached. It contains almost everything you need to know
in order to start programming in GLSL - syntax description, tables
with functions and available data types.</p>

<p lang=pl>W razie komunikatów z błędami, należy je skopiować do wyszukiwarki
(pomijając nazwy zmiennych i numery linijek). Ktoś, gdzieś, pewnie
miał już podobny problem - rozwiązanie jest więc pewnie na jakimś
forum.</p>

<p lang=en>In the case of error messags - copy them to the browser
(skipping variable names and line numbers). Someone, somewhere
probably had a similar problem - the solution should be on some forum,
somewhere.</p>

<p lang=pl>Oto kilka przykładowych kodów - od czgoś trzeba przecież zacząć:</p>
<p lang=en>You need something to start from - here are o few examples:</p>

<h4 lang=pl>Jednolity kolor</h4>
<h4 lang=en>Solid colour</h4>

<p lang=pl>Kolejne wartości w wektorze <code>gl_FragColor</code> odpowiadają poszczególnym
składowym koloru: czerwonej, zielonej i niebieskiej. Ostatni element
to tzw. współczynnik krycia. Ogólnie pozwala tworzyć animacje, które
są miejscami przeźroczyste, ale Shadertoy z tej funkcji nie korzysta.</p>

<p lang=en>Subsequent values in a vector <code>gl_FragColor</code>
represent colour components: red, green and blue. Last element is
called alpha-value. It can make some parts of the image
transparent. Shadertoy ignores alpha value - only first three are
important.</p>

<pre><code>void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
</code></pre>

<h4 lang=pl>Płynne przejście kolorów</h4>
<h4 lang=en>Smooth colour transition</h4>

<p lang=pl>Korzystając ze zmiennych <code>gl_FragCoord</code> (współrzędne aktualnego
piksela) oraz <code>iResolution</code> (rozmiary okienka WebGL) można zróżnicować
kolor dla różnych pikseli tworząc tym samym łagodne przejście kolorów:</p>

<p lang=en>Using variables such as <code>gl_FragCoord</code>
(containing coordinates of current pixel) and <code>iResolution</code>
(size of WebGL window) you might vary the colour of pixels creating a
smooth transition:</p>

<pre><code>void main() {
  vec2 p = gl_FragCoord.xy / iResolution.xy;
  gl_FragColor = vec4(p, 0.0, 1.0);
}
</code></pre>

<h4 lang=pl>Tekstura</h4>
<h4 lang=en>Texture</h4>

<p lang=pl>Aby dodać teksturę, w jednym z czarnych okienek zatytułowanych
<code>iChannel0..3</code> należy wybrać obrazek lub film. Od tej pory możemy
korzystać z funkcji <code>texture2D</code> żeby pobierać z niego wartości kolorów:</p>

<p lang=en>In order to add a texture, click one of black rectangles
labelled <code>iChannel0..3</code> and choose image or movie. From now
on you may use function <code>texture2D</code> to retrieve colour
values from it:</p>

<pre><code>void main() {
  vec2 p = gl_FragCoord.xy / iResolution.xy;
  vec4 t = texture2D(iChannel0, p);
  gl_FragColor = vec4(p, 0.0, 1.0) * t;
}
</code></pre>

<h4 lang=pl>Kółko</h4>
<h4 lang=en>Circle</h4>

<pre><code>void main() {
  vec2 p = gl_FragCoord.xy / iResolution.xy;
  vec4 t = texture2D(iChannel0, p);
  gl_FragColor = vec4(p, 0.0, 1.0) * t;

  vec2 s = vec2(150.0, 150.0);
  float d = distance(gl_FragCoord.xy, s);
  float r = 100.0;
  gl_FragColor += clamp(r - d, 0.0, 1.1);
}
</code></pre>

<h4 lang=pl>Muzyka w karcie graficznej</h4>
<h4 lang=en>Music on the graphics card</h4>

<p lang=pl>Naprawdę ciekawie robi się kiedy grafikę połączy się z muzyką. W
<code>iChannel1</code> jako teksturę wybierz utwór muzyczny (powinny być widoczne
na dole listy). Wybierając go dostaniesz do dyspozycji nową teksturę -
obrazek o wysokości 2 i szerokości kilkuset pikseli. Górny wiersz
zawiera falę akustyczną odtwarzanej muzyki, a dolny, jej
widmo. Wartości z tej tekstury możesz wykorzystać do sterowania
grafiką:</p>

<p lang=en>It gets really interesting when you connect graphics with
music. Click <code>iChannel1</code> and as a texture select a musical
piece (they should be at the bottom of the list). This way you'll get
new texture - picture of height 2 and width of a few hundred
pixels. Upper row contains acoustic wave of the played music. Bottom
row contains its spectrum. You can use values from this texture to
drive the parameters of graphics:</p>

<pre><code>void main() {
  vec2 p = gl_FragCoord.xy / iResolution.xy;
  vec4 t = texture2D(iChannel0, p);
  gl_FragColor = vec4(p, 0.0, 1.0) * t;

  vec2 s = vec2(150.0, 150.0);
  float d = distance(gl_FragCoord.xy, s);
  float r = 100.0 * texture2D(iChannel1, vec2(0.5, 0.0)).x;
  gl_FragColor += clamp(r - d, 0.0, 1.1);
}
</code></pre>

<h4 lang=pl>Widmo i fala</h4>
<h4 lang=en>Spectrum and wave</h4>

<p lang=pl>Różnicę między widmem i falą oraz ich właściwości łatwo zobaczyć
rysując je obok siebie:</p>

<p lang=en>The difference between spectrum and wave can be best seen
when they are next to each other:</p>

<pre><code>void main() {
  vec2 p = gl_FragCoord.xy / iResolution.xy;
  vec4 t = texture2D(iChannel0, p);
  gl_FragColor = vec4(p, 0.0, 1.0) * t;

  float d = gl_FragCoord.y;
  float r = 50.0 * texture2D(iChannel1, vec2(p.x, 0.0)).x;
  float b = 50.0 * texture2D(iChannel1, vec2(p.x, 1.0)).x;
  gl_FragColor.r += clamp(r - d, 0.0, 1.0);
  gl_FragColor.b += clamp(b + d - iResolution.y, 0.0, 1.0);
}
</code></pre>

<h3 lang=pl>Pakowanie pudełek</h3>

<h3 lang=en>Box-packing</h3>

<p lang=pl>GLSL jest ciekawym językiem. Kiedy obejrzy się wizualizacje, które z
jego pomocą da się osiągnąć, robi wrażenie. Stosunkowa prosta budowa
oraz podobieństwo do C++ usuwa wiele problemów i czyni go
łatwiejszym do ogarnięia, zwłaszcza na początku nauki. Obecność
narzędzi takich jak Shadertoy pozwala ominąć konieczność instalacji
jakichkolwiek dodatkowych programów, co jeszcze bardziej przyspiesza
start.</p>

<p lang=en>GLSL is an interesting language. After seeing some of the
visualisations which it can achieve, it gives a thrill. Relative
simplicity and resemblance of C++ removes most of the problems and
make it easier to grasp, especially at the beginning. Presence of
tools such as Shadertoy gives a way to circumvent typical difficulties
of installing new software and speeds up start even more.</p>

<p lang=pl>Ale nie ma róży bez kolców. GLSL pozwala liczyć ciekawe rzeczy, ale
jego zastosowanie ogranicza się obliczeń numerycznych oraz kolorowania
ekranu - próba rozwiązania w nim najprostszego zadania logicznego -
posortowania listy liczb czy też wybrania najmniejszego elementu z
tablicy są co prawda możliwe, ale wiążą się z uciążliwym i nadmiarowym
kodem. Pomimo swojej wydajności, z pewnością nie jest to język, w
którym moglibyśmy pakować pudełka.</p>

<p lang=en>There's no rose without a thorn. GLSL allows only one type
of calculation - numerical. Trying to solve simpliest algorithmic task
- such as sorting a list of numbers or choosing the smallest element
in an array are theoretically possible but require troublesome and
excessive programming. Despite it's performance, it certainly isn't a
language in which we might pack the boxes.</p>

<hr>

<h2 lang=pl>Ściąga GLSL</h2>
<h2 lang=en>GLSL - handy digest</h2>

<p lang=pl>Możesz ją pobrać stąd:
[mrogalski.eu/glsl/open_gl_sciaga.pdf](open_gl_sciaga.pdf).</p>

<p lang=en>It's available here:
[mrogalski.eu/glsl/open_gl_sciaga.pdf](open_gl_sciaga.pdf). It's
polish translation of an excerpt from [OpenGL ES 2.0 API Quick Reference Card](http://www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf).</p>

<hr>

<h2 lang=pl>Odnośniki</h2>
<h2 lang=en>Links</h2>

<h3 lang=pl>Środowiska</h3>
<h3 lang=en>Environments</h3>

- [GLSL Sandbox](http://glsl.heroku.com/)
- [Shadertoy](https://www.shadertoy.com)

<h3 lang=pl>Dema</h3>
<h3 lang=en>Demos</h3>

<ul lang=pl>
<li>[Nieskończona szachownica](http://glsl.heroku.com/e#15846.5) -
  element wprowadzenia do GLSL, który omawiałem z AMT.</li>
<li>[Undulant Spectre](https://www.shadertoy.com/view/XsjGz3) - demo
  korzystające z muzyki i wideo</li>
<li>[Circle Yoga](https://www.shadertoy.com/view/4sBGDV) -
  (stary) algorytm zaokrąglający narożniki w Dessinie</li>
<li>[00100100](https://www.shadertoy.com/view/lsS3DK) - powyższy
  algorytm wykorzystany do płynnego przekształcenia prostokąta w kółko</li>
</ul>

<ul lang=en>
<li>[Infinite checkerboard](http://glsl.heroku.com/e#15846.5) -
  element of an introduction to GLSL, which I covered at AMT.</li>
<li>[Undulant Spectre](https://www.shadertoy.com/view/XsjGz3) - demo
  using music and video</li>
<li>[Circle Yoga](https://www.shadertoy.com/view/4sBGDV) -
  (old) algorithm used to calculate rounded corners in Dessin</li>
<li>[00100100](https://www.shadertoy.com/view/lsS3DK) - above
algorithm used to smoothly transition between a rectangle and a circle</li>
</ul>

<h3 lang=pl>Biblioteki</h3>
<h3 lang=en>Libraries</h3>

- [glsl.js](http://greweb.me/2013/02/glsl-js-a-javascript-glsl-library-dry-efficient/)
