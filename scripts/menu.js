document.addEventListener("DOMContentLoaded", () => {
  const menuEl = document.querySelector(".header__menu");
  const menuTogglerEl = document.querySelector("#menuToggler");

  const links = menuEl.querySelectorAll(".menu__link");

  menuTogglerEl.addEventListener("click", () => {
    menuEl.classList.toggle("menu--active");
    document.body.classList.toggle("no-scroll");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("no-scroll");
      menuEl.classList.remove("menu--active");
    });
  });
});
