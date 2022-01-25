const espaceMessage = document.getElementById("message");
const bouton = document.getElementById("bouton");
const ageInput = document.getElementById("age");
const expresion  = /^[0-9]+$/;
const ageMajorite = 18;

//Cette fonction affichera le message de validation
const valider = ()=> {
  ageInput.style.outline  = "3px solid green";
  espaceMessage.style.color = 'green';
  espaceMessage.textContent = "Vous êtes autorisé à entrer";
}

//Cette fonction affichera un message d'erreur
const refuser= ()=>{
  ageInput.style.outline  = "3px solid red";
  espaceMessage.style.color = 'red';
  espaceMessage.textContent = 'Cette espace est interdit aux personnes mineurs';
}

//Cette fonction efacera le message de validation
const clearText = ()=> {
  ageInput.value = '';
  ageInput.style.outline  = 'none';
  espaceMessage.textContent = '';
}

const onConfirm = ()=> {
  //On récupère la saisie de l'age et on transforme le texte en nombre entier
  let age = parseInt(ageInput.value);

  //Si la saisie n'est pas un nombre valide, on affiche un message d'erreur
  if(isNaN(age) || age < 0 || !ageInput.value.match(expresion) ){
    alert("Veillez entrer un nombre valide");
    ageInput.value = '';
    return;
  }
  
  if(age >= ageMajorite){
     valider()
  } else {
     refuser()
  }
  //On vide tout
  setTimeout(clearText, 1500)
}

//On écoute l'action de click sur le bouton et on appelle la fonction onConfirm
bouton.addEventListener('click', onConfirm);

document.addEventListener('keydown', function(e){
   let keyCode = e.which || e.keyCode;
   if(keyCode == 13)
   {
      onConfirm();
   }
});