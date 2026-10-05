const themeBtn = document.getElementById("themeBtn");
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");


// DARK MODE

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";
    }

});


// SEARCH

search.addEventListener("input", () => {

    const value = search.value.toLowerCase().trim();

    let visible = 0;

    cards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "";
            visible++;
        } else {
            card.style.display = "none";
        }

    });

    noResults.style.display = visible === 0 ? "block" : "none";

});
