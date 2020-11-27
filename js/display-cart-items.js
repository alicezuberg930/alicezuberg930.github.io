let cartcost = localStorage.getItem('TotalPrice');
let cartitem = JSON.parse(localStorage.getItem('items'));
let productContainer = document.querySelector('.products');
function display() {
  if (cartitem && cartcost) {
    cartitem.map(item => {
      productContainer.innerHTML += `
        <div class="product">
          <ul>
            <li>${item.id}</li>
            <li><img src="${item.tag}"></li>
            <li><span>${item.name}</span></li>
            <li><span>${item.price} VND</span></li>
            <li><span> ${item.incart} </span></li>
            <li><span>${item.price * item.incart} VND</span></li>
            <li><i class="fas fa-trash" onclick="xoa(this)"></i></li>
          </ul>  
        </div>`;
    });
    productContainer.innerHTML += `
      <div class="total-container">
        <h1>Total Cost</h1>
        <h1>${cartcost} VND</h1>
      </div>`;
  }
  else {
    productContainer.innerHTML += `
      <h1>No items found</h1>`;
  }
}
display();

function xoa(e) {
  let items = [];
  let total = 0;
  JSON.parse(localStorage.getItem("items")).map(data => {
    if (data.id != e.parentElement.parentElement.children[0].textContent) {
      items.push(data);
      total = total + data.price;
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
  localStorage.setItem("TotalPrice", total);
  window.location.reload();
}