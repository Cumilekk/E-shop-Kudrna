
    let cartItems = [];

    function pridatDoKosiku(product, price) {
        cartItems.push({ product, price });
        updateCart();
    }

    function odebrat z Kose

    function updateKosik() {
        const cartElement = document.getElementById('kosik');
        if (cartItems.length === 0) {
            cartElement.innerHTML = '<li>Tvůj košík je prázdný waaaa.</li>';
        } else {
            cartElement.innerHTML = cartItems
                .map(item => `<li>${item.product} - ${item.price}Kč</li>`)
                .join('');
            const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
            cartElement.innerHTML += `<li><strong>Celkem: ${totalPrice}Kč</strong></li>`;
        }
    }
