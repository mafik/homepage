---
title_pl: Kalkulator wartości wolnego czasu
title_en: Free time value calculator
desc_pl: Za pomocą tego wzoru obliczysz ile warta jest godzina twojego życia.
desc_en: Use this formula to calculate how much is worth an hour of your life.
template: article.jade
thumb: efficiency.png
date: 2015-07-15
---

<h1 lang=pl>Ile wart jest twój czas?</h1>
<h1 lang=en class=compact>Is it worthwhile?</h1>

<p lang=pl>Jeśli zdarzyło ci się pracować na zlecenie, z pewnością dobrze znasz pytanie "ile to będzie kosztować". Najlepszym sposobem na odpowiedź jest (realistyczne) przeliczenie zlecenia na godziny pracy i wyznaczenie sobie stawki godzinowej. W zależności od zlecenia, możesz pracować za od kilku złotych / godzinę nawet do kilkuset złotych / godzinę.
<p lang=en>If you ever happened to freelance you shold know this question very well: "how much will this cost". Best way to answer this one is to (realistically) estimate number of hours required to complete the task and set a flat hourly rate. Depending on the contract you can work from a few dollars up to a few hundreds dollars / hour.
  
<p lang=pl>Ten ostatni parametr, <em>stawka godzinowa</em> wydaje się dość ciężki do wyznaczenia. Zwykle sięga się po ceny konkurencji i w zależności od popytu/podaży podnosi lub obniża go o kilka procent. Tak przynajmniej mówią zasady ekonomii. A czy nie dałoby się wyznaczyć go bez sięgania po cennik konkurencji?
<p lang=en>This reduces our problem to the choice of <em>hourly rate</em>. It seems hard to estimate at first. When faced with this situation we usually simply the get competitors prices. Depending on the supply and demand we can then lower or raise them a few percent. Actually, that's what the rules of economy say. But could we guess the right hourly rate without knowing prices of our competitors?

<p lang=pl>Na takie pytanie odpowiedź może być tylko jedna - oczywiście, że się da. Potrzebujemy w tym celu jakiegoś punktu zaczepienia - jakiejś funkcji, którą będziemy optymalizować.
<p lang=en>This question can be answered in only one way - of course we can. We just need a different start point - some function which we're going to maximize.
  
<p lang=pl>Jeśli zależy ci tylko na pieniądzach, funkcja ta jest dość prosta - to ilość pieniędzy jaką uda ci się zarobić. Póki masz siłę stać na nogach - pracuj! Kiedy pojawia się nowe zlecenie, na które nie masz już czasu wystarczy znaleźć inne, aktywne zlecenie, za które bierzesz najmniej i podnieść stawkę godzinową - tak, żeby któryś ze zleceniodawców - stary lub nowy - zrezygnował. W podejściu tym zarabiasz maksymalną ilość pieniędzy jaką tylko jesteś w stanie zarobić. Problem jest tu taki, że zarobionych pieniędzy nie wydajesz - bo na co? I tak pracujesz 24h / dobę.
  
<p lang=en>If you're only after the money the problem becomes simple - this function is just the amount of money that you'll make. As long as you're standing - work! When you get a new contract but don't have enough time - find another, active contract which is worth the least and raise your hourly rate until one of the clients - old or new one - goes away. This approach will get you maximum amount of money you can make. Problem with it is that you won't spend any of this money. What could you buy? After all you're working 100% of your time.
  
<p lang=pl>Są tacy, dla których taka odpowiedź jest nie do zaakceptowania - w życiu trzeba mieć czas na przyjemności! Też tak sądzę. Zwłaszcza że, kiedy <em>przyjemności</em> przypiszemy jakąś jasno zdefiniowaną funkcję to możemy podejść do tego jak do zwykłej optymalizacji! Co więcej nowa definicja może odpowiedzieć nam na pytanie <em>kiedy warto wydać pieniądze</em> na nasze błache przyjemności.
<p lang=en>Most people will find this approach unacceptable - everyone should have some time for pleasure! So do I think. Especially since <em>happiness</em> can be a well defined function and the problem reduced to optimization! More so - happiness optimization can tell us <em>when it's worth to spend the money</em> for our little pleasures.
  
<p lang=pl>W gruncie rzeczy podejście to możemy stosować do rozwiązywania większości życiowych dylematów, gdzie mamy wybór pomiędzy dwiema opcjami:
<p lang=en>Actually we can use this approach to answer most of the dillemas where we have a choice between two options:
  
<ul lang=pl>
  <li>Opcja A pozwoli zaoszczędzić trochę czasu, ale wiąże się z pewnymi kosztami
  <li>Opcja B pozwoli oszczędzić trochę pieniędzy, ale wymaga poświęcenia czasu
</ul>
<ul lang=en>
  <li>Option A will save some time but will cost more money
  <li>Option B will save some money but will cost more time
</ul>
  
<img src="efficiency.png" style="margin:1em auto; display:block">
  
<p lang=pl>Spróbujmy wymyślić kilka funkcji i sprawdźmy do jakich wniosków nas doprowadzą!
<p lang=en>Let's try to come up with a few happiness functions and check what we can learn out of them!

<h2 lang=pl>Podejście holistyczne</h2>
<h2 lang=en>Holistic approach</h2>
<p lang=pl>Zacznijmy od najogólniejszego podejścia - spójrzmy na całe życie. Jeśli dla każdej chwili życia wyznaczymy "szczęście" jako jakąś liczbę, to łączne szczęście w trakcie całego życia będzie niczym innym jak polem pod wykresem (czas &times; szczęście).
<p lang=en>Let's start with the most general approach - looking at the whole life. If for each moment we can define happiness as a number the the total happiness over liftime will be nothing else than the area under the plot (time &times; happiness).

<p lang=pl>Przeprowadzenie takiej symulacji dla różnych wyborów życiowych jest szalenie ciekawym projektem - już kilka razy zdarzyło mi się rozważać różne scenariusze za jego pomocą. Polecam to każdemu piśmiennemu użytkownikowi komputera.
<p lang=en>Calculating this area for different life choices is actually a wildly interesting project. A few times I've used this approach to help make a better choice. In fact I'd suggest every literate computer user to try it out.

<p lang=pl>Oto kilka rzeczy, które można uwzględnić w takiej optymalizacji:
<p lang=en>Here are a few things which you might take into account:
  
<ul lang=pl>
  <li>spadająca z wiekiem jakość życia (z tych samych atrakcji czerpiemy mniej przyjemności)
  <li>prawdopodobieństwo śmierci (różne zależnie od wieku)
  <li>zbierające się z czasem oszczędności
  <li>inflacja - redukująca nasze oszczędności (ale nie zarobki!)
  <li>pojawiająca się w podeszłym wieku emerytura
  <li>wydatki na życie - jedzenie, mieszkanie, zdrowie
  <li>wydatki na przyjemności i płynące z nich szczęście
  <li>czas spędzony na pracy / na przyjemnościach
  <li>ryzyko wystąpienia oraz pewna ilość pieniędzy "na czarną godzinę" (jeśli jesteś pewien/pewna swoich rachunków to ten element pozwala zrezygnować z ubezpieczeń)
</ul>
<ul lang=en>
  <li>quality of life decreasing with age (we enjoy the same things less)
  <li>probability of death (different depending on age and lifestyle)
  <li>accumulating savings
  <li>inflation - reducing our savings (but not income!)
  <li>pension - at the old age
  <li>living expenses - food, housing, health
  <li>leisure spending - and their effect on happiness
  <li>time spent on work / leisure
  <li>risk and money "for a rainy day" (if you're confident of your calculations this will let you get away without insurance)
</ul>

<p lang=pl>To holistyczne podejście pomoże wyznaczyć strategię oszczędzania / wydawania pieniędzy oraz najlepsze chwile do przejścia na emeryturę / zmianę mieszkania / wybór kredytu / kierunku studiów, a nawet najlepszy wiek na posiadanie dzieci. Dotyczy raczej dużych, życiowych wyborów. Przeprowadzając symulację dla kilku różnych scenariuszy możemy podjąć decyzję o tym czy do pracy jeździć samochodem (bo szybciej) czy na rowerze (bo taniej i zdrowiej) albo znaleźć takie parametry, żeby zmaksymalizować wolny czas lub łączne pieniądze wydane na przyjemności.

<p lang=en>This holistic approach will let you choose a saving / spending strategy, find the best moment to retire / change apartment / choose the credit / field of study and even the best age to have children. It applies mostly to big, life decisions. While doing this simulations you can choose if it's better to drive car (faster) or take bike (cheaper and healthier) to work. You can also find the parameters to maximize free time or your total leisure spending.
  
<p lang=pl>Uwzględnienie wszystkich możliwych wyborów wymagać będzie jednoczesnej optymalizacji kilkunastu lub nawet kilkudziesięciu różnych parametrów - nie ma więc mowy o zabawie we Excelu - trzeba sięgnąć po języki programowania. Najprostsze podejście to rozważenie wszystkich możliwych wartości dla wszystkich parametrów - oraz wybór tego zestawu, dla którego szczęście osiąga maksimum.
  
<p lang=en>Taking into account every possible choice will require to optimize simultaneously several dozen different parameters. There is no way to do this in Excel - the only way to get this right is to use a programming language. Simpliest approach here would be to consider all possible values of all parameters and thoose the set which achieves the maximum happiness.
  
<p lang=pl>Podejście ogólne może odstraszać złożonością. Spróbujmy wymyślić więc coś prostszego - coś co dałoby się policzyć na zwykłym kalkulatorze.
<p lang=en>Complexity of general approach may deter potential users. Let's try to find something simpler - something that we could calculate on a regular calculator.

<h2 lang=pl>Podejście proste</h2>
<h2 lang=en>Simple approach</h2>
  
<p lang=pl>Czas w ciągu dnia możemy podzielić na trzy części:
<p lang=en>Time during the day can be split into three parts:
<ul lang=pl>
  <li>sen;
  <li>obowiązki;
  <li>przyjemności.
</ul>
<ul lang=en>
  <li>sleeping;
  <li>duties;
  <li>leisure.
</ul>

<p lang=pl>Oczywiście, nie możemy całkowicie zrezygnować z obowiązków - to właśnie obowiązki takie jak praca pozwalają nam się utrzymać. To one też fundują przyjemności!
<p lang=en>Obviously, we can't get away without duties. They allow us to maintain our standard of living. Also duties such as work provide funding for our leisure!

<p lang=pl>Musimy więc znaleźć najlepszą równowagę między obowiązkami, a przyjemnościami. Żadne ekstremum nie będzie dobre - co z tego, że mamy cały czas dla siebie jeśli jedyne co możemy robić to oglądać sufit w schronisku dla bezdomnych. Podobnie nie potrzebujemy góry pieniędzy jeśli nie będziemy mieć czasu, żeby je wydać!
<p lang=en>We need to find the right balance between work and leisure. None of the extremes will do - what will do all the free time in the world if the only thing to do is to stare at the ceiling of homeless shelter. Similarly - all the money is useless if we don't have any reason to spend them.

<p lang=pl>Jednym z rozwiązań jest wyznaczenie maksimum iloczynu (wolny czas &times; pieniądze).
<p lang=en>One easy way to strike this balance is to look for the maximum of (free time &times; money).
  
<p lang=pl>Wartość godziny naszego czasu możemy wtedy wyliczyć rozwiązując równanie:
<p lang=en>When we do that, whe value of our time could be estimated from this equation:
  
<p lang=pl>czas &times; pieniądze = (czas - 1 godz.) &times; (pieniądze + X zł)
<p lang=en>time &times; money = (time - 1h) &times; (money + X $)
  
<p lang=pl>Możemy rozumieć je tak, że mając o godzinę mniej czasu, ile więcej pieniędzy powinniśmy zarobić, żeby wyjść na zero. X z rozwiązania tego równania to minimalna kwota, za jaką powinniśmy pracować.
<p lang=en>We should interpret it as: if we had one hour of our time less, how much more money should we make to break even. X from this equation is the minimal hourly rate for which one could work.
  
<h2 lang=pl>Logarytmiczna percepcja</h2>
<h2 lang=en>Logarithmic perception</h2>

<p lang=pl>Kiedy opowiadałem o tym pomyśle, mojemu dobremu znajomemu, zwrócił mi uwagę, że percepcja danej jednostki pieniędzy / wolnego czasu zależy od obecnego stanu posiadania. Dodatkowe 100 zł jest warte dużo więcej dla kogoś kto ledwo jest w stanie się utrzymać. Dla kogoś, kto zarabia 20 000 zł / miesiąc dodatkowe 100 złotych prawdopodobnie nie ma już tak wielkiego znaczenia. Możliwe, że uwzględnienie we wzorach [logarytmicznej percepcji](https://pl.wikipedia.org/wiki/Prawo_Webera-Fechnera) wolnego czasu / pieniędzy da bardziej interesujące wyniki.

<p lang=en>When I explained this idea to my good friend, he pointed to me that perception of a unit of time or money depends on our current status. Additional 100$ won't make a difference to a Wall Street banker. For a beggar in poor country it might be a life-saver. Perhaps if we acknowledged the [logarithmic perception](https://en.wikipedia.org/wiki/Weber%E2%80%93Fechner_law) of free time / money we could get more interesting results. Let's do this!

<p lang=pl>czas &times; pieniądze &rarr; ln(czas) &times; ln(pieniądze)
<p lang=en>time &times; money &rarr; ln(time) &times; ln(money)

<p lang=pl>Poszukiwania stawki godzinowej doprowadzają nas do nowego równania:
<p lang=en>Looking for the hourly rate leads us to new equation:

<p lang=pl>ln(czas) &times; ln(pieniądze) = <br>ln(czas - 1 godz.) &times; ln(pieniądze + X zł)
<p lang=en>ln(time) &times; ln(money) = <br>ln(time - 1h) &times; ln(money + X $)

<p lang=pl>Rozwiązanie wygląda następująco:
<p lang=en>Solution looks like that:

<p lang=pl>X = e<sup>ln(pieniądze)&times;ln(czas)/ln(czas - 1 godz.)</sup> - pieniądze
<p lang=en>X = e<sup>ln(money)&times;ln(time)/ln(time - 1h)</sup> - money

<p lang=pl>Rozwiązanie to nazwiemy metodą percepcyjną. Poprzednie rozwiązanie - które nie uwzględniało logarytmicznego postrzegania, będziemy nazywać metodą prostą.
<p lang=en>We'll call this solution the <em>perception approach</em>. Previous solution - which didn't took into account the logarithmic perception, we'll call the <em>simple approach</em>.

<p lang=pl>Wyniki obu metod - prostej i percepcyjnej w większości przypadków są zbliżone. Próby z różnymi wartościami pokazują, że w przeciwieństwie do prostego podejścia, to jest wrażliwe na skalę. Dwukrotne zwiększenie ilości wolnego czasu i zarobków nie powodowało zmiany stawki godzinowej. Tutaj, (być może słusznie!) ta własność nie występuje. Dodatkowo rozbieżności pomiędzy obiema metodami rosną w miarę jak różnica skali pomiędzy wolnym czasem a pieniędzmi rośnie. W skrajnych przypadkach metoda percepcyjna wydaje się zwracać bardziej ekstremalne wartości.

<p lang=en>Results of both methods - simple and perception are in most of the cases very close. Trials with different values show that in contrast to the simple approach, the perception is sensitive to scale. Doubling the free time and money won't change the hourly rate in the simple approach. Here, (perhaps rightly!) this dosn't happen. Additionally the differences between results of both methods grow larger as the difference between free time and money increases. In extreme cases, the perception approach seems to produce more extreme results.
    
<h2 lang=pl id=calc>Kalkulator</h2>
<h2 lang=en id=calc>Calculator</h2>

<p lang=pl>Poniższy formularz pomoże ci wyliczyć, ile wart jest twój czas. Pola pozwalają na wpisywanie wzorów. Jeśli popełnisz błąd, tekst zmieni kolor na czerwony.
<p lang=en>The form below will help you calculate, how much is your time worth. Fields allow entering formulas. If you make a mistake, text will turn red.

<p lang=pl>Domyślne wartości zakładają, że zarabiasz 3000 zł, utrzymanie kosztuje cię 1500 zł, a miesiąc składa się z 4 i pół tygodnia podczas których w weekendy masz 15 godzin wolnego czasu, a w tygodniu po 7.
<p lang=en>Default values correspond to a person earning 3000 $, whose living costs are 1500 $. Month is composed of 4 and a half weeks. During weekdays there are 7 hours of free time and during weekends - 15.
  
<p><span lang=pl>Wolny czas (godz. / miesiąc)</span><span lang="en">Free time (hours / month)</span>: <input id="time" value="(5 * 7 + 2 * 15) * 4.5"/>
<p><span lang=pl>Zarobki minus utrzymanie (zł. / miesiąc)</span><span lang="en">Salary minus living costs ($ / month)</span>: <input id="money" value="3000 - 1500"/>
<p><span lang=pl>Wartość jednej godziny to</span><span lang="en">Value of 1 hour of free time</span>: <span id="result" style=font-weight:bold></span> <span lang=pl>zł (wg metody prostej) oraz</span><span lang="en">$ (simple approach) or</span> <span style=font-weight:bold id=result2></span> <span lang=pl>zł (wg metody percepcyjnej)</span><span lang="en">$ (perception approach)</span>.

<p lang=pl>Jeszcze raz powtórzę: jest to <u>minimalna</u> kwota, za jaką warto pracować. Właściwa wartość powinna uwzględniać jakiś margines na zysk.
<p lang=en>I'll repeat this again: it's the <u>minimal</u> value that make the work worth it. Actual value should take into account some margin for profit.

<p lang=pl>To tyle. Mam nadzieję że lektura tego artykułu okazała się warta twojego czasu :)
<p lang=en>That's it. I hope the lecture turned out to be worthwhile :)

<script>
  var t = document.getElementById('time');
  var m = document.getElementById('money');
  var r = document.getElementById('result');
  var r2 = document.getElementById('result2');
  function recalc() {
    var err = false;
    try {
      var t1 = eval(t.value);
      t.style.color = 'black';
    } catch(e) {
      t.style.color = 'red';
      err = true;
    }
    try {
      var m1  = eval(m.value);
      m.style.color = 'black';
    } catch(e) {
      m.style.color = 'red';
      err = true;
    }
    if(err) return;
    var v = t1 * m1;
    var t2 = t1 - 1;
    var x = (v - m1 * t2) / t2;
    r.textContent = Math.round(x * 100) / 100;
    var y = Math.exp(Math.log(m1)*Math.log(t1)/Math.log(t2)) - m1;
    r2.textContent = Math.round(y * 100) / 100;
  }
  t.oninput = recalc;
  m.oninput = recalc;
  recalc();
</script>
