const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const cardWidth = 348;

/* ===========================
GENERATE UPCOMING EVENTS
=========================== */

upcomingEvents.forEach(event => {


const card = document.createElement("div");

card.classList.add("event-card");

card.innerHTML = `
    <img src="${event.image}" alt="${event.alt}">

    <div class="event-info">

        <h4>${event.title}</h4>

        <div class="event-meta">
            <p>📅 ${event.date}</p>
            <p>🕒 ${event.time}</p>
            <p>📍 ${event.location}</p>
        </div>

        <p class="description">
            ${event.description}
        </p>

    </div>
`;

track.appendChild(card);


});

/* Get cards AFTER generating them */

const cards = document.querySelectorAll(".event-card");

/* ===========================
NEXT BUTTON
=========================== */

nextBtn.addEventListener("click", () => {


if (index < cards.length - 3) {

    index++;

    track.style.transform =
        `translateX(-${index * cardWidth}px)`;

}


});

/* ===========================
PREVIOUS BUTTON
=========================== */

prevBtn.addEventListener("click", () => {


if (index > 0) {

    index--;

    track.style.transform =
        `translateX(-${index * cardWidth}px)`;

}


});
