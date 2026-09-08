const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const toggleButton = document.getElementById("toggle-events");
const carousel = document.querySelector(".carousel");
const carouselControls = document.querySelector(".carousel-controls");

let index = 0;

const cardWidth = 348;


/* ===========================
   GENERATE EVENT CARDS
=========================== */

pastEvents.forEach(event => {

    const card = document.createElement("article");

    card.classList.add("event-card");

    card.innerHTML = `
        <img src="${event.image}" alt="${event.title}">

        <div class="event-info">

            <h3>${event.title}</h3>

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

    if (carousel.classList.contains("expanded")) return;

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

    if (carousel.classList.contains("expanded")) return;

    if (index > 0) {

        index--;

        track.style.transform =
            `translateX(-${index * cardWidth}px)`;

    }

});


/* ===========================
   VIEW ALL EVENTS
=========================== */

toggleButton.addEventListener("click", () => {

    carousel.classList.toggle("expanded");

    const isExpanded =
        carousel.classList.contains("expanded");

    if (isExpanded) {

        toggleButton.textContent = "Show Less ↑";
        carouselControls.classList.add("hidden");

    } else {

        toggleButton.textContent = "View All Events →";
        carouselControls.classList.remove("hidden");

    }

    /* Reset carousel position */

    index = 0;

    track.style.transform = "translateX(0)";

});