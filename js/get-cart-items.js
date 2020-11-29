let items = [];
const addcart = document.getElementsByClassName('add-cart');
for (let i = 0; i < addcart.length; i++) {
    addcart[i].addEventListener('click', function (e) {
        if (typeof (Storage) !== 'undefined') {
            let imagePath = e.target.parentElement.children[0].children[0].src;
            let pos = imagePath.indexOf('image');
            let imageFullPath = imagePath.slice(pos);
            let price = e.target.parentElement.children[1].children[1].textContent;
            let fullprice = parseInt(price.slice(0).replace(" đ", '').replaceAll(".", ''));
            let item = {
                id: i + 1,
                name: e.target.parentElement.children[1].children[0].textContent,
                tag: imageFullPath,
                price: fullprice,
                incart: 1
            };
            console.log(imagePath);
            if (JSON.parse(localStorage.getItem('items')) === null) {
                items.push(item);
                localStorage.setItem("items", JSON.stringify(items));
                window.location.reload();
            } else {
                const localitem = JSON.parse(localStorage.getItem("items"));
                localitem.map(data => {
                    if (item.id == data.id) {
                        item.incart = data.incart + 1;
                    } else {
                        items.push(data);
                    }
                })
                items.push(item);
                localStorage.setItem("items", JSON.stringify(items));
                window.location.reload();
            }
        } else {
            console.log("Storage is not working on your browser");
        }
    });
}

function cart_number() {
    const cart = document.querySelector(".cartItems small");
    let no = 0;
    let cartitem = JSON.parse(localStorage.getItem("items"));
    cartitem.map(data => {
        no = no + data.incart;
    });
    cart.innerText = no;
}
cart_number();

function totalCost() {
    let total = 0;
    let cartitem = JSON.parse(localStorage.getItem("items"));
    cartitem.map(data => {
        total = total + data.price;
    });
    localStorage.setItem("TotalPrice", total);
}
totalCost();