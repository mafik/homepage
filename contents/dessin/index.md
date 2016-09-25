---
title: Dessin
date: 2013-10-01
template: article.jade
desc_pl: Wreszcie sposób hakowania na touchscreenie
desc_en: Finally, a way to hack on touchscreen
title_pl: Dessin
title_en: Dessin
thumb: img.png
---

# Dessin

<p lang=pl>Dessin (czytane jak "dezajn") to program na androida, który napisałem
na konkurs Samsung AppCup, a później postanowiłem rozwijać dalej.

<p lang=en>Dessin (read like "design") is an android app, which I've written as
a submission to Samsung AppCup (got 1st place!) but keept developing after the contest.

<p lang=pl>Więcej możesz o nim poczytać na [dessin.it][]. Regularne aktualizacje
pojawiają się także na profilach społecznościowych - na [Google+][],
[Facebooku][Facebook] oraz na [YouTube][].

<p lang=en>You can read more at [dessin.it][]. Regular updates show up on social profiles -
at [Google+][], [Facebook][] and [YouTube][].

   [dessin.it]: http://dessin.it/
   [Google+]: https://plus.google.com/b/112343231896739382693/
   [Facebook]: https://www.facebook.com/pages/Dessin/410850499024675
   [Facebook]: https://www.facebook.com/pages/Dessin/410850499024675
   [YouTube]: http://www.youtube.com/channel/UC7zZQN7CF-JdYJCe3wT6YcA

<p lang=pl>Tutaj natomiast mogę napisać co nieco o Dessinie od podszewki. Jak był
tworzony? Jakie kierunki będą rozwijane? itd. Rzeczy, które
zainteresują raczej znajomych i ciekawskich, niż ogólną publikę.

<p lang=en>Here I can leave somewhat more technical information about Dessin. How
have I developed it? Where is its development headed? etc. Things that are more
of interest to curious and friends than to other users.

<h2 lang=pl>Środowisko wielodotykowe </h2>
<h2 lang=en>Multitouch environment</h2>

<p lang=pl>Głównym motywem do stworzenia Dessina
była ułomność urządzeń mobilnych, na których łatwo i wygodnie się
czyta i ogląda, ale praca na takim urządzeniu to już prawdziwy
problem. Na takich urządzeniach nie ma mowy o [najzwyczajniejszym
hakowaniu][0]. Gdy coś się psuje, jedynym ratunkiem są modlitwy do
programistów.

<p lang=en>The main motives for Dessin were limits of mobile devices
which are nice and fast when reading or watching but not when it comes
to do real work. Don't even mention [casual hacking][hack_en]. When
something gets broken, you are on the mercy of developers.

   [0]: http://pl.wikipedia.org/wiki/Spo%C5%82eczno%C5%9B%C4%87_haker%C3%B3w
   [hack_en]: http://en.wikipedia.org/wiki/Hacker_(programmer_subculture)

<p lang=pl>Nawet programiści są jednak bezsilni bez narzędzi takich jak
środowiska programistyczne czy narzędzia do kompilowania, instalacji i
debugowania - dostępne tylko na *prawdziwych* komputerach.

<p lang=en>Even developers are powerless without tools such as IDEs,
compilers, debuggers - available only on *real* computers.

<p lang=pl>A szkoda, bo czytając artykuły (popularno)naukowe z ostatnich dekad
(zwłaszcza z "ZUI" w tytule), można by się spodziewać, że ekrany
dotykowe oraz tzw. *bezpośrednia interakcja* miała stać się rewolucją
w pracy z komputerem.

<p lang=en>That's a pity because after reading some of the articles
from the last years (especially with "ZUI" in title), one might get
the impression that touch screens and so called *direct manipulation*
should have been the biggest revolution since the introduction of
computer mouse.

<p lang=pl>W artykułach tych autorzy piszą, jak dobrze różnego rodzaju
struktury połączone - diagramy, grafy, sieci - opisują rzeczywiste
obiekty. Piszą też, że to przez toporność klawiatury oraz ograniczone
możliwości manipulacji myszką tak ciężko korzysta się z tej
reprezentacji.

<p lang=en>They write how naturally various connected structures -
diagrams, graphs, networks - describe real objects. But in order to
use them in our daily computing we still have to find a way around our
limited interfaces &dash; keyboard and mouse - which turn manipulation
of these rich objects into slow and painfull experience.

<p lang=pl>Co zatrzymało te nowe, futurystyczne środowiska? Czemu
wciąż nie możemy zaglądać do pracujących programów i oglądać
przesyłanych przez różne moduły komunikatów? Czemu budowanie aplikacji
nie może polegać na połączeniu kilku klocków (jak w UML-u), a (z
bardziej codziennych zajęć) znajomi jadący na imprezę nie mogą
skoordynować się za pomocą mapy ze swoimi lokalizacjami (zrobionej na
poczekaniu).

<p lang=en>What stopped these crazy, futuristic environments? Why
can't we take a peek into running applications and see messages
exchanged between components? Why building a new application can't be
as simple as building it from bricks (like in UML)? I think that
programming could be as casual as gaming - normal people could write
throw-away applications whenever they need them. Applications for
communicating with other people - understanding world around them -
and performing mundane tasks - just like the most tech-savy people do
now.

<p lang=pl>Po części problemem są systemy operacyjne - izolują
aplikacje oraz uniemożliwiają (w miarę swoich możliwości)
użytkownikowi modyfikowanie systemu i programów. Idzie to nawet
dalej. W *Wytycznych Androida* można przeczytać <cite>"Too many
choices and decisions make people unhappy."</cite> Ceniony jest
tzw. *clean design* - gdzie jasno pokazane jest co i jak ma
działać. Najlepiej jeśli użytkownik nie ma nawet możliwości
popełnienia błędu. Niestety, clean design nie zawsze idzie w parze z
funkcjonalnością.

<p lang=en>Biggest blame goes to operating systems - they isolate
applications and make it as hard as possible for the user to modify
the system and applications. It goes even further. In *Android
Guidelines* you can read that <cite>Too many choices and decisions
make people unhappy</cite>. Most valuable is so called *clean design*
&dash; where an app does one simple thing and guides the user
step-by-step - preferably without ever giving an opportunity to make
an error. Sadly, *clean design* very rarely goes along with
functionality.

<p lang=pl>Co więc zrobić inaczej, żeby na ekranie dotykowym dało się
zrobić wszystko to samo (a nawet więcej) co w, powiedzmy Bash-u?

<p lang=en>So what to do so that we could use touch screens to achieve
the same stuff (and possibly more) as in, let's say, Bash?

<p lang=pl>Potrzebny jest sposób łączenia różnych programów (i danych)
w układy - coś jak języki programowania, ale przystosowane do
działania na ekranie dotykowym. Żaden problem - mamy grafy. Pozwalają
grupować, porządkować oraz zasadniczo łączyć dowolne elementy
(wierzchołki). To daje nam podstawową strukturę danych.

<p lang=en>We need a way to connect (in an *ad-hoc* manner) a variety of applications
(and data) into structures - just like in programming languages, but
in a way more natural for touch screens. Well no problem - we have
graphs. They allow grouping, ordering and connect any elements
(vertices). This should do for the basic data structure.

<p lang=pl>Czym w takim razie mają być wierzchołki? Może
programami. Wtedy przez krawędzie przesyłane byłyby dane i całość
działałaby jak sieć strumieni. A może jednak to pliki będą
wierzchołkami? Wtedy każdy program (krawędź) mogłaby pobierać dane z
pliku wejściowego i zapisywać do wyjściowego (jak w UNIX-ie). Obie
opcje wydają się kuszące. Może więc nie podejmować decyzji za
użytkownika i niech korzysta z tych narzędzi, które działają dla niego
lepiej?

<p lang=en>What should vertices represent then? Programs maybe? The
edges could then relay data and the whole graph could work like in a
dataflow network. But on the other hand, maybe vertices could
represent files? The edges could process data - reading from one file
and writing to another (like in UNIX). Both options seem
usefull. Maybe then it's better not to make decision for the user and
let him choose the tool that works best?

<p lang=pl>Co więcej, po napisaniu jakiegoś ciekawego programu (albo w
jego trakcie) ciekawa wydaje się możliwość udostępnienia go innym - do
równoczesnej edycji bądź jako szablon/gotowy skrypt. W dobrym
środowisku tych możliwości nie może zabraknąć. Może znajdzie się nawet
jakaś sprytna metoda wyszukawania gotowych fragmentów kodu (albo
raczej rysunków), które realizowałyby konkretne zadanie...

<p lang=en>Moreover, after building a useful application (or even
during building) it might be nice to share it - to edit
simultaneously or like a packaged, re-usable module. Good hacking
environment can't miss this features.

<p lang=pl>Takie środowisko samo w sobie powinno zawierać wszystko
czego może potrzebować użytkownik - podstawowe typy danych i operacje
powinno dać się komponować we *wszystko* co mogą klasyczne programy.

<p lang=en>Such hacking should contain every building block that a
user might need in order to assemble *anything* that normal programs
can do.

<p lang=pl>Kiedy każde narzędzie, każde polecenie i każda zmienna
stanowią wierzchołki grafu mamy szanse zaobserwować ciekawą właściwość
&dash; synergię. To ma miejsce, kiedy jedno narzędzie, stworzone do
pracy z konkretnymi danymi okazuje się rozwiązywać podobny problem w
zupełnie innej dziedzinie. Weźmy program, który sortuje filmy na
podstawie pytania o lepszy/gorszy z dwóch wybranych. Możemy go z
powodzeniem zastosować do zaplanowania meczy w turineju
piłkarskim. Taki turniej wyłoni nie tylko 3 pierwsze miejsca, ale w
pełni "posortuje" drużyny.

<p lang=en>When every tool, every command and every variable are
represented as vertices and manipulated in a common way - we may
observe an interesting property - synergy. It happens when one tool,
created to manipulate one kind of data, happens to solve similar
problem in completely different domain. Let's take a program that
sorts movies based on a series of better/worse comparisons. We could
use it to plan a series of matches in a tournament. Such tournament
could find not only first three places, but it could completely
*order* competitors.

<p lang=pl>Brzmi wspaniale. Tylko ile narzędzi będzie potrzebnych do
obsługi czegoś takiego. Pamiętajmy też, że cokolwiek zrobimy ręcznie,
musi być możliwe do zautomatyzowania. Potrzebujemy odpowiedniego
interfejsu - takiego, który nie tylko byłby wygodniejszy od typowych
toolbarów, ale również dałby się zautomatyzować. Czemu więc nie
skorzystać by więc z grafu? Część wierzchołków i krawędzi mogłaby
przecież reprezentować interfejs. W ten sposób użytkownik nie tylko
będzie mógł go "oskryptować", ale nawet zupełnie wymienić.

<p lang=en>That sounds wonderful. But how many tools will we need to
control this machinery? Let's remember, that whatever can be done
manually, has to be automatable. We need proper interface - one, that
not only would be more convenient that menus and toolbars, but easily
undergo automation. Maybe go along and use the graph? Some of vertices
and edges could represent the interface. This way the hacker could not
only "script" the interface, but completely replace it.

<p lang=pl>No i, oczywiście, nie będzie w nim toolbarów - skorzystamy
za to z przyjemniejszych w dotyku tzw. pie menu.

<p lang=en>And of course there won't be any toolbars. Instead of them,
much easier in touch, pie menus.

<p lang=pl>Tak wygląda motyw stojący za Dessinem. Spodziewam się, że
faktyczna implementacja zostanie skończona gdzieś w 2014 roku. Barierę
stanowi oczywiście platforma (Android), oraz kwestie biznesowe
(reklama, obecność w mediach społecznościowych, finansowanie itd.).

<p lang=en>That's how stands the motive behind Dessin. I expect to
finish it sometime around 2014. Biggest obstacle if of course the
platform - Android and business matters (marketing, social, financing
etc.) but with such clear target they should be easy to overcome.



