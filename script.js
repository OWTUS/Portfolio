// Optional JavaScript for Enhancements
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("header nav a");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });
});
