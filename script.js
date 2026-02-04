const navItems = document.querySelectorAll(".nav-links li");
const sections = document.querySelectorAll(".section");

navItems.forEach(item => {
  item.addEventListener("click", () => {

    // Remove active from nav
    navItems.forEach(nav => nav.classList.remove("active"));
    item.classList.add("active");

    // Hide all sections
    sections.forEach(sec => sec.classList.remove("active"));

    // Show selected section
    const sectionId = item.getAttribute("data-section");
    document.getElementById(sectionId).classList.add("active");
  });
});
