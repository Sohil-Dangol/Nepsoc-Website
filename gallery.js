const events = [

    {
        title: "Momo Lisa Cafe Games Night",
        date: "15/05/2026",

        photos: [
            { image: "gallery/2627/cafe/1.jpg", size: "medium" },
            { image: "gallery/2627/cafe/2.jpg", size: "tall" },
            { image: "gallery/2627/cafe/3.jpg", size: "small" },
            { image: "gallery/2627/cafe/4.jpg", size: "medium" },
            { image: "gallery/2627/cafe/5.jpg", size: "tall" },
            { image: "gallery/2627/cafe/6.jpg", size: "medium" }
        ]
    },
    {
        title: "Elections",
        date: "16/03/2026",

        photos: [
            { image: "gallery/2627/elections/1.jpeg", size: "tall" }
        ]
    },
    {
        title: "Bar Crawl",
        date: "30/01/2026",

        photos: [
            { image: "gallery/2526/crawl-march/1.jpg", size: "tall" },
            { image: "gallery/2526/crawl-march/2.jpg", size: "medium" }
        ]
    },
    {
        title: "Exec Photoshoot",
        date: "28/01/2026",

        photos: [
            { image: "gallery/2526/exec-photoshoot/1.jpg", size: "medium" }
        ]
    },

    {
        title: "Midlands Ice Skating",
        date: "10/12/2025",

        photos: [
            { image: "gallery/2526/ice-skating/1.jpg", size: "small" }
        ]
    },

    {
        title: "Christmas Market",
        date: "10/01/2025",

        photos: [
            { image: "gallery/2526/christmas-market/1.jpg", size: "tall" },
            { image: "gallery/2526/christmas-market/2.jpg", size: "medium" },
            { image: "gallery/2526/christmas-market/3.jpg", size: "medium" },
            { image: "gallery/2526/christmas-market/4.jpg", size: "tall" },
            { image: "gallery/2526/christmas-market/5.jpg", size: "tall" },
            { image: "gallery/2526/christmas-market/6.jpg", size: "medium" },
            { image: "gallery/2526/christmas-market/7.jpg", size: "medium" }
        ]
    },

    {
        title: "Charity Fundraiser",
        date: "05/06/2026",

        photos: [
            { image: "gallery/2627/charity/1.jpg", size: "small" }
        ]
    },

    {
        title: "Holi Festival",
        date: "10/06/2026",

        photos: [
            { image: "gallery/2627/holi/1.jpg", size: "tall" }
        ]
    },

    {
        title: "Cultural Showcase",
        date: "15/06/2026",

        photos: [
            { image: "gallery/2627/culture/1.jpg", size: "medium" }
        ]
    },

    {
        title: "Movie Night",
        date: "20/06/2026",

        photos: [
            { image: "gallery/2627/movie/1.jpg", size: "small" }
        ]
    }

];

const photos = events.flatMap(event =>
    event.photos.map(photo => ({
        image: photo.image,
        title: event.title,
        description: event.date,
        size: photo.size
    }))
);

const gallery = document.getElementById("gallery");
const seeMoreButton = document.getElementById("see-more");

const photosPerLoad = 20;
let currentIndex = 0;


function loadPhotos() {

    const nextIndex = Math.min(
        currentIndex + photosPerLoad,
        photos.length
    );

    for (let i = currentIndex; i < nextIndex; i++) {

        const photo = photos[i];

        const item = document.createElement("div");

        item.className = `item ${photo.size}`;

        item.style.animationDelay =
            `${(i - currentIndex) * 0.03}s`;

        item.innerHTML = `
            <img 
                src="${photo.image}" 
                alt="${photo.title}" 
                loading="lazy"
            >

            <div class="overlay">
                <h3>${photo.title}</h3>
                <p>${photo.description}</p>
            </div>
        `;

        item.addEventListener("mouseenter", () => {
            expandColumn(item);
        });

        item.addEventListener("mouseleave", resetColumns);

        gallery.appendChild(item);
    }

    currentIndex = nextIndex;

    if (currentIndex >= photos.length) {
        seeMoreButton.style.display = "none";
    }
}

// ---- Hover expand: widen hovered column, shrink the rest ----

function getColumnCount() {
    const w = window.innerWidth;
    if (w <= 400) return 1;
    if (w <= 600) return 2;
    if (w <= 900) return 3;
    return 4;
}

let galleryCols = getColumnCount();

function expandColumn(item) {
    if (galleryCols <= 1) return;

    const galleryRect = gallery.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const colWidth = galleryRect.width / galleryCols;

    const colIndex = Math.min(
        galleryCols - 1,
        Math.floor((itemRect.left - galleryRect.left) / colWidth)
    );

    const EXPAND = 2.2;

    const tracks = Array.from({ length: galleryCols }, (_, i) =>
        i === colIndex ? `${EXPAND}fr` : "1fr"
    );

    gallery.style.gridTemplateColumns = tracks.join(" ");
    gallery.style.gridAutoRows = "180px"; // slight vertical growth, tweak to taste
}

function resetColumns() {
    gallery.style.gridTemplateColumns = `repeat(${galleryCols}, 1fr)`;
    gallery.style.gridAutoRows = "180px";
}

window.addEventListener("resize", () => {
    galleryCols = getColumnCount();
    resetColumns();
});

resetColumns();



// Load first 20 photos
loadPhotos();


// Load another 20 when "See More" is clicked
seeMoreButton.addEventListener("click", loadPhotos);