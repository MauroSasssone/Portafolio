

const typed = new Typed('.typed', {
    strings: ['<span class="front"> Front end developer </span> ',
],
    typeSpeed:75,
    startDelay:300,
    backSpeed: 75,
    shuffle:true,
    backDelay: 1500,
    loop:false,
    loopCount:false,
    shadowCursor:true,
    cursorChar:'|',
    contentType:'html',
})

function el_scroll(){
   scrolleo()
    scrolleo2()
}
let animacion = document.querySelectorAll(".cajas, .cajas3, #centro, .caja_grande, #caja_grande2")
let animation = document.querySelectorAll(".nav__items")

function scrolleo(){
    let scrollTop1 = document.documentElement.scrollTop
    for(i = 0; i < animacion.length; i++){
        let altura3 = animacion[i].offsetTop;
        if(altura3 - 600 < scrollTop1){
            animacion[i].style.opacity = 1
        }
    }
}
function scrolleo2(){
    let scrollLeft = document.documentElement.scrollTop
    for(i = 0; i < animation.length; i++){
        let altura = animation[0].offsetLeft;
        if(altura  -200 > scrollLeft){
            animation[0].style.color = 'rgb(49, 226, 185)'
            animation[1].style.color = 'white'
            
        }else if(altura  +90 >  scrollLeft){
                animation[0].style.color = 'white'
                animation[1].style.color = 'rgb(49, 226, 185)'
                animation[2].style.color = 'white'
            
        }else if(altura +1200 < scrollLeft){ 
             animation[1].style.color = 'white'
             animation[2].style.color = 'rgb(49, 226, 185)'

             }
    }
    
}window.addEventListener('scroll', el_scroll)




