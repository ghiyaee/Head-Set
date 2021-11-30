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
console.log(banner);
let timer = 180000;
let position = 0;

menu.addEventListener("click",show)
btn = document.addEventListener("click", slider_manual);
// click_rlt.addEventListener("click", next);
// click_lft.addEventListener("click", priv);

function next() {
  const scroll = [...document.querySelector(".test").children];
  console.log(scroll);
  scroll.forEach((list) => {
    list.classList.remove("active");
    list.classList.add("hidden");
    scroll1.forEach((list1) => {
      list1.classList.remove("hidden");
    });
  });
}

function priv() {
  console.log("left");
  scroll1.forEach((list1) => {
    list1.classList.remove("active");
    list1.classList.add("hidden");
    const scroll = [...document.querySelector(".test").children];
    scroll.forEach((list) => {
      list.classList.remove("hidden");
    });
  });
}

function slider_manual(index) {
  slides.forEach((list) => {
    // list.classList.remove('active')
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
function show() {
  if (check) {
    home.style.right = "50px";
    user.style.right = "75px";
    buy.style.right = "97px";
    search.style.right = "120px";
    check = false;
  } else {
    home.style.right = "15px";
    user.style.right = "15px";
    buy.style.right = "15px";
    search.style.right = "15px";
    check = true;
  }

}
