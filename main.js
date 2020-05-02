/*Top part*/
let changer = 0;
let screenWidth1 = window.matchMedia("(max-width: 500px");
let screenWidth2 = window.matchMedia("(max-width: 768px");
let clothes = document.querySelector(".clothes");
let head = document.querySelector(".heading");
let subhead = document.querySelector(".subheading");
const imgStyle = document.getElementById("imgStyle");
const back = document.querySelector(".background");
const img = ["alyssa.jpg", "clark.jpg", "kai.jpg"];
const text1 = ["HOME", "SHOPPING", "WAREDROBE"];
const text2 = ["Stay comfortable", "Never give up", "Choose your style"];


const topSection = () =>{
    clothes.src = img[changer];
    if(screenWidth1.matches){
        imgStyle.style.height = "220px"; 
        }else if(screenWidth2.matches){
            imgStyle.style.height = "420px"; 
            }else
        {
        imgStyle.style.height = "650px"};
   
    head.innerHTML = text1[changer];
    subhead.innerHTML = text2[changer];
    changer++;

 if(changer>2){
    changer =0;
}

}
setInterval(topSection, 3000)

/*Menu*/
const burger = document.querySelector(".menu__burger");
const burger_on = document.querySelector(".fa-bars");
const burger_off = document.querySelector(".fa-times");
const menu_bar = document.querySelector(".menu__bar");

const show_menu = function(){
// console.log('ok')
burger_on.classList.toggle("burger__active");
burger_off.classList.toggle("burger__active");
menu_bar.classList.toggle("menu__bar--on");

}

burger.addEventListener("click", show_menu)