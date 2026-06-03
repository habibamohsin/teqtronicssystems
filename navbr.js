const menu = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");
const toggleBtn = document.getElementById("menuToggle");

function toggleMenu() {
  menu.classList.toggle("active");
  overlay.style.display = menu.classList.contains("active") ? "block" : "none";
  toggleBtn.textContent = menu.classList.contains("active") ? "×" : "☰";
  document.body.style.overflow = menu.classList.contains("active")
    ? "hidden"
    : "";
}

function closeMenu() {
  menu.classList.remove("active");
  overlay.style.display = "none";
  toggleBtn.textContent = "☰";
  document.body.style.overflow = "";
}

toggleBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Add shadow on scroll
window.addEventListener("scroll", () => {
  const navbarBottom = document.querySelector(".navbar-bottom");
  // navbarBottom.style.boxShadow = window.scrollY > 10
  //   ? '0 4px 12px rgba(0, 0, 0, 0.15)'
  //   : 'none';
});
