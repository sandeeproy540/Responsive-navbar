const navbar= document.getElementById("navbar");
const btn = document.querySelector('.navbar-toggle');

btn.addEventListener("click", function() {
  navbar.classList.toggle('opened');
})