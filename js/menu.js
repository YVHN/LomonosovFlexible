const menuEl = document.querySelector(".header__menu");
const menuTogglerEl = document.querySelector("#menuToggler");

menuTogglerEl.addEventListener("click", () => {
  menuEl.classList.toggle("menu--active");
  document.body.classList.toggle("no-scroll");
});
