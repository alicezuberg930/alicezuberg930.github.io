let cartcost = parseInt(localStorage.getItem('TotalPrice'));
let cartitem = JSON.parse(localStorage.getItem('items'));
let productContainer = document.querySelector('.product-container table');
let total = document.querySelector(".total");
let empty = document.querySelector(".empty");
function display() {
  if (cartitem && cartcost) {
    cartitem.map(item => {
      productContainer.innerHTML += `
      <tr>
        <td style="display: none;">${item.id}</td>
        <td><img src="${item.tag}"></td>
        <td>${item.name}</td>
        <td>${item.price} VND</td>
        <td>${item.incart}</td>
        <td><i class="fas fa-trash" onclick="xoa(this)"></i></td>
      </tr>`;
    });
    total.innerHTML += `
      <h1>Tổng Giá Tiền</h1>
      <h1>${cartcost} VND</h1>
      `;
  }
  else if (cartitem == null || cartcost == 0) {
    empty.innerHTML += `
      <h2>Giỏ của bạn hiện đang trống</h2>`;
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