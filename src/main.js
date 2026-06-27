import { Hero } from "./components/Hero";
import { pages } from "./sections/book.js";
import "./style.css";
document.querySelector("#app").innerHTML = `
    ${Hero()}

    <div class="open-book">

        <button id="openBook">

            Open Our Story

        </button>

    </div>

    <div id="bookApp"></div>
`;

const birthday = new Date("2026-07-01T00:00:00");

function updateCountdown() {

    const now = new Date();

    const distance = birthday - now;

    const countdown = document.getElementById("countdown");

    if (distance <= 0) {

        countdown.innerHTML = "🎉 HAPPY BIRTHDAY 🎉";

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

    countdown.innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

updateCountdown();

setInterval(updateCountdown,1000);
// ==========================
// BOOK ENGINE
// ==========================

let currentPage = 0;

function renderPage() {

    const page = pages[currentPage];

    document.getElementById("book-title").textContent = page.title;

    document.getElementById("book-heading").textContent = page.heading;

    document.getElementById("book-text").textContent = page.text;

}