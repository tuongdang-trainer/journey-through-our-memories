import "./styles/style.css";

import { Hero } from "./components/Hero.js";
import { renderBook } from "./components/Book.js";
import { renderProgress } from "./components/Progress.js";
import { pages } from "./sections/book.js";

// ==========================
// RENDER APP
// ==========================

document.querySelector("#app").innerHTML = `
    ${Hero()}
    ${renderBook()}
`;

// ==========================
// COUNTDOWN
// ==========================

const birthday = new Date("2026-07-01T00:00:00");

function updateCountdown() {
    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    const now = new Date();
    const distance = birthday - now;

    if (distance <= 0) {
        countdown.textContent = "🎉 HAPPY BIRTHDAY 🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    countdown.textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================
// BOOK ENGINE
// ==========================

let currentPage = 0;

function renderPage() {

    const page = pages[currentPage];

    const cover = document.getElementById("coverPage");
    const chapter = document.getElementById("chapterPage");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // ---------- COVER ----------

    if (page.cover) {

        cover.style.display = "block";
        chapter.style.display = "none";

        cover.innerHTML = `
            <h1>${page.title}</h1>

            <h3>${page.subtitle.replace(/\n/g, "<br>")}</h3>

            <p>${page.date}</p>

            <button
                id="startReading"
                class="open-book-btn"
                style="margin-top:60px;"
            >
                Begin Reading →
            </button>
        `;

        return;
    }

    // ---------- CHAPTER ----------

    cover.style.display = "none";
    chapter.style.display = "block";

    document.getElementById("book-progress").innerHTML =
        renderProgress(currentPage - 1, pages.length - 1);

    document.getElementById("book-page-number").textContent =
        `Page ${currentPage} of ${pages.length - 1}`;

    document.getElementById("book-title").textContent =
        page.title;

    document.getElementById("book-heading").textContent =
        page.heading;

    document.getElementById("book-quote").textContent =
        page.quote;

    document.getElementById("book-text").textContent =
        page.text;

    const image = document.getElementById("book-image");

    image.src = page.images[0];
    image.alt = page.heading;

    prevBtn.style.visibility =
        currentPage === 1 ? "hidden" : "visible";

    nextBtn.style.visibility =
        currentPage === pages.length - 1
            ? "hidden"
            : "visible";
}

// ==========================
// OPEN BOOK
// ==========================

const openBook = document.getElementById("openBook");

if (openBook) {
    openBook.addEventListener("click", () => {

        openBook.style.display = "none";

        document.getElementById("bookApp").style.display = "flex";

        currentPage = 0;

        renderPage();
    });
}

// ==========================
// NAVIGATION
// ==========================

document.addEventListener("click", (e) => {
    console.log("Clicked:", e.target.id);

    if (e.target.id === "startReading") {
        currentPage = 1;
        renderPage();
    }

    if (e.target.id === "nextBtn") {

        if (currentPage < pages.length - 1) {
            currentPage++;
            renderPage();
        }

    }

    if (e.target.id === "prevBtn") {

        if (currentPage > 1) {
            currentPage--;
            renderPage();
        }

    }

});