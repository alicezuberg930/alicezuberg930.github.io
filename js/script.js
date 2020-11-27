function search_bar() {
  const list = document.getElementById("grid");
  const search = document.getElementById("search");
  search.addEventListener("keyup", function (event) {
    console.log(event.target.value);
  });
}
search_bar();

function count_down() {
  var countDownDate = new Date("Jan 1, 2021").getTime();
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
}
setInterval(count_down, 1000);

function image() {
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
}
image();

let products = [
  // {
  //     name: "Renault Sandero",
  //     tag: "hatch-back-1b",
  //     price: 335000000,
  //     incart: 0
  // },
  // {
  //     name: "Ford Fiesta",
  //     tag: "hatch-back-2b",
  //     price: 313000000,
  //     incart: 0
  // },
  // {
  //     name: "BMW 218i",
  //     tag: "hatch-back-2c",
  //     price: 690000000,
  //     incart: 0
  // },
  // {
  //     name: "Volkswagen Beetle",
  //     tag: "hatch-back-4c",
  //     price: 735000000,
  //     incart: 0
  // },
  // {
  //     name: "Toyota Prius",
  //     tag: "hatch-back-6c",
  //     price: 750000000,
  //     incart: 0
  // },
  // {
  //     name: "Chevrolet Volt",
  //     tag: "hatch-back-7c",
  //     price: 1000000000,
  //     incart: 0
  // },
  // {
  //     name: "Suzuki Vitara",
  //     tag: "suv-3b",
  //     price: 390000000,
  //     incart: 0
  // },
  // {
  //     name: "Renault Duster",
  //     tag: "suv-4b",
  //     price: 390000000,
  //     incart: 0
  // },
  // {
  //     name: "Mercedes-Benz A250",
  //     tag: "hatch-back-2d",
  //     price: 850000000,
  //     incart: 0
  // },
  // {
  //     name: "Volvo V40",
  //     tag: "hatch-back-3d",
  //     price: 450000000,
  //     incart: 0
  // },
  // {
  //     name: "Volvo XC40",
  //     tag: "suv-5c",
  //     price: 1750000000,
  //     incart: 0
  // },
  // {
  //     name: "Toyota RAV4",
  //     tag: "suv-6c",
  //     price: 2600000000,
  //     incart: 0
  // },
  // {
  //     name: "Land Rover Discovery",
  //     tag: "suv-3hs",
  //     price: 779000000,
  //     incart: 0
  // },
  // {
  //     name: "Lamborghini Urus",
  //     tag: "suv-4hs",
  //     price: 4000000000,
  //     incart: 0
  // },
  // {
  //     name: "Mercedes-Benz GLS 350d",
  //     tag: "suv-8hs",
  //     price: 719000000,
  //     incart: 0
  // },
  // {
  //     name: "BMW X5",
  //     tag: "suv-13hs",
  //     price: 799000000,
  //     incart: 0
  // },
  // {
  //     name: "Mercedes-AMG GLE 43",
  //     tag: "suv-5c",
  //     price: 4559000000,
  //     incart: 0
  // },
  // {
  //     name: "Mercedes-Benz GLE 450",
  //     tag: "suv-16hs",
  //     price: 4369000000,
  //     incart: 0
  // },
  // {
  //     name: "Lexus CT 200h",
  //     tag: "hatch-back-4d",
  //     price: 808000000,
  //     incart: 0
  // },
  // {
  //     name: "Hyundai Ioniq",
  //     tag: "hatch-back-6d",
  //     price: 572000000,
  //     incart: 0
  // }
];