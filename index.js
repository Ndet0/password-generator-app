let buttonup= document.getElementById("buttonUp");
let buttonin= document.getElementById("buttonIn");
let title= document.getElementById("title");
let namefield= document.getElementById("nameField");

buttonin.onclick= function(){
    namefield.parentElement.style.maxHeight="0px";
    title.innerHTML="Sign In";
    buttonin.classList.remove('disable');
    buttonup.classList.add('disable');
}
buttonup.onclick= function(){
    namefield.parentElement.style.maxHeight="65px";
    title.innerHTML="Create an account";
    buttonin.classList.add('disable');
    buttonup.classList.remove('disable');
}
