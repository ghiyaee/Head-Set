let btn=document.querySelector('#btn');
let slides=[...document.querySelector('.sliders').children];
btn=document.addEventListener("click",one);
function one(index){
    slides.forEach((list) =>{
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

let counter=1;
setInterval(() =>{
    counter += 1;
    if(counter == 4){
        counter=1
    }
    sliderA(counter),2000
})

function sliderA(index){
    for(let i=0; i <slides.length; i++){
       slides[i]
    }
    // console.log(slides[i])
//    slides.forEach((list) =>{
  
//    }) 
}

// sliderA(index);






// let slideIndex=1;
// function setSlide (input , index){
// slideIndex=index;
// let item=document.querySelector(`#${input}`);
// let slides=[...document.querySelector('.sliders').children];
// // console.log(slides)
// slides.forEach((element) => {
//     element.classList.remove('active');
// })
//    item.classList.add('active')
// }

  