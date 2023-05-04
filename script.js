const transitionButtonTag=document.querySelector(".transitionButton");
const transitionDivTag=document.querySelector(".transitionDiv")

transitionButtonTag.addEventListener("click", ()=>{
    transitionDivTag.classList.add("startTransition")
    
})