//1
var foot = document.querySelector('footer');

foot.addEventListener("click", putsClique)
let x=0; 
function putsClique(){  
   
   x++;
console.log('clique', x);
}

//2
var burger = document.getElementById('navbarHeader')
var btn = document.querySelector('button')


btn.addEventListener("click", navBar)
function navBar(){    
burger.classList.toggle("collapse")

}

//3
var card = document.getElementsByClassName("col-md-4")[0]
var pointage = card.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]

pointage.addEventListener("click", red);
function red() {
    card.style.color = 'red';
    console.log('lolololo');
}


//4
var card2 = document.getElementsByClassName("col-md-4")[1]
var pointage2 = card2.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]



pointage2.addEventListener("click", vert);
function vert() {
    card2.style.color === 'green' ? card2.style.color = 'black' : card2.style.color = 'green' ;
}

//5
var findNav = document.querySelector('header');
var lien = document.styleSheets[0]

findNav.addEventListener("dblclick", delBoot);
function delBoot() {
    lien.disabled == false ? lien.disabled = true : lien.disabled = false;
    console.log('oh');
} 


//6
let cards = document.getElementsByClassName("col-md-4");
let views = document.getElementsByClassName("btn btn-sm btn-success");
let cardImg = document.getElementsByClassName("card-img-top")[0];

for (let i = 0; i < views.length; i++){
    views[i].addEventListener("mouseover" , function(){
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
}

//7
var parent = document.querySelector("album py-5 bg-light")
var fleche = document.getElementsByClassName("btn btn-secondary my-2")[0]
console.log(fleche);

fleche.addEventListener("click", change);
function change(){ 
document.getElementsByClassName("row")[1].insertBefore(cards[5], cards[0])
console.log("gergh");
}

// 8 

link = document.getElementsByClassName("btn btn-primary my-2")[0]
link.addEventListener("click", function(event){
    event.preventDefault()
    document.getElementsByClassName("row")[1].insertBefore(cards[0], cards[5].nextSibling)
})
   
//9
