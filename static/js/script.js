// ===============================
// 🚀 Website Ready
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("Site Loaded 🔥");
  startTyping();
  createBackToTop();
  revealOnScroll();
});


// ===============================
// ✨ Smooth Scroll
// ===============================
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ===============================
// 🔥 Active Nav Highlight
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});


// ===============================
// 💬 Typing Effect
// ===============================
function startTyping() {
  const el = document.getElementById("typing");
  if (!el) return;

  const text = "Welcome to my website 🚀";
  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }

  el.innerHTML = "";
  type();
}


// ===============================
// 🌟 Reveal on Scroll
// ===============================
function revealOnScroll() {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
      }
    });
  });

  cards.forEach(card => {
    card.style.transform = "translateY(40px)";
    card.style.opacity = "0";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });
}


// ===============================
// 🍞 Toast Message
// ===============================
function showToast(msg) {
  const toast = document.createElement("div");
  toast.innerText = msg;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.background = "#ffd369";
  toast.style.color = "black";
  toast.style.padding = "12px 18px";
  toast.style.borderRadius = "8px";
  toast.style.fontWeight = "600";
  toast.style.zIndex = "999";
  toast.style.opacity = "0";
  toast.style.transition = "0.3s";

  document.body.appendChild(toast);

  setTimeout(() => toast.style.opacity = "1", 100);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}


// ===============================
// 🌊 Button Ripple
// ===============================
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const circle = document.createElement("span");
    const size = Math.max(btn.clientWidth, btn.clientHeight);

    circle.style.width = circle.style.height = size + "px";
    circle.style.left = e.offsetX - size / 2 + "px";
    circle.style.top = e.offsetY - size / 2 + "px";
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.background = "rgba(0,0,0,0.2)";
    circle.style.transform = "scale(0)";
    circle.style.animation = "ripple 0.6s linear";

    btn.style.position = "relative";
    btn.style.overflow = "hidden";

    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);

    showToast("Loading... 🚀");
  });
});


// ===============================
// ⬆️ Back To Top
// ===============================
function createBackToTop() {
  const btn = document.createElement("button");
  btn.innerText = "↑";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.left = "20px";
  btn.style.padding = "10px 15px";
  btn.style.borderRadius = "50%";
  btn.style.border = "none";
  btn.style.fontSize = "18px";
  btn.style.cursor = "pointer";
  btn.style.display = "none";
  btn.style.zIndex = "999";

  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
      }
