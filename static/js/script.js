// Tab Switch
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

// Live Status Check
fetch("/status")
.then(res => res.json())
.then(data => {
    const dot = document.getElementById("statusDot");
    const text = document.getElementById("statusText");

    if (data.status === "online") {
        dot.style.background = "#00ff88";
        text.innerText = "Online";
    } else {
        dot.style.background = "red";
        text.innerText = "Offline";
    }
});
