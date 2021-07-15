let btn=document.querySelector('#btn');
let slides=[...document.querySelector('.sliders').children];

let timer=180000;
let position=0;

btn=document.addEventListener("click",slider_manual);

   
function slider_manual(index){
      slides.forEach((list) =>{
        // list.classList.remove('active')
        if(index.target.id == 'one'){
             list.classList.remove('active')
              slides[0].classList.add("active")
          }
        if(index.target.id == 'two'){
             list.classList.remove('active')
            slides[1].classList.add("active")
        }
        if(index.target.id == 'three'){
             list.classList.remove('active')
            slides[2].classList.add("active")
        }
})
};

let counter=0
function slider_auto(){
    if(counter < slides.length){
         slides.forEach((list) =>{
              list.classList.remove('active')
               slides[counter].classList.add("active") 
         })
              counter++ 
         } else{
              counter=0;
}

}
setInterval('slider_auto()',4000)


function settimer(){
    if(timer == 0)return;
    let hou=Math.floor(timer/3600);
    let min=Math.floor((timer%3600)/60);
    let sec=(timer%3600)%60;
    document.querySelector('#hor').innerHTML=hou
    document.querySelector('#min').innerHTML=min
    document.querySelector('#sec').innerHTML=sec
}
setInterval(()=>{
    timer -=1
   settimer()
},1000)





  