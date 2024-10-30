function toggleSideMenu() {
  const menu = document.getElementById("side-menu");
  menu.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const menu = document.getElementById("side-menu");
  const menuIcon = document.querySelector(".menu-icon i");

  if (
    menu.classList.contains("active") &&
    !menu.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    menu.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;
  const menuLinks = document.querySelectorAll(".konten .menu a");

  menuLinks.forEach((link) => {
    if (currentPage.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;
  const menuLinks = document.querySelectorAll(".konten-now-playing .menu a");

  menuLinks.forEach((link) => {
    if (currentPage.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
