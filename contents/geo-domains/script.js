
$(function () {

	var latlng = new google.maps.LatLng(-34.397, 150.644);
	var map_options = {
	  zoom: 8,
	  center: latlng,
	  mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	var map = new google.maps.Map(document.getElementById("mapa"), map_options);
	znacznik = new google.maps.Polygon();

	var base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	function gray(v) {
	  l = v.length;
	  r = new Array();
	  r.push(v[0]);
	  for(i=1; i<l; ++i){
		  r.push(v[i-1] != v[i]);
	  }
	  return r;
	}

	function natural(v) {
	  r = new Array();
	  r.push(Boolean(v[0]));
	  for(i=1; i<v.length; ++i) {
		  r.push(r[i-1] != v[i]);
	  }
	  return r;
	}

	function showOnMap(acc, split) {
	  sw = new google.maps.LatLng(acc[0]-split[0], acc[1]-split[1]);
	  ne = new google.maps.LatLng(acc[0]+split[0], acc[1]+split[1]);
	  bounds = new google.maps.LatLngBounds(sw, ne);
	  var edges = [
		  new google.maps.LatLng(acc[0]-split[0], acc[1]-split[1]),
		  new google.maps.LatLng(acc[0]+split[0], acc[1]-split[1]),
		  new google.maps.LatLng(acc[0]+split[0], acc[1]+split[1]),
		  new google.maps.LatLng(acc[0]-split[0], acc[1]+split[1])
	  ];
	  znacznik.setMap(null);
	  znacznik = new google.maps.Polygon({
		  paths: edges,
		  strokeColor: "#FF0000",
		  strokeOpacity: 0.8,
		  strokeWeight: 2,
		  fillColor: "#FF0000",
		  fillOpacity: 0.35
	  });
	  znacznik.setMap(map);
	  if(!dragging) {
		  map.fitBounds(bounds);
	  }
	}

	function mapMoved() {
	  center = map.getCenter();
	  $('#szerokosc').val(center.lat());
	  $('#dlugosc').val(center.lng());
	}

	google.maps.event.addListener(map, 'drag', mapMoved);
	google.maps.event.addListener(map, 'dragend', make_addr);
	var dragging = false;
	google.maps.event.addListener(map, 'dragstart', function() {dragging = true;});
	google.maps.event.addListener(map, 'dragend', function() {dragging = false;});

	function make_addr() {
	  loc = [ parseFloat($('#szerokosc').val()),
		        parseFloat($('#dlugosc').val()) ];
	  host = $('#host').val();
	  split = [90, 180];
	  acc = [0,0];
	  vector = [];
	  chars = parseInt($('#dokladnosc').val());
	  for(i=0; i<chars*6; ++i) {
		  ind = (i+1)%2;
		  split[ind] /= 2;
		  if(loc[ind] < acc[ind]) {
		    vector.push(false);
		    acc[ind] -= split[ind];
		  } else {
		    vector.push(true);
		    acc[ind] += split[ind];
		  }
	  }
	  vector = gray(vector);
	  addr = '';
	  for(i=0; i<chars; ++i) {
		  ind = i*6;
		  val =   Number(vector[ind]) << 5 |
		    Number(vector[ind + 1]) << 4 |
		    Number(vector[ind + 2]) << 3 |
		    Number(vector[ind + 3]) << 2 |
		    Number(vector[ind + 4]) << 1 |
		    Number(vector[ind + 5]) << 0;
		  addr = addr.concat(base64[val]);
	  }
	  $('#adres').val(host.concat('.', addr, '.g'));
	  $('#odczytany_host').text(host);
	  $('#odczytana_dlugosc').text(acc[1].toFixed(4) + ' ± ' + split[1].toPrecision(2));
	  $('#odczytana_szerokosc').text(acc[0].toFixed(4) + ' ± ' + split[0].toPrecision(2));
	  showOnMap(acc, split);
	}
	function read_addr() {
	  addr = $('#adres').val();
	  path = addr.split('.');

	  host = '';
	  for(i=0; i<path.length-2; ++i) {
		  host = host.concat(path[i]);
	  }
	  $('#odczytany_host').text(host);

	  str = path[path.length-2];
	  g = new Array();
	  for(i=0; i<str.length; ++i) {
		  val = base64.indexOf(str[i]);
		  char_bin = [(val >> 5) & 1,
			            (val >> 4) & 1,
			            (val >> 3) & 1,
			            (val >> 2) & 1,
			            (val >> 1) & 1,
			            val & 1];
		  g = g.concat(char_bin);
	  }
	  vector = natural(g);
	  split = [90, 180];
	  acc = [0,0];
	  for(i=0; i<vector.length; ++i) {
		  ind = (i+1)%2;
		  split[ind] /= 2;
		  if(vector[i]) {
		    acc[ind] += split[ind];
		  } else {
		    acc[ind] -= split[ind];
		  }
	  }
	  $('#odczytana_dlugosc').text(acc[1].toFixed(4) + ' ± ' + split[1].toPrecision(2));
	  $('#odczytana_szerokosc').text(acc[0].toFixed(4) + ' ± ' + split[0].toPrecision(2));
	  showOnMap(acc, split);
	}
	$('#host, #szerokosc, #dlugosc, #dokladnosc').change(make_addr);
	$('#adres').change(read_addr);
	make_addr();

});

