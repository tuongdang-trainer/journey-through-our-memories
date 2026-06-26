import "./style.css";

document.querySelector("#app").innerHTML = `
<section class="hero">

    <div class="hero-content">

        <p class="book-icon">📖</p>

        <h1 class="title">
            A Journey<br>
            Through<br>
            Our Memories
        </h1>

        <p class="subtitle">
            Every friendship has a story.
            Ours deserves its own book.
        </p>

        <div class="countdown-area">

            <p class="label">
                THE NEXT CHAPTER BEGINS IN
            </p>

            <h2 id="countdown">
                00d 00h 00m 00s
            </h2>

        </div>

        <p class="hint">
            The story hasn't started yet.
        </p>

    </div>

</section>

<section class="next-page">

    <div class="page-placeholder">

        <span>PAGE I</span>

        <h2>Coming Soon...</h2>

        <p>
            This is where our story will begin.
        </p>

    </div>

</section>
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