

const section = document.querySelector("body > main > div > section")
const itemImg = document.querySelector("body > main > div > section > article > div.item__img")
const productName = document.querySelector("#title")
const productPrice = document.getElementById('price')
const productDescription = document.getElementById('description')
const productColors = document.querySelector("#colors")
//console.log(productColors);

//  Récupérer l’id du produit à affiche //

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

const url = `http://localhost:3000/api/products/${id}`

// FIN  Récupérer l’id du produit à affiche //


//Insérer un produit et ses détails dans la page//



//function getAllProducts() {//

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




const addToCart = document.querySelector("#addToCart")





addToCart.addEventListener("click", (e) => {
  let ProductStorage = {
    idProduct: id,
    quantity: document.getElementById('quantity').value,
    colorProduct: document.querySelector("#colors").value,
  }
   e.preventDefault()
  //console.log(localStorage);
  //console.log('quantity');



  //* / recupere la valeur //
   let ArrayStorage = JSON.parse(localStorage.getItem("addToCart")) || []

      let foundProduct = ArrayStorage.find((item)=> ProductStorage.idProduct == item.idProduct && item.colorProduct == ProductStorage.colorProduct ) ;
     // let foundColor = ArrayStorage.find ((itemcolor) => ProductStorage.colorProduct == itemcolor.colorProduct);
   
  
      if ( foundProduct != undefined){ 
     foundProduct.quantity =  parseInt(foundProduct.quantity) + parseInt (ProductStorage.quantity);
     console.log(ArrayStorage);

      localStorage.setItem("addToCart", JSON.stringify(ArrayStorage)) 
      
     }  else {

      ArrayStorage.quantity = 1 ;
      ArrayStorage.push(ProductStorage)
     localStorage.setItem("addToCart", JSON.stringify(ArrayStorage))  
     
} 

/* if (foundProduct.quantity < 100 ) {
    alert("Quantite maximum atteinte")
    
  
}; */
}); 



 

////***FIN EVENT CLICK */


