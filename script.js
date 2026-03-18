// Scroll animation for project images
const section = document.querySelector(".overlappingImages");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    section.classList.add("animate");
  }
});

observer.observe(section);

// Get the element by its ID and set its text content to the current year
document.getElementById("currentYear").textContent = new Date().getFullYear();
