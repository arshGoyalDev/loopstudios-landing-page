let menu = document.getElementById("ham");
let navbar = document.getElementById("nav");

menu.addEventListener("click", openFun);

function openFun(){
  navbar.classList.add("mobile-menu");
  document.body.classList.add("scroll-hidden")
}

cross.addEventListener("click", closeFun);
function closeFun(){
  navbar.classList.remove("mobile-menu");
  document.body.classList.remove("scroll-hidden")
}