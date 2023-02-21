const btnBurger=document.getElementById('btn-burger');
const btnClose=document.getElementById('btn-close');
const menu=document.getElementById('nav__links');


btnClose.addEventListener("click",()=>{
    menu.style.display="none";
});

btnBurger.addEventListener("click",()=>{
    menu.style.display="block";
});