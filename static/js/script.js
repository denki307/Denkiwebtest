// Page loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Loaded Successfully 🚀");
});


// Smooth scroll for anchor links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Button click effect
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });
});


// Simple welcome message
setTimeout(() => {
  alert("Welcome to my website 😎");
}, 1000);


// Typing effect
const text = "Welcome to my website";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}

// run typing if element exists
if (document.getElementById("typing")) {
  typing();
}
