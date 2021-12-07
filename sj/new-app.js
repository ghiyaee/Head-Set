let regi = document.querySelector(".new-regi");
let frm_login = document.querySelector(".login");
let frm_regi = document.querySelector(".regi");
let panel = document.querySelector("#test");
let exit = document.querySelector("#exit");
let enter = document.querySelector('#cheched');
let user = document.querySelector('#user');
let pass = document.querySelector('#pass');
regi.addEventListener("click", register);
panel.addEventListener("click", opnpanel);
enter.addEventListener('click',summit)
function register() {
  frm_login.style.display = "none";
  frm_regi.style.display = "block";
}
function opnpanel() {
  // window.open("../index.html");
}
