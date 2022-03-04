const search = document.getElementsByClassName("search_input")[0];
const form = document.getElementsByClassName("form")[0];
//let url = ;
let main = document.getElementById("main");
const body = document.getElementsByTagName("body")[0];
const button = document.getElementById("search_button");
const input = document.getElementById("search_input");
const reset=document.getElementsByClassName("reset")[0];
const hamburger=document.getElementById("hamburger");
const ad1=document.getElementById("additional_one");
const ad2=document.getElementById("additional_two");
const menu=document.getElementById("menu");
let isOpen=false;
document.addEventListener('keypress', (event)=>{
    if(event.code=='Enter' && input.value) {
        button.click();
    }
})
reset.addEventListener("click",()=>{
    input.value="";
    reset.classList.remove("reset_on");
})
search.addEventListener("input",()=>{
    if(input.value) reset.classList.add("reset_on");
    else reset.classList.remove("reset_on");
})
search.addEventListener("focusin", () => {
    form.classList.toggle("form_shadow");
})
search.addEventListener("focusout", () => {
    form.classList.toggle("form_shadow");
})
hamburger.addEventListener("click",()=>{
    if (isOpen){
        isOpen=false;
        ad1.classList.remove("additional_one_move");
        ad2.classList.remove("additional_two_move");
        main.classList.remove("smaller_main");
        menu.classList.remove("side_menu_open");
    }
    else {
        isOpen=true;
        ad1.classList.add("additional_one_move");
        ad2.classList.add("additional_two_move");
        main.classList.add("smaller_main");
        menu.classList.add("side_menu_open");
    }

})