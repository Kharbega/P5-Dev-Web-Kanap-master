spanOrderId = document.querySelector("#orderId");


/* let order = new URLSearchParams(window.location.search).get('OrderId')
spanOrderId.textContent = order;
console.log(order); */

fetch("http://localhost:3000/api/products",formulaire).then() => {
    console.log("command envoye")
}