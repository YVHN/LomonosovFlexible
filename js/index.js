anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  });
});
