

//**************RECUPERATION DES PRODUITS QUI SONT DANS LE PANIER */

let ArrayStorage = JSON.parse(localStorage.getItem("addToCart")) || [];

//******************CREATION VARIABLE QUI VA CONTENIR LES PRODUITS */
const cartItems = document.getElementById("cart__items");

//*********** VERIFICATION SI LE PANIER EST VIDE OU CONTIENT DES PRODUITS/


if ( ArrayStorage.length === 0){
// Si le panier est vide , on affiche dans la page le message le panier est vide //
    console.log("le panier est vide")
    cartItems.innerHTML+= `<div> Le panier est vide </div> `

} else {
    console.log("le panier contient des produits ") 
    //Sinon , si le panier contient des produits ,
    for ( let k=0 ; k < ArrayStorage.length; k++) { 
          // tu me recuperer les donnee a partir du local et du panier ARRAYSTORAGE , puis

      const url = 'http://localhost:3000/api/products/' + ArrayStorage[k].idProduct;
      fetch(url)
      .then((res) => res.json())
      .then ( (data) =>  {
    // tu me cree la structure HTML suivante

     cartItems.innerHTML += 
        
         ` <article class="cart__item" data-id="${ArrayStorage[k].idProduct}" data-color="${ArrayStorage[k].colorProduct}"">
                <div class="cart__item__img">
                  <img src=  "${data.imageUrl}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${data.name}</h2>
                    <p>${ArrayStorage[k].colorProduct}</p>
                    <p>${data.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${ArrayStorage[k].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer </p>
                    </div>
                  </div>
                </div>
              </article>`
              
///*******************SUPPRESSION D'UN ARTICLE */

//**Identification du btn supprimer */

//**UTILISATION DE LA METHODE FOREACH POUR POUVOIR UTILISER UN EVEN SUR UN SEUL BOUTON  */
  const deleteInput =  document.querySelectorAll(".deleteItem")


 deleteInput.forEach((deleteItem) => {

   deleteItem.addEventListener("click" , (e) => {

    let article = deleteItem.closest ("article");
    let id = article.dataset.id;
    let color = article.dataset.color;
  

//UTILISATION DE LA FONCTION FILTER , POOUR NOUS SORTIR QUE LE PRODUIT QU'ON CLICK DESSUS  

console.log(ArrayStorage);
ArrayStorage = ArrayStorage.filter(mem => mem.idProduct !== id || mem.colorProduct !== color )
  localStorage.setItem("addToCart", JSON.stringify(ArrayStorage)) 


//**POP QUI INFORME QUE LE PRODUIT A ETE SUPPRIME */
/alert("Produit supprimé du panier ");
//**RECHARGEMENT DE LA PAGE POUR QUE L'ACTUALISTION SE FASSE SUR LE DOM AUSSI */
location.reload();
    

   });
 
 });
   

    
//*******************FIN SUPPRESSION D'UN ARTICLE */

//******************************CALCUL DU NOMBRE DE PRODUIT TOTAL */

/********Paragraphe ou se trouve la soan pour afficher le prix totl darticle */
if (k== ArrayStorage.length -1){
  const SpanNumberArticleTotal = document.querySelector("#totalQuantity")
  //console.log(SpanNumberArticleTotal)
  
  ArrayStorage = JSON.parse(localStorage.getItem("addToCart")) || [];
      for ( t= 0; t <  ArrayStorage.length;t++ ){
  //console.log(SpanNumberArticleTotal)
       let numberOfArticleTotal =  ArrayStorage[t].quantity 
        //const reducer = (accumalator ,currentValue)=> accumalator + currentValue;
       //console.log(arraynew.reduce(reducer, 0))
       
        console.log(numberOfArticleTotal)
        SpanNumberArticleTotal.textContent = Number(SpanNumberArticleTotal.textContent) + Number(numberOfArticleTotal);
      
      
      
      } 
}



    //////////////////////////***********************************PRIX TOTAL DE LA COMMANDE */

if (k== ArrayStorage.length -1){
  //console.log(SpanNumberArticleTotal)
  const SpanPriceTotal = document.querySelector("#totalPrice");

  ArrayStorage = JSON.parse(localStorage.getItem("addToCart")) || [];
      for ( t= 0; t <  ArrayStorage.length;t++ ){
  //console.log(SpanNumberArticleTotal)
  let PriceTotal =` ${data.price}` * ArrayStorage[t].quantity;
  console.log(PriceTotal);

  SpanPriceTotal.textContent = Number(SpanPriceTotal.textContent) + Number(PriceTotal);

      }
    }
     /********************************MODIFICATION QUNTITE DANS LE PANIER */


    const InputQuantity = document.querySelectorAll(".itemQuantity")
    
    
    InputQuantity.forEach((itemQuantity) => {

    itemQuantity.addEventListener('change', (e) => {
     const quantity = Number (e.currentTarget.value)
      console.log(quantity)
      ArrayStorage[k].quantity = quantity
      localStorage.setItem("addToCart", JSON.stringify(ArrayStorage)) 
console.log(ArrayStorage)
    
    })
    });
  
    }

  
  
  )} 

    }


   
  
      /***********************************************************REGEX *//////////////////////////////////////////




      /*****SELECTION DE TOUT LES INPUT  */

const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');

let firstName, lastName, address, city, email;

/*******FONCTION POUR CHECKER LES FORMULAIRES */

// identification de la div qui contient le input firstName et tout les autres avec utilisation de tag et le message d'error //

const errorDisplay =  (tag, message, valid) => {
  const container = document.querySelector("#cartAndFormContainer > section > div.cart__order > form > div")
 // console.log(container);
  const pError =   document.querySelector("#" + tag + "ErrorMsg");
/* 
  console.log(pError);
  document.querySelector("#firstNameErrorMsg")
  console.log(pError); */

  // S'il y a erreur on affiche un message erreur sinon on supprime le message d'erreur //

  if (!valid) {
      container.classList.add('error');
      pError.textContent = message;
  } else {
      container.classList.remove('error');
      pError.textContent = message
  }
}

/**************************************************************************************FIRSTNAME */

const firstNameChecker = (value) => {

  // Relever d'erreurs qui peuvent survenir , comme prenom court ou long , insertion de nombre et de caracteres speciaux //
  if (value.length > 0 && (value.length < 3 || value.length > 20)){
    errorDisplay("firstName", "Le prenom doit faire entre 3 et 20 caracteres");
    firstName = null;

  } else if (!value.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)) {
    errorDisplay("firstName", "Le prenom ne doit pas contenir de caracteres speciaux");
    firstName = null;
// pas d'erreur , on ne met rien //
    } else {
     errorDisplay('firstName', "", true);
     firstName = value;
   
    }
 
};


/**************************************************************************************LASTNAME */

const lastNameChecker = (value) => {
   // Relever d'erreurs qui peuvent survenir , comme prenom court ou long , insertion de nombre et de caracteres speciaux //
   if (value.length > 0 && (value.length < 3 || value.length > 20)){
    errorDisplay("lastName", "Le prenom doit faire entre 3 et 20 caracteres");
    lastName = null;

  } else if (!value.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)){
    errorDisplay("lastName", "Le nom ne doit pas contenir de caracteres speciaux");
    lastName = null;
// pas d'erreur , on ne met rien //
    } else {
     errorDisplay('lastName', "", true);
     lastName = value;
   
    }

};   

/**************************************************************************************ADRESS */

const addressChecker = (value) => {
  if (!value.match(/^([1-9][0-9]*(?:-[1-9][0-9]*)*)[\s,-]+(?:(bis|ter|qua)[\s,-]+)?([\w]+[\-\w]*)[\s,]+([-\w].+)$/)){

   errorDisplay("address", "L'adresse n'est pas valide")
    address = null;
    } else {

      errorDisplay('address', "", true)
      address= value;

    }
  

};


/**************************************************************************************CITY */

const cityChecker = (value) => {

  if (!value.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)) {
    errorDisplay('city', "La saisie city est incorrecte")
    city = null;

  } else{
    errorDisplay('city',"", true)
    city = value;
  }

};


/**************************************************************************************EMAIL */

const emailChecker = (value) => {
  if (!value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) {

    errorDisplay('email', "L'adresse email n'est pas valide")
    email = null;
    } else {
      errorDisplay('email', "", true)
      email = value;
    }

};

// EVENEMENT sur TOUT LES INPUT//

inputs.forEach((input) => {

  input.addEventListener("input", (e) => {
    console.log(e.target.value);
    switch(e.target.id) {
      case "firstName" : 
      firstNameChecker(e.target.value)
      break;
      case "lastName" :
          lastNameChecker(e.target.value)
          break;
          case "address" :
              addressChecker(e.target.value)
              break;
              case "city" :
                  cityChecker(e.target.value)
                  break;
                  case"email" :
                  emailChecker(e.target.value)
                  break;
                  default:
                    null;
  }
  
  
  
  
  });
  
  });

const form = document.querySelector("#cartAndFormContainer > section > div.cart__order > form")

// envoi des donnees de la commande //
if (ArrayStorage.length > 0 ) {
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (firstName && lastName && address && city && email  && ArrayStorage ) {
    // envoi des donnees contact sous forme d'objet//
    const contact = {
      firstName,
      lastName,
      address,
      city,
      email,
      
    };
    // envoi des id products sous forme d'objet //
for (p=0; p < ArrayStorage.length;p++){
    const products = {
      id : ArrayStorage[p].idProduct,
    }
  
console.log(products);
  }
    


// verification que tout les champs ont ete bien rempli //
    inputs.forEach((input) => (input.value = ""));
     firstName = null;
    lastName = null;
      address = null;
    city = null;
    email = null;
    alert("Commande validée !");
// requete POST vers l'API //

    fetch("http://localhost:3000/api/products",contact, products).then(() => {
    console.log("commande envoye")
    
})
  
  } else {
    alert("veuillez remplir correctement les champs");
  }

});
} else {
  alert("Le panier est vide ")
}