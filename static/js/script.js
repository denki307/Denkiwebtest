// =======================
// Live Status Check
// =======================
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


// =======================
// Register
// =======================
function register() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(() => alert("Register failed"));
}


// =======================
// Login
// =======================
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);

        // save token
        if (data.token) {
            localStorage.setItem("token", data.token);
        }
    })
    .catch(() => alert("Login failed"));
}


// =======================
// Admin Post System
// =======================
function adminPost() {
    const content = document.getElementById("postContent").value;
    const token = localStorage.getItem("token");

    fetch("/admin/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({ content })
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(() => alert("Post failed"));
}


// =======================
// Logout
// =======================
function logout() {
    localStorage.removeItem("token");
    alert("Logged out");
}
