/* const cartItems = document.querySelector("#cart__items");
console.log("HELLO");

const item__img = document.querySelector("#cart__items > article > div.cart__item__img");
const cart__item__content__description = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__description");

const cart__item__content__settings__quantity = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__settings > div.cart__item__content__settings__quantity");

 */
/* export function get OneProduct () =>  {
cartItems.innerHTML += 
}; */


//**************RECUPERATION DES PRODUITS QUI SONT DANS LE PANIER */
let ArrayStorage = JSON.parse(localStorage.getItem("addToCart")) //|| []
console.log(ArrayStorage);
//******************CREATION VARIABLE QUI VA CONTENIR LES PRODUITS */
const cartItems = document.getElementById("cart__items");
//console.log(cartItems);

const cart__item__content__description = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__description");


// FIN  Récupérer l’id du produit à affiche //


//Insérer un produit et ses détails dans la page//



//function getAllProducts() {//



//***Pobleme de cors */
/* const httpHandler = function (re, res) {
  console.log(req.method + '/: ' + req.url)
  if (req.url === '/' && req.method === "GET"){
    getIndex(req,res)
  }
  if (req.url === '/posts' && req.method === "GET"){
    res.setHeader ('Access-Control-Allow-Origin','http://localhost:3000')

    getPosts(req,res) 
  }
  if (req.url === '/posts' && req.method === "POST"){
    getPosts(req,res)
  }
  res.end()
}
http.createServer(httpHandler).listen(3000) */

/* let params = new URLSearchParams(document.location.search);
let imageUrl = params.get("imageUrl");

const url = `"http://localhost:3000/images/${imageUrl}"`
  fetch(url)
    .then((res) => res.json())
    .then ((data)=> console.log(data)); */
 /* 

    fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then ((data)=> console.log(data));
 */
        

//*********** VERIFICATION SI LE PANIER EST VIDE OU CONTIENT DES PRODUITS/
if ( ArrayStorage.length === 0){

    console.log("le panier est vide")
    cartItems.innerHTML += `<div> Le panier est vide </div> `

} else {
    console.log("le panier contient des produits ") 
    let structureHtml = [];
    for ( let k=0 ; k < ArrayStorage.length; k++) { 
      const url = 'http://localhost:3000/api/products/' + ArrayStorage[k].idProduct;
      fetch(url)
      .then((res) => res.json())
      .then ( (data) =>  {
        console.log(ArrayStorage[k].idProduct);

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
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`
  
      })
    }
    }
  

/*     if ( k == ArrayStorage.length)
    cartItems.innerHTML = structureHtml;
   */
//}







/* 
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let imageUrl = params.get("imageUrl");
let altTxt = params.get("altTxt");
let price = params.get("price");
let name = params.get("name");

const url = `http://localhost:3000/api/products`
 */

// FIN  Récupérer l’id du produit à affiche //


//Insérer un produit et ses détails dans la page//



//function getAllProducts() {//

/*  function getOneProduct() {
    fetch(url)
        .then((res) => res.json())
        .then (function (data) {
 */
/* 
            cartItems.innerHTML += `${ArrayStorage}`

            item__img.innerHTML += `<img src = ${data[product].imageUrl} >`
            cart__item__content__description.innerHTML += `<h2> ${data[product].name}} </h2>
                                                          <p> ${ArrayStorage.colorProduct} </p>
                                                          <p>  ${data[product].price}*${ArrayStorage.quantity}</p>`
            cart__item__content__settings__quantity.innerHTML += `<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${[ArrayStorage].quantity}>
          </div>`
 */
    //      localStorage.setItem("addToCart", JSON.stringify(ArrayStorage))  

          



// fonction pour recuperer les produits avec une boucle //

/* for (const element of ArrayStorage) {
    console.log(element.idProduct); 
    console.log(element.quantity);
    console.log(element.colorProduct);

} 
 */





/*    });
}

getAddToCart () */

// fin fetch //
//if (localStorage.getItem("AddToCart") != null)

/*    cartItems.innerHTML += `${ArrayStorage}`

item__img.innerHTML += `<img src = ${data.imageUrl}  alt = ${data.altTxt}>`
cart__item__content__description.innerHTML += `<h2> ${data.name}} </h2>
                                               <p> ${ArrayStorage.colorProduct} </p>
                                               <p>  ${data.price}*${ArrayStorage.quantity}`
cart__item__content__settings__quantity.innerHTML += `<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${[ArrayStorage].quantity}>
</div>`

*/



/* const imageUrl = document.querySelector("#cart__items > article > div.cart__item__img > img");
const productName = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__description > h2");
const color = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__description > p:nth-child(2)");
const price = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__description > p:nth-child(3)");
const quantitychoose = document.querySelector("#cart__items > article > div.cart__item__content > div.cart__item__content__settings > div.cart__item__content__settings__quantity > input");
const totalQuantity = document.querySelector("#totalQuantity");
const totalPrice = document.querySelector("#totalPrice");*/

