// Live Status Check
fetch("/status")
.then(res => res.json())
.then(data => {
    const dot = document.getElementById("statusDot");
    const text = document.getElementById("statusText");

    if (data.status === "online") {
        dot.style.background = "#00ffaa";
        text.innerText = "Online";
    } else {
        dot.style.background = "red";
        text.innerText = "Offline";
    }
})
.catch(() => {
    document.getElementById("statusText").innerText = "Unknown";
});
