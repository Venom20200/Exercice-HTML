var plus = document.getElementById(plus); 
var moins = document.getElementById(moins);
var fois = document.getElementById(fois);
var div = document.getElementById(div);
var puissance = document.getElementById(puissance);



function onClickPlus(){
    var result = document.querySelector("#resultat");
    var chiffre1 = document.querySelector("#chiffre1").value;
    var chiffre2 = document.querySelector("#chiffre2").value;
    var result = Number(chiffre1) + Number(chiffre2);
    result.value = resultat;
}

function onClickMoins(){
    var result = document.querySelector("#resultat");
    var chiffre1 = document.querySelector("#chiffre1").value;
    var chiffre2 = document.querySelector("#chiffre2").value;
    var resultat = Number(chiffre1) - Number(chiffre2);
    result.value = resultat;
  }

  
plus.addEventListener("click", onClickPlus);
moins.addEventListener("click", onClickMoins);

