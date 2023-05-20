/* const cartItems = document.querySelector("#cart__items");
console.log("HELLO");

const item__img = document.querySelector("#cart__items > article > div.cart__item__img");
const cart__item__content__description = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__description");

const cart__item__content__settings__quantity = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__settings > div.cart__item__content__settings__quantity");

 */


//**************RECUPERATION DES PRODUITS QUI SONT DANS LE PANIER */
let ArrayStorage = JSON.parse(localStorage.getItem("addToCart")) || []
console.log(ArrayStorage);

//******************CREATION VARIABLE QUI VA CONTENIR LES PRODUITS */
const cartItems = document.getElementById("cart__items");
//console.log(cartItems);

//const cart__item__content__description = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__description");

 

//*********** VERIFICATION SI LE PANIER EST VIDE OU CONTIENT DES PRODUITS/


if ( ArrayStorage.length === 0){
// Si le panier est vide , on affiche dans la page le message le panier est vide //
    console.log("le panier est vide")
    cartItems.innerHTML += `<div> Le panier est vide </div> `

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
                      <button class="deleteItem" >Supprimer </button>
                    </div>
                  </div>
                </div>
              </article>`
              
//*******************Identification des dataset pour id et color */
let article = document.querySelector("#cart__items > article");
console.log(article.dataset)

//**Identification du btn supprimer */
//const deleteInput = document.querySelectorAll(".deleteItem")



}
  )} 


}

  
    
const deleteInput = document.querySelectorAll(".deleteItem")


      deleteInput.addEventListener("click", (e) => {
    event.preventDefault()
      console.log(e.target.value);
    
      })
      
   

/* for(let i =0 ; 1 < deleteInput.length; i++){
  deleteInput[1].addEventListener("click", (event)=> {

  console.log(Event);

}
  )} */
    ///*************ESSAIE DE L'EVENT DELETE */
  /* 
    const deleteInput = document.querySelectorAll(".deleteItem")
    console.log(deleteInput);
    
    for(let i =0 ; i = deleteInput.length; i++){
      deleteInput[1].addEvenlister("click", (event)=> {

      console.log(Event);
    
    }
      )}
 */
    
/* 
let ProductStorage = {
  idProduct: id,
  quantity: document.getElementById('quantity').value,
  colorProduct: document.querySelector("#colors").value,
}

function removeProduct(product){
  let ArrayStorage = JSON.parse(localStorage.getItem("addToCart")) //|| []
  let filtreProduct  =  ArrayStorage[k].filtre((filtre)=> ProductStorage.idProduct != filtre.idProduct && filtre.colorProduct != ProductStorage.colorProduct ) ;
  localStorage.setItem("addToCart", JSON.stringify(ArrayStorage)) 

  
}
removeProduct()
 
 */



