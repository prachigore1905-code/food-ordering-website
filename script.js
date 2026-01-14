const menu = [];
let cart = [];

// Generate 100 products automatically
for (let i = 1; i <= 100; i++) {
    menu.push({
        id: i,
        name: `Food Item ${i}`,
        price: (Math.floor(Math.random() * 10) + 3),
        image: `https://via.placeholder.com/300x200?text=Food+${i}`
    });
}

const menuDiv = document.getElementById("menuItems");
const cartUl = document.getElementById("cartItems");
const totalSpan = document.getElementById("total");

// Display products
menu.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuDiv.appendChild(div);
});

function addToCart(id) {
    const found = cart.find(item => item.id === id);
    if (found) {
        found.qty++;
    } else {
        const product = menu.find(item => item.id === id);
        cart.push({ ...product, qty: 1 });
    }
    updateCart();
}

function updateCart() {
    cartUl.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement("li");
        li.textContent = `${item.name} x ${item.qty} = $${item.price * item.qty}`;
        cartUl.appendChild(li);
    });

    totalSpan.textContent = total;
}

