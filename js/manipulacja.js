let parFirst = document.getElementById('parFirst');

//get
console.log(parFirst.innerHTML);

//set
parFirst.innerHTML += '<span>Lorem ipsum</span>';


let parSecond = document.getElementById('parSecond');

//get
console.log(parSecond.innerText);

//set
parSecond.innerText += '<p>To jest nowy tekst w tym akapicie</p>';

//outerHTML
let nav = document.getElementById('main-nav');

nav.outerHTML += '<nav id="new-nav"><ul><li><a href="#">new link</a></li></ul></nav>'

//element.nazwa_atrybutu= 'nowa wartość'
document.getElementById('link').href = 'http://google.com';

//className
//document.getElementById('link').className = "nowa_klasa";
document.getElementById('link').classList.add("nowa_klasa");
document.getElementById('link').classList.remove("google");

document.getElementById('link').style.color = "red";
