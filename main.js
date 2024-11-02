const apiEndpoint = "https://www.course-api.com/javascript-store-products";
const productContainer = document.getElementById("product-container");

fetch(apiEndpoint)
  .then((response) => response.json())
  .then((data) => {
    console.log("Product data:", data); // Logging data for debugging
  })
  .catch((error) => console.error("Fetch error:", error));


