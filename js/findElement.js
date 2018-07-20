let parFirst = document.getElementById('parFirst');
console.log(parFirst);

//let links = document.getElementsByClassName('link');
//console.log(links);

//html kolekcja to NIE JEST TABLICA nie mozna tu uzyc funkcji przeznaczonych do tablic

let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

let links = document.querySelectorAll('.link');
console.log(links);

let link = document.querySelector('.link');
console.log(link);