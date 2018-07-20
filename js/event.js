document.addEventListener('DOMContentLoaded', function(){
//    przy duzych projektach zakomentuj funkcje
    
    
    
//    popup czyli otwierajace sie okienko
    document.getElementById('open').addEventListener('click', function (){
        document.getElementById('popup').style.display = "block";
    });
    
    document.getElementById('btn').addEventListener('click', function (){
        document.getElementById('popup').style.display = "none";
    });
    
    
//    eventy formularzy
    let inputText = document.querySelectorAll('input[type="text"]');
    
    for(let i=0; i < inputText.length; i++) {
        inputText[i].addEventListener('change', function() {
            document.getElementById('result').innerHTML += this.value;
        })
    }
    
    document.body.addEventListener('keydown', zmienKolor);
    document.body.removeEventListener('keydown', zmienKolor);
    
    let linki = document.getElementsByClassName('link');
    
    for(let i=0; i < linki.length; i++) {
        linki[i].addEventListener('click', function(event) {
            event.preventDefault();
            console.log(event);
        }) 
    }
})


function zmienKolor() {
    
  //naciskanie klawiszy
 
//    document.body.addEventListener('keydown', function (){
       this.style.backgroundColor = 'beige';
//    });
    
//    document.body.addEventListener('keyup', function (){
//       this.style.backgroundColor = 'transparent';
//    });
}

