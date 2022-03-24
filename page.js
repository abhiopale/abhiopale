let home=document.querySelector(".H")
let home1=document.querySelector(".home")

let about=document.querySelector(".A")
let about1=document.querySelector(".about")

let contactMe=document.querySelector(".CM")
let contactMe1=document.querySelector(".contactMe")

let click=document.querySelector("#click")


home.addEventListener("click",function(){
    home1.classList.remove("on")
    about1.classList.remove("on")
    contactMe1.classList.remove("on")
    about.classList.remove("on")
    contactMe.classList.remove("on")
    home.classList.add("on")
    
})

about.addEventListener("click",function(){
    about1.classList.add("on")
    about.classList.add("on")
    home1.classList.add("on")
    contactMe1.classList.remove("on")
    contactMe.classList.remove("on")
    home.classList.remove("on")
})
contactMe.addEventListener("click",function(){
    contactMe1.classList.add("on")
    contactMe.classList.add("on")
    home1.classList.add("on")
    about1.classList.remove("on")
    about.classList.remove("on")
    home.classList.remove("on")
})




