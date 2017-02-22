---
date: 2014-02-12
title_pl: Dvorak Programisty w Konsoli Linuksa
title_en: Programmer Dvorak in Linux Console
desc_pl: Obsługa "dvoraka programisty" w konsoli linuxa
desc_en: Fix for linux users using programmer dvorak in system console
template: article.pug
thumb: thumb.png
---

<h1 lang=pl>Dvorak Programisty w Konsoli Linuksa</h1>
<h1 lang=en>Programmer Dvorak in Linux Console</h1>

<p lang=pl>Po dość bolesnym rytuale przejścia, dvorak programisty okazuje się całkiem przyjemnym układem klawiszy. Jedeny problem, jaki napotkałem przez kilka lat użytkowania to brak jego obsługi w systemowej konsoli na większości dystrybucji (jedynie Ubuntu o to zadbało). Przygotowałem ostatnio odpowiedni plik, który dodaje w konsoli obsłgę tego układu.

<p lang=en>After painful rite of passage, programmer dvorak turned out to be quite pleasant set of keys. Only problem that I've encountered during several years of using it was lack of support in linux system console in almost every distribution (with notable exception  of Ubuntu). Recently I have prepared keymap file that finally adds support for this layout.

<p lang=pl>Jeśli chcesz go zainstalować, pobierz go [stąd][0] oraz zapisz w `/usr/share/kbd/keymaps/i386/dvorak/`. Do jednorazowego załadowania możesz użyć polecenia `loadkeys dvorak-pl`, a aby utrwalić efekt (jeśli korzystasz z `systemd`), do pliku `/etc/vconsole.conf` dopisz `KEYMAP=dvorak-pl`.

<p lang=en>If you want to install it, download it from [here][0] and save in `/usr/share/kbd/keymaps/i386/dvorak/`. To load it once, use `loadkeys dvorak-pl`. To achieve permanent effect (if you are using `systemd`), open file `/etc/vconsole.conf` and append line `KEYMAP=dvorak-pl`.

<p lang=pl>Słowa kluczowe (co by zagubieni internauci łatwiej trafiali): DVP, dvp, dvorak, programmer dvorak, dvorak programisty, vty, tty, system console, linux console.</p>

   [0]: dvorak-pl.map.gz