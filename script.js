const containerProducts = document.querySelector("#container-products");
const loader = document.querySelector("#loader");

const getProducts = () => {
  // добавили loader
  loader.classList.toggle("loader-hide");
  // искусственно чуть замедлили появление карточек
  setTimeout(async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data.map(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      const heading = document.createElement("h4");
      heading.textContent = product.title;
      const price = document.createElement("p");
      price.textContent = `Price: ${Math.floor(product.price)} €`;
      const img = document.createElement("img");
      img.src = product.image;
      img.classList.add("card-img");
      card.append(heading, price, img);
      containerProducts.append(card);
    });
     // убрали loader
    loader.classList.toggle("loader-hide");
  }, 1000);
};

getProducts()



document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const productSelect = document.getElementById('product');
  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const pricePerUnit = parseFloat(selectedOption.getAttribute('data-price'));
  const quantity = parseInt(document.getElementById('quantity').value);
  const totalPrice = pricePerUnit * quantity;

  const priceInfoDiv = document.getElementById('priceInfo');
  priceInfoDiv.innerHTML = `<p>Price per unit: $${pricePerUnit.toFixed(2)}</p>
                            <p>Total price: $${totalPrice.toFixed(2)}</p>`;
});
