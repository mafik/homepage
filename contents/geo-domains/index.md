---
date: 2013-09-07
title_pl: Domeny Koordynatowe
title_en: Geo-Coord-Domains
desc_pl: Darmowe domeny dla każdego - rewolucja Internet Of Things
desc_en: Free domains for every device - revolution in Internet Of Things
template: article.jade
thumb: thumb.jpg
---

<h1 lang=pl>Domeny Koordynatowe</h1>
<h1 lang=en>Geo-Coord-Domains</h1>

<p lang=pl>To potencjalna domena pozwalająca nadawać krótkie nazwy
hostom na podstawie ich położenia geograficznego.
<p lang=en>It's a potential scheme for domains that assigns short
names to hosts based on their geographical location.

<h2 lang=pl>Budowa</h2>
<h2 lang=en>Structure</h2>

<p lang=pl>Przykład nazwy dla mojego komputera to: `munchkin.uJId.g`. Domena
składa się z trzech części:

<p lang=en>For my computer, geo-coord-domain is:
`munchkin.uJId.g`. Domain is constructed from three parts:

<dl>
  <dt>`munchkin`</dt>
  <dd lang=pl>to nazwa hosta.</dd> 
  <dd lang=en>is the hostname.</dd>
  <dt>`uJId`</dt>
  <dd lang=en>contains encoded (dedicated format using base64) geographical coordinates: 51,75 19,56</dd>
  <dd lang=pl>zawiera zakodowane (specjalny format binarny w base64) współrzędne geograficzne: 51,75 19,56</dd>
  <dt>`g`</dt>
  <dd lang=pl>to domena najwyższego poziomu zawierająca domeny koordynatowe.</dd>
  <dd lang=en>is a top-level geo-coord-domain.</dd>
</dl>

<h2 lang=pl>Działanie protokołu</h2>
<h2 lang=en>Domain resolution</h2>

<p lang=pl>Klient chcący rozwiązać nazwę wykonuje zapytanie do bazy danych
przestrzennych wykorzystując odkodowane współrzędne oraz nazwę hosta
która ma zostać wyszukana w danym obszarze.

<p lang=en>Client resolving a name decodes geographical
coordinates and then queries a geographical database for the nearest
host with a specified name.

<p lang=pl>W przypadku sieci kratowych może wysłać komunikat rozgłoszeniowy na
odczytane współrzędne. W przypadku sieci IP baza danych przestrzennych
może działać na serwerze.

<p lang=en>When used in mesh networks, he don't even needs to resolve
the address and can send a broadcast directly towards specified
coordinates. In IP networks, there is a need for a database
running on some known server.

<p lang=pl>Wynikiem zapytania jest adres IP.

<p lang=en>Result of query is going to be host's IP address.

<p lang=pl>Jeśli w bazie danych znajdzie się wiele adresów (być może nastąpiła
próba przejęcia adresu bądź adres opisuje zasoby rozproszone na wielu
hostach), zwracane są wszystkie rekordy. Wybór właściwego należy do
klienta i może zostać dokonany z wykorzystaniem metod
kryptograficznych.

<p lang=en>If the database contains multiple addresses (maybe there
was attempt to overtake an address or address describes resources
located on many different hosts), all records are returned. Choice of
the right one belongs to the client and should be performed using
cryptograhic signatures.

<h2 lang=pl>Routing w sieciach kratowych</h2>

<h2 lang=en>Routing in mesh networks</h2>

<p lang=pl>W sieciach kratowych opartych na współrzędnych geograficznych
koordynatowe adresy DNS w ogóle nie muszą być rozwiązywane. Odczytane
wartości mogą zastać wykorzystane bezpośrednio w routingu wiadomości.

<p lang=en>In mesh networks based on geographical coordinates,
geo-coord-domains don't need to be resolved at all. Coordinates can be
used directly in message routing.

<h2 lang=pl>Maskowanie, tunele i roaming</h2>

<h2 lang=en>Masking, tunnels and roaming</h2>

<p lang=pl>Możliwe jest tworzenie wirtualnych hostów. Router znajdujący się
pod danym adresem może tunelować wiadomości trafiające do wirtualnego
hosta pozwalając w ten sposób na roaming urządzeń mobilnych.

<p lang=en>It's possible to create virtual hosts. Router placed at
right address can tunnel messages to other, mobile host, thus allowing
mobile roaming.

<h2 lang=pl>Konstrukcja adresu</h2>

<h2 lang=en>Address construction</h2>

<p lang=pl>Adres budowany jest przez binarne dzielenie naprzemiennie długości
i szerokości geograficznej oraz zapamiętywanie czy szukany punkt
posiada większą czy mniejszą daną współrzędną.

<p lang=en>Address is built by alternatively, dividing longitude and
latitude by choosing whether the desired coordinate is higher or lower
than current division.

<p lang=pl>Z tak, naprzemiennie przetasowanych wartości binarnych tworzy się
liczbę, którą koduje się <em>kodem graya</em>. Dzięki temu pobliskie
lokalizacje posiadać będą niewiele różniące się adresy.

<p lang=en>These alternatively shuffled binary strings create a large
number which is then encoded using *gray code*. Thanks to this
encoding, nearby locations will have similar addresses.

<p lang=pl>Gotowy ciąg binarny koduje się za pomocą Base64. Kolejne sześć
wartości binarnych odpowiada pojedynczemu znakowi zakodowanego adresu.

<p lang=en>Gray-coded number should be encoded using Base64. Every six
subsequent binary digits are going to be encoded as one more character.

<p lang=pl>Kolejne znaki adresu dzielą poprzedni zakres na 64 części.

<p lang=en>Every additional character is going to divide previous
range into 64 parts.

<p lang=pl>*Wzorcowa implementacja powyższego algorytmu w języku javascript
znajduje się w kodzie źródłowym tej strony.*

<p lang=en>*Example (JavaScript) implementation can be found [here](script.js).*

<h2 lang=pl>Generator adresów</h2>

<h2 lang=en>Address generator</h2>

<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script src="//code.jquery.com/jquery.min.js"></script>
<script src="script.js"></script>

<div><label lang=pl for="host">Nazwa hosta:</label><label lang=en for="host">Hostname:</label><input type="text" id="host" value="munchkin"></div>
<div><label lang=pl for="dlugosc">Długość:</label><label lang=en for="dlugosc">Longitude:</label><input type="text" id="dlugosc" value="19.54"></div>
<div><label lang=pl for="szerokosc">Szerokość:</label><label lang=en for="szerokosc">Latitude:</label><input type="text" id="szerokosc" value="51.73"></div>
<div><label lang=pl for="dokladnosc">Znaków adresu:</label><label
lang=en for="dokladnosc">Number of characters:</label><select id="dokladnosc">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option selected>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
</select></div>
<hr />
<div><label lang=pl for="adres">Adres:</label><label lang=en for="adres">Address:</label><input type="text" id="adres"></div>
<div id="odczytany_host"></div>
<div id="odczytana_dlugosc"></div>
<div id="odczytana_szerokosc"></div>
<div id="mapa" style="width: 100%; height: 20em;"></div>
