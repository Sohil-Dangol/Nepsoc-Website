const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".event-card");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

const cardWidth = 320;


nextBtn.addEventListener("click", () => {

    if (index < cards.length - 3) {

        index++;

        track.style.transform =
        `translateX(-${index * cardWidth}px)`;

    }

});


prevBtn.addEventListener("click", () => {

    if (index > 0) {

        index--;

        track.style.transform =
        `translateX(-${index * cardWidth}px)`;

    }

});