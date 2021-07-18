let regi=document.querySelector('.new-regi');
let frm_login=document.querySelector('.login');
let frm_regi=document.querySelector('.regi')

regi.addEventListener("click",register)

function register(){
   frm_login.style.display="none"
   frm_regi.style.display="block"

}