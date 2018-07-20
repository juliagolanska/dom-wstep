let btn = document.createElement('button');
let btnTxt = document.createTextNode('Naciśnij');
let classAtr = document.createAttribute('class');

classAtr.value = 'btn';

document.body.appendChild(btn);
btn.appendChild(btnTxt);
btn.setAttributeNode(classAtr);
//btn.setAttribute('class', 'btn');
//to powyzej to dluzszy sposob, to co zakomentowane to krotszy

//console.log(document.body.childNodes);

