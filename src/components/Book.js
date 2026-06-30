export function renderBook() {

    return `

<section class="book-section">

    <div class="book-start">

        <button id="openBook" class="open-book-btn">
            📖 Open Our Story
        </button>

        <div id="bookApp" class="book-app" style="display:none;">

            <article class="book-card">

                <!-- COVER -->

                <div id="coverPage">

                    <h1>
                        A Journey Through
                        <br>
                        Our Memories
                    </h1>

                    <h3>
                        Written for
                        <br>
                        My Best Friend
                    </h3>

                    <p>
                        July 1, 2026
                    </p>

                </div>

                <!-- CHAPTER -->

                <div id="chapterPage" style="display:none;">

                    <!-- Progress -->
                    <div id="book-progress"></div>

                    <!-- Page Number -->
                    <p id="book-page-number" class="book-page-number"></p>

                    <p
                        id="book-title"
                        class="book-title">
                    </p>

                    <h2
                        id="book-heading"
                        class="book-heading">
                    </h2>

                    <div class="book-image">

                        <img
                            id="book-image"
                            src=""
                            alt="">

                    </div>

                    <blockquote
                        id="book-quote"
                        class="book-quote">
                    </blockquote>

                    <p
                        id="book-text"
                        class="book-text">
                    </p>

                    <div class="book-nav">

                        <button id="prevBtn">
                            ← Previous
                        </button>

                        <button id="nextBtn">
                            Next →
                        </button>

                    </div>

                </div>

            </article>

        </div>

    </div>

</section>

`;

}