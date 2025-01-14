let cartItems = [];

function addToCart(product, pricePerKg) {
    const weight = parseFloat(prompt(`Zadejte hmotnost pro ${product} (v kg):`));
    if (!isNaN(weight) && weight > 0) {
        const totalPrice = pricePerKg * weight; // Calculate total price based on weight
        cartItems.push({ product, weight, totalPrice });
        updateCart();
    } else {
        alert('Zadejte platnou hmotnost!');
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1); 
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('kosik');
    if (cartItems.length === 0) {
        cartElement.innerHTML = '<li>Tvůj košík je prázdný waaaa.</li>';
    } else {
        cartElement.innerHTML = cartItems
            .map((item, index) => `
                <li>
                    ${item.product} - ${item.weight.toFixed(2)} kg - ${item.totalPrice.toFixed(2)} Kč
                    <button onclick="removeFromCart(${index})" class="btn btn-danger btn-sm">Smazat</button>
                </li>
            `)
            .join('');
        const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);
        cartElement.innerHTML += `<li><strong>Celkem: ${totalPrice.toFixed(2)} Kč</strong></li>`;
    }
}
