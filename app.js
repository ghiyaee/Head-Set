let btn=document.querySelector('#btn');
let slides=[...document.querySelector('.sliders').children];
let span_r=document.querySelector('#span-right');
let span_l=document.querySelector('#span-left');
let scorll=[...document.querySelector('.scrollbar').children];
let timer=180000;
let position=0;
console.log(scorll)
btn=document.addEventListener("click",slider_manual);
span_r.addEventListener('click',span_right);
span_l.addEventListener('click',span_left);

function slider_manual(index){
    slides.forEach((list) =>{
     list.classList.remove('active')
        if(index.target.id == 'one'){
              slides[0].classList.add("active")
          }
        if(index.target.id == 'two'){
            slides[1].classList.add("active")
        }
        if(index.target.id == 'three'){
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

function span_right(){
    position++;
    for(let i of scorll) {
        if(position==0){i.style.left="0px"};
        if(position==1){i.style.left="740px"};
        if(position==2){i.style.left="1480px"};
        if(position==3){i.style.left="2220px"};
        if(position==4){i.style.left="2960px"};
        if(position==5){i.style.left="3700px"};
        if(position > 5){position=5}
    }
  console.log('slam')
}


function span_left(){
    position--;
    for(let i of scorll){
        if(position==0){i.style.left="0px"};
        if(position==1){i.style.left="740px"};
        if(position==2){i.style.left="1480px"};
        if(position==3){i.style.left="2220px"};
        if(position<0){position=0}
    }

}


  