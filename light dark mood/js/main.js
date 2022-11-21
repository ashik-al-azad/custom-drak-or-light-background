const btn = document.querySelector(".btn-toggle");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("dd").src = "img/sun.png";
} else {
    document.getElementById("dd").src = "img/moon.png";
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    document.getElementById("dd").src = "img/moon.png";
    let theme = "light";

    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
        document.getElementById("dd").src = "img/sun.png";
    }
    localStorage.setItem("theme", theme);
});