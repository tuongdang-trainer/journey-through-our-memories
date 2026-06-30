export function renderProgress(current, total) {

    let dots = "";

    for (let i = 0; i < total; i++) {

        dots += `
            <span class="${
                i === current
                    ? "progress-dot active"
                    : "progress-dot"
            }"></span>
        `;

    }

    return `
        <div class="progress">

            ${dots}

        </div>
    `;

}