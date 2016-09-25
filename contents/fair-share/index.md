---
title_pl: Kalkulator podziału czynszu
title_en: Rent share calculator
desc_pl: Sprawiedliwie podziel czynsz za wynajem pokoi o różnych rozmiarach.
desc_en: Split rent for several different rooms in a fair way.
template: article.jade
thumb: rooms.png
date: 2016-08-31
---

<h1 lang=pl>Kalkulator podziału czynszu</h1>
<h1 lang=en>Rent share calculator</h1>

<p lang=pl>Wystarczy, że każdy uczestnik wyceni, w procentach, każdy z pokoi. Algorytm znajdzie taki przydział pokoi, który maksymalizuje sumę wartości oraz zasugeruje, ile procent powinien zapłacić każdy z uczestników.</p>
<p lang=en>Let each participant estimate, how much each room is worth (in %). The algorithm will then find an assignment which maximizes the sum of values and suggest a fair rent for everybody.</p>

<p lang="pl">Algorytm gwarantuje, że każdy z uczestników będzie zadowolony ze swojego przydziału (zapłaci mniej niż jego wycena).</p>
<p lang="en">The algorithm guarantees that each participant will end up happy with their assignment (they'll pay less than their valuation).</p>

<p lang="pl">Kalkulator zapamięta wprowadzone wartości więc możesz bez obaw zamknąć tą stronę i wrócić tu później.</p>
<p lang="en">The calculator will remember entered values so you're safe to close this page and can come back later.</p>

<p><span lang="en">Number of participants</span><span lang="pl">Ilość uczestników</span>: <input style="vertical-align: middle" id="input_n" type="range" min="1" max="30" value="4"> <input type="number" min="1" max ="30" value="4" id="number_n"></p>
<table id="table"></table>

<p lang="pl">Jeśli chcesz zobaczyć alternatywną metodę (dającą mniej sprawiedliwy podział kosztów ale za to pozbawione zawiści przyporządkowania), zajrzyj [tutaj](http://www.nytimes.com/interactive/2014/science/rent-division-calculator.html "The New York Times: Divide Your Rent Fairly").</p>
<p lang="en">If you'd like to check an alternative technique (with less fair prices but envy-free assignments), take a look [here](http://www.nytimes.com/interactive/2014/science/rent-division-calculator.html "The New York Times: Divide Your Rent Fairly").</p>

<script>
 var showLanguage = function() {};
 function id(name) {
     return document.getElementById(name);
 }
 function restoreN() {
     id("input_n").value = "fairshare_n" in localStorage ? localStorage.fairshare_n : 4;
 }
 function saveN() {
     localStorage.fairshare_n = id("input_n").value;
 }
 var old_n = 0;
 function rebuildTable() {
     var n = Number(id("input_n").value);
     if (old_n == n) return;
     old_n = n;
     var table = id("table");
     table.innerHTML = "";
     for(var row = -1; row < n; ++row) {
	 var tr = document.createElement("tr");
	 table.appendChild(tr);
	 (function() {
	     var value_list = [];
	     var updateRow = 
		 function(e) {
		     var target = e.target;
		     for(var i = 0; i < value_list.length; ++i) { // move current number to end of list
			 if (value_list[i].number == target || value_list[i].range == target) {
			     var obj = value_list[i];
			     obj.number.value = target.value;
			     obj.range.value = target.value;
			     localStorage[obj.range.id] = target.value;
			     value_list.splice(i, 1);
			     value_list.push(obj);
			     break;
			 }
		     }
		     var sum = 0;
		     for(var i = 0; i < value_list.length; ++i) sum += Number(value_list[i].number.value);
		     for(var i = 0; (sum != 100) && (i < value_list.length); ++i) {
			 var v = Number(value_list[i].number.value);
			 var diff = Math.max(0, Math.min(100 - sum, 100 - v)) - Math.max(0, Math.min(sum - 100, v));
			 value_list[i].number.value = v + diff;
			 value_list[i].range.value = v + diff;
			 sum += diff;
		     }
		 };
	     
	     for(var col = -1; col <= n; ++col) {
		 var td = document.createElement("td");
		 td.id = "A" + row + "B" + col + "_td";
		 tr.appendChild(td);
		 if(row == -1 && col == -1) {
		     var button = document.createElement("button");
		     button.innerHTML = '<span lang="en">Reset form</span><span lang="pl">Resetuj</span>';
		     button.style.width = '100px';
		     button.addEventListener('click', function() {
			 for(var key in localStorage) {
			     if (key.startsWith("fairshare_")) {
				 delete localStorage[key];
			     }
			 }
			 old_n = 0;
			 id("input_n").value = 4;
			 fullRefresh({target: id("input_n")});
		     });
		     td.appendChild(button);
		     td.style.textAlign = 'center';
		 }else if(row == -1 && col == n) {
		     td.innerHTML = '<span lang="en">Value sum</span><span lang="pl">Suma wartości</span>: <span id="utility_span"></span>';
		     td.style['white-space'] = 'pre';
		 } else if(row == -1) {
		     var B_input = document.createElement("input");
		     B_input.type = "text";
		     var key = "fairshare_B" + col;
		     B_input.id = key;
		     B_input.value = key in localStorage ? localStorage[key] : "Option " + (col + 1);
		     B_input.addEventListener('input', function(e) {
			 localStorage[e.target.id] = e.target.value;
		     });
		     B_input.style.width = "100px";
		     td.appendChild(B_input);
		 } else if (col == -1) {
		     var A_input = document.createElement("input");
		     A_input.type = "text";
		     var key = "fairshare_A" + row;
		     A_input.id = key;
		     A_input.value = key in localStorage ? localStorage[key] : "Person " + (row + 1);
		     A_input.style.width = "100px";
		     A_input.style.height = "3em";
		     A_input.addEventListener('input', function(e) {
			 localStorage[e.target.id] = e.target.value;
		     });
		     td.appendChild(A_input);
		 } else if(col == n) {
		     td.innerHTML = '<span lang="en">Fair share</span><span lang="pl">Sprawiedliwy udział</span>: ';
		     td.style['white-space'] = 'pre';
		     var share_span = document.createElement("span");
		     share_span.id = row + "_share_span";
		     td.appendChild(share_span);
		 } else {
		     var AB_range = document.createElement("input");
		     AB_range.type = "range";
		     var key = "fairshare_A" + row + "B" + col;
		     AB_range.id = key;
		     AB_range.min = 0;
		     AB_range.max = 100;
		     AB_range.style.width = '100px';
		     td.appendChild(AB_range);
		     td.appendChild(document.createElement("br"));
		     var AB_number = document.createElement("input");
		     AB_number.type = "number";
		     AB_number.step = 1;
		     AB_number.min = 0;
		     AB_number.max = 100;
		     AB_number.style.width = "100px";
		     td.appendChild(AB_number);
		     AB_range.value = AB_number.value = key in localStorage ? localStorage[key] : Math.round(100 / n);
		     AB_range.addEventListener('input', function(e) {
			 updateRow(e);
			 assignOwners();
		     });
		     AB_number.addEventListener('change', function(e) {
			 updateRow(e);
			 assignOwners();
		     });
		     value_list.push({
			 range: AB_range,
			 number: AB_number
		     });
		 }
	     }
	     var off = 0;
	     for(var i = 0; i < value_list.length; ++i) {
		 if(value_list[off].range.id in localStorage) {
		     // move to end
		     var obj = value_list[i];
		     value_list.splice(i, 1);
		     value_list.push(obj);
		 } else {
			 ++off;
		 }
		 
	     }
	     updateRow({target: undefined});
	 }());
     }
 }
 
 var assignment = [];
 function assignOwners() {
     var m = {};
     var n = Number(id("input_n").value);
     var m_max = 0;
     for(var row = 0; row < n; ++row) {
	 m[row] = {};
	 for(var col = 0; col < n; ++col) {
	     var v = Number(id('fairshare_A' + row + 'B' + col).value);
	     m[row][col] = v;
	     m_max = Math.max(m_max, v);
	 }
     }
     for(var row = 0; row < n; ++row)
	 for(var col = 0; col < n; ++col)
	     m[row][col] = m_max - m[row][col];

     
     var iteration = 0;
     while(true) {
	 
	 for(var i = 0; i < n; ++i) {
	     var row_min = m[i][0];
	     for(var j = 1; j < n; ++j) row_min = Math.min(m[i][j], row_min);
	     for(var j = 0; j < n; ++j) m[i][j] -= row_min;
	 }
	 for(var j = 0; j < n; ++j) {
	     var col_min = m[0][j];
	     for(var i = 1; i < n; ++i) col_min = Math.min(m[i][j], col_min);
	     for(var i = 0; i < n; ++i) m[i][j] -= col_min;
	 }
	 
	 var owners = [];
	 assignment = [];
	 for(var i = 0; i < n; ++i) {
	     owners.push(-1);
	     assignment.push(-1);
	 }
	 
	 var edges = [];
	 for(var i = 0; i < n; ++i) {
	     edges.push([]);
	     for(var j = 0; j < n; ++j) {
		 if(m[i][j] <= 0.00005) {
		     edges[i].push(j);
		 }
	     }
	 }
	 
	 var visited;
	 var dfs = function(i) {
	     if(visited[i]) return false;
	     visited[i] = true;
	     for(var next of edges[i]) {
		 if(owners[next] == -1 || dfs(owners[next])) {
		     owners[next] = i;
		     assignment[i] = next;
		     return true;
		 }
	     }
	     return false;
	 };
	 
	 var success = true;
	 for(var i = 0; i < n; ++i) {
	     visited = []; for(var j = 0; j < n; ++j) visited.push(false);
	     if(!dfs(i)) success = false;
	 }
	 
	 var row_lines = [];
	 var col_lines = [];
	 for(var i = 0; i < n; ++i) {
	     row_lines.push(assignment[i] != -1);
	     col_lines.push(false);
	 }
	 
	 var done = false;
	 while (!done) {
	     done = true;
	     for(var i = 0; i < n; ++i) {
		 if(row_lines[i]) continue;
		 for(var j = 0; j < n; ++j) {
		     if(col_lines[j]) continue;
		     if(m[i][j] <= 0.00005) {
			 col_lines[j] = true;
			 row_lines[owners[j]] = false;
			 done = false;
		     }
		 }
	     }
	 }
	 
	 if(success) break;
	 var m_min = 9999999;
	 for(var i = 0; i < n; ++i) {
	     if(row_lines[i]) continue;
	     for(var j = 0; j < n; ++j) {
		 if(col_lines[j]) continue;
		 m_min = Math.min(m_min, m[i][j]);
	     }
	 }
	 for(var i = 0; i < n; ++i) {
	     for(var j = 0; j < n; ++j) {
		 if(row_lines[i] && col_lines[j]) m[i][j] += m_min;
		 if((!row_lines[i]) && (!col_lines[j])) m[i][j] -= m_min;
	     }
	 }
     }
     
     for(var row = 0; row < n; ++row)
	 for(var col = 0; col < n; ++col) {
	     var td = id("A" + row + "B" + col + "_td");
	     td.style.background = '';
	     if (assignment[row] == col) {
		 td.style.background = '#8A8';
	     }
	 }

     var utility = 0;
     for(var row = 0; row < n; ++row) {
	 var col = assignment[row];
	 utility += Number(id('fairshare_A' + row + 'B' + col).value);
     }
     for(var row = 0; row < n; ++row) {
	 var col = assignment[row];
	 var u = Number(id('fairshare_A' + row + 'B' + col).value);
	 id(row + "_share_span").innerText = Math.round(u / utility * 10000) / 100 + " %";
     }
     id('utility_span').innerText = utility;
     showLanguage();
 }
 function fullRefresh(e) {
     id("input_n").value = e.target.value;
     id("number_n").value = e.target.value;
     saveN();
     rebuildTable();
     assignOwners();
 }
 restoreN();
 fullRefresh({target: id("input_n")});
 id("input_n").addEventListener("input", function() {
     id("number_n").value = id("input_n").value;
 });
 id("input_n").addEventListener("change", fullRefresh);
 id("number_n").addEventListener("change", fullRefresh);
</script>
