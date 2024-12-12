function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const hideNav = document.querySelector("nav");
  hideNav.classList.toggle("hide-nav");
}
