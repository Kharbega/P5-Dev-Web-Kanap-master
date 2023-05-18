// PAGE ACCUEIL //
section = document.getElementById('items');
//*********AFFICHAGE DES PRODUITS DANS INDEX.HTML */


//***************IDENTIFICATION DE LA SECTION  */





//**************MISE EN PLACE DE LA FONCTION  */

function getAllProducts() {

    fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then(function (data) {

            for (product in data) {
                section.innerHTML += `<a href="./product.html?id=${data[product]._id}">
                  <article>
                    <img src="${data[product].imageUrl}" alt=${data[product].altTxt}>
                    <h3 class="productName">${data[product].name}</h3>
                    <p class="productDescription">${data[product].description}</p>
                  </article>`
            }
        })
}

getAllProducts()
     

//***************FIN DE LA FONCTION  */


