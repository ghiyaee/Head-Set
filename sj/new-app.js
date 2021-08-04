let regi = document.querySelector(".new-regi");
let frm_login = document.querySelector(".login");
let frm_regi = document.querySelector(".regi");
let panel = document.querySelector("#test");
let exit = document.querySelector("#exit");

regi.addEventListener("click", register);
panel.addEventListener("click", opnpanel);

function register() {
  frm_login.style.display = "none";
  frm_regi.style.display = "block";
}
function opnpanel() {
  window.open("panel.html");
}

function exit_panel() {
  window.open("home.html");
}
