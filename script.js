var countDownDate = new Date("Nov 13, 2020").getTime();
setInterval(function count_down() {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("h").innerHTML = hours;
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("s").innerHTML = seconds;
}, 1000);

const next = document.getElementById("next");
const previous = document.getElementById("previous");
const box = document.querySelector(".imageBox");
const slides = box.getElementsByTagName("img");
var i = 0;
next.addEventListener("click", function (event) {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
});
previous.addEventListener("click", function (event) {
  slides[i].classList.remove("active");
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add("active");
});

const list = document.getElementById("grid");
const search = document.getElementById("search");
search.addEventListener("keyup", function (event) {
  console.log(event.target.value);
});

let products = [
  {
    name: "Renault Sandero",
    tag: "hatch-back-1b",
    price: 335000000,
    incart: 0
  },
  {
    name: "Ford Fiesta",
    tag: "hatch-back-2b",
    price: 313000000,
    incart: 0
  },
  {
    name: "BMW 218i",
    tag: "hatch-back-2c",
    price: 690000000,
    incart: 0
  }, 
  {
    name: "Volkswagen Beetle",
    tag: "hatch-back-4c",
    price: 735000000,
    incart: 0
  },
  {
    name: "Toyota Prius",
    tag: "hatch-back-6c",
    price: 750000000,
    incart: 0
  },
  {
    name: "Chevrolet Volt",
    tag: "hatch-back-7c",
    price: 1000000000,
    incart: 0
  },
  {
    name: "Suzuki Vitara",
    tag: "suv-3b",
    price: 390000000,
    incart: 0
  },
  {
    name: "Renault Duster",
    tag: "suv-4b",
    price: 390000000,
    incart: 0
  },
  {
    name: "Volvo XC40",
    tag: "suv-5c",
    price: 1750000000,
    incart: 0
  },
  {
    name: "Toyota RAV4",
    tag: "suv-6c",
    price: 2600000000,
    incart: 0
  },
  {
    name: "Land Rover Discovery",
    tag: "suv-3hs",
    price: 779000000,
    incart: 0
  },
  {
    name: "Lamborghini Urus",
    tag: "suv-4hs",
    price: 4000000000,
    incart: 0
  },
  {
    name: "Volvo XC40",
    tag: "suv-5c",
    price: 1750000000,
    incart: 0
  },
  {
    name: "Mercedes-Benz GLS 350d",
    tag: "suv-8hs",
    price: 719000000,
    incart: 0
  },
  {
    name: "BMW X5",
    tag: "suv-13hs",
    price: 799000000,
    incart: 0
  },
  {
    name: "Mercedes-AMG GLE 43",
    tag: "suv-5c",
    price: 4559000000,
    incart: 0
  },
  {
    name: "Mercedes-Benz GLE 450",
    tag: "suv-16hs",
    price: 4369000000,
    incart: 0
  }
];

const cart = document.querySelectorAll(".add-cart");
for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", function (event) {
    cartNumber(products[i]);
    totalCost(products[i]);
  });
}

function cartNumber(products) {
  let productNumber = localStorage.getItem("cartNumber");
  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("cartNumber", productNumber + 1);
    document.querySelector(".cart-info small").textContent = productNumber + 1;
  } else {
    localStorage.setItem("cartNumber", 1);
    document.querySelector(".cart-info small").textContent = 1;
  }
  setItem(products);
}

function onloadCartnumber() {
  let productNumber = localStorage.getItem("cartNumber");
  if (productNumber) {
    document.querySelector(".cart-info small").textContent = productNumber;
  }
}

function setItem(products) {
  let cartItems = localStorage.getItem("ProductInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[products.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [products.tag]: products
      }
    }
    cartItems[products.tag].incart += 1;
  } else {
    products.incart = 1;
    cartItems = {
      [products.tag]: products
    }
  }
  localStorage.setItem("ProductInCart", JSON.stringify(cartItems));
}

function totalCost(products) {
  let cartcost = localStorage.getItem("totalcost");
  if (cartcost != null) {
    cartcost = parseInt(cartcost);
    localStorage.setItem("totalcost", cartcost + products.price);
  } else {
    localStorage.setItem("totalcost", products.price);
  }
}
onloadCartnumber();