const apiEndpoint = "https://www.course-api.com/javascript-store-products";
const productContainer = document.getElementById("product-container");

fetch(apiEndpoint)
  .then((response) => response.json())
  .then((data) => {
    console.log("Product data:", data); // Logging data for debugging
  })
  .catch((error) => console.error("Fetch error:", error));

function displayProducts(products) {
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    // Create HTML content for each product
    productElement.innerHTML = `
      <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
      <h2>${product.fields.name}</h2>
      <p>Company: ${product.fields.company}</p>
      <p>Price: $${(product.fields.price / 100).toFixed(2)}</p>
    `;

    productContainer.appendChild(productElement);
  });
}

fetch(apiEndpoint)
  .then((response) => response.json())
  .then((data) => displayProducts(data))
  .catch((error) => console.error("Fetch error:", error));

