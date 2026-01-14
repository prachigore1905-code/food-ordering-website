const menu = [
    // Fast Food
    { id: 1, name: "Burger", price: 5, category: "Fast Food" },
    { id: 2, name: "Cheese Burger", price: 6, category: "Fast Food" },
    { id: 3, name: "Pizza", price: 8, category: "Fast Food" },
    { id: 4, name: "Fried Chicken", price: 7, category: "Fast Food" },
    { id: 5, name: "French Fries", price: 3, category: "Fast Food" },
    { id: 6, name: "Hot Dog", price: 4, category: "Fast Food" },

    // Main Course
    { id: 7, name: "Pasta", price: 6, category: "Main Course" },
    { id: 8, name: "Grilled Chicken", price: 9, category: "Main Course" },
    { id: 9, name: "Chicken Biryani", price: 10, category: "Main Course" },
    { id: 10, name: "Veg Rice Bowl", price: 7, category: "Main Course" },

    // Drinks
    { id: 11, name: "Coke", price: 2, category: "Drinks" },
    { id: 12, name: "Orange Juice", price: 3, category: "Drinks" },
    { id: 13, name: "Milkshake", price: 4, category: "Drinks" },
    { id: 14, name: "Coffee", price: 2, category: "Drinks" },

    // Desserts
    { id: 15, name: "Ice Cream", price: 3, category: "Desserts" },
    { id: 16, name: "Chocolate Cake", price: 4, category: "Desserts" },
    { id: 17, name: "Brownie", price: 3, category: "Desserts" },
    { id: 18, name: "Donut", price: 2, category: "Desserts" }
];

let cart = [];

const menuDiv = document.getElementById("menuItems");
const cartUl = document.getElementById("cartItems");
const totalSpan = document.getElementById("total");

// Display menu
menu.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Category: ${item.category}</p>
        <p>Price: $${item.price}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuDiv.appendChild(div);
});

function addToCart(id) {
    const found = cart.find(i => i.id === id);
    if (found) {
        found.qty++;
    } else {
        const item = menu.find(i => i.id === id);
        cart.push({ ...item, qty: 1 });
    }
    updateCart();
}

function updateCart() {
    cartUl.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} x ${item.qty} = $${item.price * item.qty}
            <button onclick="removeItem(${item.id})">❌</button>
        `;
        cartUl.appendChild(li);
    });

    totalSpan.textContent = total;
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("🎉 Order placed successfully!");
    cart = [];
    updateCart();
}
