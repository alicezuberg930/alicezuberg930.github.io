var countDownDate = new Date("Oct 22, 2020").getTime();
function count_down(){
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    if(hours < 10) hours = '0'+hours;
    if(minutes < 10) minutes = '0'+minutes;
    if(seconds < 10) seconds = '0'+seconds;
    document.getElementById("h").innerHTML=hours;
    document.getElementById("m").innerHTML=minutes;
    document.getElementById("s").innerHTML=seconds;
}
setInterval(count_down,1000);

function setgrid(group){
}

function clear(){

}

function noresult(){

}

const list = document.getElementById('grid');
window.onload=function(){
    const search = document.getElementById('search');
    search.addEventListener('keyup',(event)=>{
    const value = event.target.value;
    });
}
