const conti = document.querySelector('.container')
const cnter=document.querySelector('.loading')
let btn = document.querySelector("#btn");
let slides = [...document.querySelector(".sliders").children];
let menu = document.querySelector(".menu")
const scroll1 = [...document.querySelector(".test1").children];
let click_rlt = document.querySelector("#btn-rlt");
let click_lft = document.querySelector("#btn-lft");
const row_end = document.querySelector(".row-end");
const banner = document.querySelectorAll(".banner");
const home = document.querySelector('.home')
const user = document.querySelector('.user')
const buy = document.querySelector('.buy')
const search = document.querySelector('.search')
const input = document.querySelector('.input')
console.log(banner);
let timer = 180000;
let position = 0;
let conter = 0;
let vaild=true

const stop=setInterval(con,150)
function con() {
  conter++
  if (conter > 50 && vaild) {
    clearInterval(stop)
    conti.style.zIndex = "1"
    vaild = false;
  }
  cnter.innerHTML = `LOADING ${conter}`
  cnter.style.opacity = 1 - (conter / 100)
  conti.style.filter=`blur(${100 - conter})`
}

search.addEventListener("click",showsearch)
menu.addEventListener("click", showMenu)
btn = document.addEventListener("click", slider_manual);

function slider_manual(index) {
  slides.forEach((list) => {
    if (index.target.id == "one") {
      list.classList.remove("active");
      slides[0].classList.add("active");
    }
    if (index.target.id == "two") {
      list.classList.remove("active");
      slides[1].classList.add("active");
    }
    if (index.target.id == "three") {
      list.classList.remove("active");
      slides[2].classList.add("active");
    }
  });
}

let counter = 0;
function slider_auto() {
  if (counter < slides.length) {
    slides.forEach((list) => {
      list.classList.remove("active");
      slides[counter].classList.add("active");
    });
    counter++;
  } else {
    counter = 0;
  }
}
setInterval("slider_auto()", 4000);



let check = true;
function showMenu() {
  
  if (check) {
    menu.style.transform = "rotateZ(90deg)";
    menu.style.backgroundColor = " white";
    menu.style.color = "tomato";
    menu.style.boxShadow = "0px 0px 15px 0px rgb(236, 64, 48)";
    home.style.right = "70px";
    user.style.right = "93px";
    buy.style.right = "113px";
    search.style.right = "138px";
    check = false;
  } else {
    menu.style.transform = "rotateZ(0deg)";
    menu.style.backgroundColor = " tomato";
    menu.style.color = "white";
    menu.style.boxShadow = "0px 0px 0px 0px rgb(250, 250, 250)";
    home.style.right = "15px";
    user.style.right = "15px";
    buy.style.right = "15px";
    search.style.right = "15px";
    check = true;
  }

}

let inputshow =true;
function showsearch() {
  if (inputshow) {
    input.style.display = "block"
    inputshow = false;
  } else {
    input.style.display = "none"
    inputshow = true;
  }
}
