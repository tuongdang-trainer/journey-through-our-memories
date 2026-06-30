export function renderCover(page) {

    return `

        <div class="cover-page">

            <h1>

                ${page.title}

            </h1>

            <h3>

                ${page.subtitle.replace(/\n/g,"<br>")}

            </h3>

            <p>

                ${page.date}

            </p>

            <button
                id="startReading"
                class="open-book-btn">

                Begin Reading →

            </button>

        </div>

    `;

}
