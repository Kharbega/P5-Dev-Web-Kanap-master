//PAGE CONFIRMATION //

// Recupere l'orderId de l'url que l'api nous envoi//
let orderId = new URLSearchParams(window.location.search).get('orderId')

// on cree une span pour afficher l'id dedans //

document.querySelector("#orderId").textContent += orderId;
// on vide le panier apres avoir passe la commande 
window.localStorage.clear()

