const products = [
    {
        name: "Wireless Headphones",
        price: 1499,
        category: "Electronics"
    },
    {
        name: "Smart Watch",
        price: 1999,
        category: "Electronics"
    },
    {
        name: "Backpack",
        price: 899,
        category: "Accessories"
    },
    {
        name: "Running Shoes",
        price: 2499,
        category: "Fashion"
    },
    {
        name: "Water Bottle",
        price: 499,
        category: "Accessories"
    },
    {
        name: "Bluetooth Speaker",
        price: 1299,
        category: "Electronics"
    }
];

function displayProducts() {
    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    products.forEach(function(product) {
        const productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <button onclick="viewProduct('${product.name}')">
                View Product
            </button>

            <button onclick="deleteProduct('${product.name}')">
                Delete
            </button>
        `;

        productList.appendChild(productCard);
    });
}

displayProducts();


const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = products.filter(function(product) {
        const matchesSearch =
            product.name.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    filteredProducts.forEach(function(product) {
        const productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <button onclick="viewProduct('${product.name}')">
                View Product
            </button>

            <button onclick="deleteProduct('${product.name}')">
                Delete
            </button>
        `;

        productList.appendChild(productCard);
    });
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);


const productForm = document.getElementById("product-form");

productForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("product-name").value.trim();
    const price = document.getElementById("product-price").value;
    const category = document.getElementById("product-category").value;
    const message = document.getElementById("form-message");

    if (name === "" || price === "" || category === "") {
        message.textContent = "Please fill all the fields.";
        return;
    }

    const newProduct = {
        name: name,
        price: Number(price),
        category: category
    };

    products.push(newProduct);

    message.textContent = "Product added successfully!";

    productForm.reset();

    displayProducts();
});


function viewProduct(productName) {
    alert("You selected: " + productName);
}

function deleteProduct(productName) {
    const productIndex = products.findIndex(function(product) {
        return product.name === productName;
    });

    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        displayProducts();
    }
}