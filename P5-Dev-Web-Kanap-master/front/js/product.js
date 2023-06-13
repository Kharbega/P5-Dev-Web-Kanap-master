//PAGE PRODUIT//

// identification des balises //

const section = document.querySelector("body > main > div > section")
const itemImg = document.querySelector("body > main > div > section > article > div.item__img")
const productName = document.querySelector("#title")
const productPrice = document.getElementById('price')
const productDescription = document.getElementById('description')
const productColors = document.querySelector("#colors")

//  Récupérer l’id du produit à afficher //

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

const url = `http://localhost:3000/api/products/${id}`

// FIN  Récupérer l’id du produit à afficher //


//Insérer un produit et ses détails dans la page//


function getOneProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      itemImg.innerHTML += `<img src = ${data.imageUrl}>  `
      productName.innerHTML += `<h1> ${data.name} </h1>`
      productPrice.innerHTML += `<span> ${data.price} </span>`
      productDescription.innerHTML += `<p> ${data.description} </p>`

      for (color in data.colors) {

        productColors.innerHTML += `  <option value="${data.colors[color]}">${data.colors[color]}</option> `

      }


    })
}

getOneProduct()



//  fin insertion produit et ses details //


//************Ajouter des produits dans le panier*///////////////////



// identification des balises //

const addToCart = document.querySelector("#addToCart")

//*********************Objet Produit qu'on va stocker dans le localstorage  & EVEN AU CLICK*/
addToCart.addEventListener("click", (e) => {
  let ProductStorage = {
    idProduct: id,
    quantity: document.getElementById('quantity').value,
    colorProduct: document.querySelector("#colors").value,
  }
   e.preventDefault()


  //* On recupere la valeur //
   let ArrayStorage = JSON.parse(localStorage.getItem("addToCart")) || []

   //********************On trouve le produit qui a le meme id et la meme couleur  */
      let foundProduct = ArrayStorage.find((item)=> ProductStorage.idProduct == item.idProduct && item.colorProduct == ProductStorage.colorProduct ) ;
   
  //******************* Si un produit avec le meme id et color ,on additionne seulement les quantitees*/
      if ( foundProduct != undefined){ 
     foundProduct.quantity =  parseInt(foundProduct.quantity) + parseInt (ProductStorage.quantity);

      localStorage.setItem("addToCart", JSON.stringify(ArrayStorage)) 
      
     }  else {

      ArrayStorage.quantity = 1 ;
      ArrayStorage.push(ProductStorage)
     localStorage.setItem("addToCart", JSON.stringify(ArrayStorage))  
     
} 


let quantityTotal = parseInt(ProductStorage.quantity) + parseInt(foundProduct.quantity)
console.log(quantityTotal)
let max = 100 - quantityTotal;
console.log(max)
if (quantityTotal > 100) {
  alert("Quantite maximal presque atteinte ")

}if (max < 0 ){
alert("100 articles ont ete mis dans le panier ,nombre maximum atteint")
quantityTotal = ArrayStorage.quantity
  localStorage.setItem("addToCart", JSON.stringify(ArrayStorage)) 
location.reload("cart.html")

}

}); 



 

////***FIN EVENT CLICK */


