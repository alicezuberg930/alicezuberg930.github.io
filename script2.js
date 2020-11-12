function display(){
    let cartcost = localStorage.getItem('totalcost');
    let cartitem = localStorage.getItem('ProductInCart');
    cartitem = JSON.parse(cartitem);
    let productContainer = document.querySelector('.products');
    if(cartitem && productContainer){
      
      Object.values(cartitem).map(item => {
        productContainer.innerHTML += `
        <div class="product">
          <ul>
            <li><img src="image/${item.tag}.png"></li>
            <li><span>${item.name}</span></li>
            <li><span>${item.price} VND</span></li>
            <li><span><i class="fa fa-minus-circle"></i> ${item.incart} <i class="fa fa-plus-circle"></i></span></li>
            <li><span>${item.price*item.incart} VND</span></li>
        </div>
        `;
      });

    }
  }
  display();