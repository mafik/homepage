---
date: 2012-12-24
title_pl: Generator Tekstów wg. Łańcucha Markowa
title_en: Text Generator Using Markov Chains
desc_pl: Najszybszy sposób na automatyczne generowanie realistycznych tekstów.
desc_en: Fastest way to automatically generate realistic texts.
renderer: render_article
thumb: thumb.jpg
---

<h1 class=compact lang=pl>Generator Tekstów wg. Łańcucha Markowa</h1>
<h1 class=compact lang=en>Text Generator Using Markov Chains</h1>

<p lang=pl>Oto generator tekstów w dowolnym języku. Korzysta z korpusu w postaci plików tekstowych umieszczonych w katalogu sources.</p>

<p lang=en>Here is generator of texts in any language. It uses corpora in the form of a set of files located in the <code>sources</code> directory.</p>

<p lang=pl>Korzystając z ostatnich trzech słów, dobiera kolejne. Szczegóły działania można poznać bezpośrednio w kodzie:</p>

<p lang=en>Using last three words, it chooses next one. Details are in the source code:</p>

<pre>
#!/usr/bin/env python3
import sys
import os, fnmatch, random

sources = [ 'source/{}'.format(file) for file in os.listdir('source') if fnmatch.fnmatch(file, '*.txt') ]

n = 3
data = {}
remove = { ord(i):None for i in '"\'()[]!*-—#0123456789;%' }

for f in sources:
  text = open(f, encoding='cp1250').read().translate(remove)
  text_splitted = text.split()
  for i in range(len(text_splitted)-n-1):
    key = ' '.join(text_splitted[i:i+n])
    value = text_splitted[i+n]
    if key in data: 
      data[key].add( value )
    else:
      data[key] = {value}
      
tokens = 'Three starting words'.split()

output = []
while len(output) < 400:
  token_string =  ' '.join(tokens)
  choices = data[token_string]
  token = random.choice(list(choices))
  if len(choices) > 1:
    print(token_string, ':', choices)
  if len(choices) > 1: output.append('#')
  output.append(tokens[n-1])
  if len(choices) > 1: output.append('#')
  tokens = tokens[1:] + [token]
print(' '.join(output))
</pre>

<p lang=pl>A oto i przykładowy, wygenerowany tekst (znakami # zaznaczone są miejsca gdzie kontekst uległ zmianie):</p>

<p lang=en>And here is an example text generated with it (<code>#</code> characters were used to indicate places where context was changed):</p>

<blockquote>
może wykonać tylko któryś z nas. To # znaczy, # # że # informacje Magnifica o Mule były nieprawdziwe? spytała Bay ta. Były mylące. Były zabarwione patologicznym lękiem. Muł nie jest, # jak # myśli Magnifico, żadnym olbrzymem. Bardziej prawdopodobne jest to, # że # to o n przekupił mnie. Dwa miesiące trudnej wojny pozostawiły swój ślad na Bel Riosie. Był niesamowicie poważny i łatwo wybuchał gniewem. Do wpatrzonego weń jak w obraz sierżanta Luka rzekł z # wyraźnym # # zadowoleniem # Indbur. W jego ciemnych szkłach kontaktowych odbiło się światło, nadając spojrzeniu, wyraz surowości. Starannie rozłożył przed sobą wachlarz teczek z aktami i zaczął przewracać wpięte w nie pergaminowe karty, które wydawały przy tym suchy szelest. Wodząc palcem wzdłuż linijek mówił wolno: Mam tutaj wasze kompletne dane, kapitanie... Macie czterdzieści trzy lata i przez siedemnaście lat służyliście jako oficer w siłach zbrojnych. Urodziliście się na Loris, rodzice są Anakreończykarni, w dzieciństwie nie przechodziliście żadnych poważnych chorób, mieliście atak myo... to nieważne... wykształcenie cywilne politechnika, specjalność silniki hiperatomowe, stopień naukowy. .. hmm, bardzo dobrze, muszę wam pogratulować... wstąpił do armii jako podoficer sto drugiego dnia roku ery fundacyjnej. Podniósł wzrok, gdy tylko odłożył pierwszą i otworzył drugą teczkę. Widzicie powiedział w mojej administracji nie ma miejsca na przypadek. Tu jest porządek System Podniósł do # ust # różową, pachnącą galaretkę. Była to jego jedyna słabość. Folgował jej z pewnym poczuciem winy. Że nie miał innych, niechaj świadczy fakt, iż na biurku burmistrza nie było normalnego w takich wnętrzach akcesorium atomowej popielniczki dla dezintegracji resztek tytoniu. Burmistrz nie palił. Oczywiście, nie palili też jego goście. Czytał dalej z galaretką w ustach, niewyraźnie, ale metodycznie, jednostajnym głosem, przeplatając suche informacje swoimi banalnymi uwagami. Bez względu # na # # to, # # co # dzieje # się # poniżej, ani wewnątrz umocnień. Wiedział, że potrzebować będzie wszystkich pozostałych mu jeszcze sił. Zatracił poczucie upływającego czasu. W pewnej # chwili # przystanął i spytał: Dlaczego się tak wykrzywiasz? Hober Mallow ocknął się # z # niejasną świadomością docierającego z oddali dźwięku. Leżał na plecach, przetoczył się więc na bok, mocno przytykając ucho do powierzchni ziemi. Usłyszał ciężkie dudnienie. Z początku pomyślał, że to szumi rozgrzana gorączką krew, lub że to jeszcze # jeden # nocny koszmar, jednak w # miarę # bezpieczną przeprawę. Lura nie kryła, że zdawanie się na # tak # sporządzonym kosturze, zaczął powolny spacer. Czym dłużej chodził, tym
</blockquote>