console.log("Hello, here is a website");

// Scroll animation for project images
const section = document.querySelector(".image-wrap");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    section.classList.add("animate");
  }
});

observer.observe(section);
