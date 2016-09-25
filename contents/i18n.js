function hide(arr) {
  Array.prototype.forEach.call(arr, function(elem) {
    elem.style.display = 'none';
  });
}

function show(arr) {
  Array.prototype.forEach.call(arr, function(elem) {
    elem.style.display = '';
  });
}

function showLanguage() {
  hide(document.querySelectorAll('[lang='+(localStorage.language == 'pl' ? 'en' : 'pl')+']'));
  show(document.querySelectorAll('[lang='+(localStorage.language == 'pl' ? 'pl' : 'en')+']'));
  var header = document.querySelector('article h1[lang='+(localStorage.language == 'pl' ? 'pl' : 'en')+']');
  if(header)
    document.title = header.innerText + ' - Marek Rogalski';
}

localStorage.language = localStorage.language || navigator.language;

showLanguage();

document.querySelector('.lang').addEventListener('click', function() {
  localStorage.language = localStorage.language == 'pl' ? 'en' : 'pl';
  showLanguage();
});
