var link = document.querySelector(".contacts-map-button");
var popap = document.querySelector(".footer-modal");
var close = document.querySelector(".modal-close");
var login = popap.querySelector("[name=login]");
var email = popap.querySelector("[name=e-mail]");
var form = popap.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.add("modal-show");
  login.focus();
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.remove("modal-show");
});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("login.value");
  console.log("e-mail.value");
});





let input = document.querySelector('input[type="email"]');

input.addEventListener('input', function() {
    if (!this.validity.valid && document.activeElement === this) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});