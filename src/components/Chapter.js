import { renderGallery } from "./Gallery.js";

export function renderChapter(page) {

    return `

        <p class="book-title">

            ${page.title}

        </p>

        <h2 class="book-heading">

            ${page.heading}

        </h2>

        ${renderGallery(page.images)}

        <blockquote class="book-quote">

            ${page.quote}

        </blockquote>

        <p class="book-text">

            ${page.text}

        </p>

    `;

}