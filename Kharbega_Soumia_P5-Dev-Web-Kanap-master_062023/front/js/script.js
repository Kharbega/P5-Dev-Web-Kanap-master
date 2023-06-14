// PAGE ACCUEIL //


//************ identification de la section *//
section = document.getElementById('items');


//**************MISE EN PLACE DE LA FONCTION  pour affcicher les produits  */

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


