const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuPrincipal");

const overlay = document.createElement("div");
overlay.className = "menu-overlay";
document.body.appendChild(overlay);

const closeMenu = () => {
  menu.classList.remove("open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
};

const openMenu = () => {
  menu.classList.add("open");
  menuToggle.classList.add("active");
  menuToggle.setAttribute("aria-expanded", "true");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
};

menuToggle.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    closeMenu();
    return;
  }
  openMenu();
});

overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("open")) {
    closeMenu();
  }
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  const clickedInsideMenu = menu.contains(event.target);
  const clickedToggle = menuToggle.contains(event.target);
  if (!clickedInsideMenu && !clickedToggle && menu.classList.contains("open")) {
    closeMenu();
  }
});

document.querySelectorAll("[data-back-button]").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (window.history.length > 1) {
      event.preventDefault();
      window.history.back();
    }
  });
});
