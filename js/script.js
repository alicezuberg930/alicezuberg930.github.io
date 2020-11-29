const list = document.querySelectorAll(".grid-item");
const search = document.getElementById("search");
const sb = document.querySelector(".shop-body");
const sb2 = document.querySelector(".shop-body-2")
search.addEventListener("keyup", function () {
    var filter = search.value.toUpperCase();
    for (var i = 0; i < list.length; i++) {
        var li = list[i].children[1].children[0].innerText.toUpperCase();
        if (li.indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
});

function count_down() {
    const countDownDate = new Date("Jan 1, 2021").getTime();
    const now = new Date().getTime();
    let timeleft = countDownDate - now;
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("h").innerText = hours;
    document.getElementById("m").innerText = minutes;
    document.getElementById("s").innerText = seconds;
}
setInterval(count_down, 1000);

const img = document.querySelector(".imageBox");
function image() {
    img.innerHTML += `
      <img src="image/box-1.jpg" alt="" class="active">
      <img src="image/box-2.jpg" alt="">
      <img src="image/box-3.jpg" alt="">
      <img src="image/box-4.jpg" alt="">
      <img src="image/box-5.jpg" alt="">
      <img src="image/box-6.jpg" alt="">`;
}
image();

const next = document.getElementById("next");
const previous = document.getElementById("previous");
const box = document.querySelector(".imageBox");
const slides = box.getElementsByTagName("img");
let i = 0;
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
