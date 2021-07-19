let regi=document.querySelector('.new-regi');
let frm_login=document.querySelector('.login');
let frm_regi=document.querySelector('.regi')
let panel=document.querySelector('#test');
let exit=document.querySelector('#exit')

console.log(exit)
regi.addEventListener("click",register)
panel.addEventListener('click',opnpanel)
exit.addEventListener('click',exit_panel)

function register(){
   frm_login.style.display="none"
   frm_regi.style.display="block"

}
function opnpanel(){
window.open('panel.html')
}

function exit_panel(){
   // window.close('panel.html')
   window.open('home.html')

}