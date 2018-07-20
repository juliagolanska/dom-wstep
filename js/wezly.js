let parFirstParentNode = document.getElementById('parFirst').parentNode;
console.log(parFirstParentNode);

let parFirstParentElement = document.getElementById('parFirst').parentElement;
console.log(parFirstParentElement);

let sectionFirstChildNodes = document.getElementById('sectionFirst').childNodes;
console.log(sectionFirstChildNodes);
console.log(typeof sectionFirstChildNodes[0]);
//console.log(typeof sectionFirstChildNodes[0].nodeName);

//children zwraca TYLKO elementy HTML
let sectionFirstChildren = document.getElementById('sectionFirst').children;
console.log(sectionFirstChildren);


let prevParSecondSiblings = document.getElementById('parSecond').previousElementSibling;
console.log(prevParSecondSiblings);

let nextParSecondSiblings = document.getElementById('parSecond').nextElementSibling;
console.log(nextParSecondSiblings);

