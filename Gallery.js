export function renderGallery(images = []) {

    return `

        <div class="gallery">

            ${images.map((image, index) => `

                <div class="gallery-item gallery-${index + 1}">

                    <img
                        src="${image}"
                        alt="Memory ${index + 1}"
                    >

                </div>

            `).join("")}

        </div>

    `;

}