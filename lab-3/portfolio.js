// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Demo contact form
document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Form submitted (demo only for lab).");
});
