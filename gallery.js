const photos = [
    {
        image: "images/event1.jpg",
        title: "Welcome Social 2026",
        description: "Our first event of the academic year.",
        size: "medium"
    },
    {
        image: "images/event2.jpg",
        title: "Freshers Fair",
        description: "Meeting new students and showcasing NepSoc.",
        size: "tall"
    },
    {
        image: "images/event3.jpg",
        title: "Games Night",
        description: "An evening of board games, cards and laughter.",
        size: "small"
    },
    {
        image: "images/event4.jpg",
        title: "Dashain Celebration",
        description: "Celebrating Dashain with traditional food and tika.",
        size: "medium"
    },
    {
        image: "images/event5.jpg",
        title: "Tihar Night",
        description: "Music, lights and cultural performances.",
        size: "tall"
    },
    {
        image: "images/event6.jpg",
        title: "Football Tournament",
        description: "Warwick NepSoc taking on rival universities.",
        size: "medium"
    },
    {
        image: "images/event7.jpg",
        title: "Basketball Match",
        description: "A competitive afternoon on the court.",
        size: "small"
    },
    {
        image: "images/event8.jpg",
        title: "Badminton Tournament",
        description: "Players competing for the NepSoc title.",
        size: "tall"
    },
    {
        image: "images/event9.jpg",
        title: "Committee Dinner",
        description: "Celebrating a successful term together.",
        size: "medium"
    },
    {
        image: "images/event10.jpg",
        title: "Charity Fundraiser",
        description: "Raising money for a meaningful cause.",
        size: "small"
    },
    {
        image: "images/event11.jpg",
        title: "Holi Festival",
        description: "A colourful day full of fun and celebration.",
        size: "tall"
    },
    {
        image: "images/event12.jpg",
        title: "Cultural Showcase",
        description: "Traditional dances and performances on stage.",
        size: "medium"
    },
    {
        image: "images/event13.jpg",
        title: "Movie Night",
        description: "Watching a Nepali classic with society members.",
        size: "small"
    },
    {
        image: "images/event14.jpg",
        title: "BBQ Social",
        description: "Relaxing outdoors with great food and friends.",
        size: "medium"
    },
    {
        image: "images/event15.jpg",
        title: "Committee Photoshoot",
        description: "Capturing memories with the 2026 committee.",
        size: "tall"
    },
    {
        image: "images/event16.jpg",
        title: "End of Year Ball",
        description: "Celebrating an unforgettable year together.",
        size: "medium"
    },
    {
        image: "images/event17.jpg",
        title: "NepSoc Social",
        description: "A fun evening with NepSoc members.",
        size: "medium"
    },
    {
        image: "images/event18.jpg",
        title: "Nepali Food Night",
        description: "Enjoying traditional Nepali food together.",
        size: "tall"
    },
    {
        image: "images/event19.jpg",
        title: "Sports Day",
        description: "A day of friendly competition.",
        size: "small"
    },
    {
        image: "images/event20.jpg",
        title: "Karaoke Night",
        description: "Singing, laughing and making memories.",
        size: "medium"
    },
    {
        image: "images/event21.jpg",
        title: "Nepali Culture Night",
        description: "Celebrating Nepali culture and traditions.",
        size: "tall"
    },
    {
        image: "images/event22.jpg",
        title: "Day Trip",
        description: "Exploring somewhere new together.",
        size: "medium"
    },
    {
        image: "images/event23.jpg",
        title: "Study Social",
        description: "Taking a break from studying with friends.",
        size: "small"
    },
    {
        image: "images/event24.jpg",
        title: "Christmas Social",
        description: "Celebrating together before the holidays.",
        size: "tall"
    },
    {
        image: "images/event25.jpg",
        title: "Winter Social",
        description: "A relaxed evening with society members.",
        size: "medium"
    },
    {
        image: "images/event26.jpg",
        title: "NepSoc Dinner",
        description: "Good food and good company.",
        size: "small"
    },
    {
        image: "images/event27.jpg",
        title: "Charity Event",
        description: "Coming together to support a good cause.",
        size: "tall"
    },
    {
        image: "images/event28.jpg",
        title: "Football Social",
        description: "A competitive day on the pitch.",
        size: "medium"
    },
    {
        image: "images/event29.jpg",
        title: "Bowling Night",
        description: "An evening of bowling and friendly competition.",
        size: "small"
    },
    {
        image: "images/event30.jpg",
        title: "Spring Social",
        description: "Enjoying the warmer weather together.",
        size: "medium"
    },
    {
        image: "images/event31.jpg",
        title: "Nepali New Year",
        description: "Celebrating Nepali New Year together.",
        size: "tall"
    },
    {
        image: "images/event32.jpg",
        title: "End of Term Social",
        description: "Finishing the term with the society.",
        size: "medium"
    },
    {
        image: "images/event33.jpg",
        title: "Committee Meeting",
        description: "Planning another successful year for NepSoc.",
        size: "small"
    },
    {
        image: "images/event34.jpg",
        title: "Picnic",
        description: "A relaxing afternoon outdoors.",
        size: "tall"
    },
    {
        image: "images/event35.jpg",
        title: "Games Tournament",
        description: "Members competing in a range of games.",
        size: "medium"
    },
    {
        image: "images/event36.jpg",
        title: "Farewell Social",
        description: "Saying goodbye to another great year.",
        size: "tall"
    }
];

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

        // Stagger the animation slightly
        item.style.animationDelay = `${(i - currentIndex) * 0.03}s`;

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

        gallery.appendChild(item);
    }


    currentIndex = nextIndex;


    // Hide button when all photos have been loaded
    if (currentIndex >= photos.length) {
        seeMoreButton.style.display = "none";
    }
}


// Load first 20 photos
loadPhotos();


// Load another 20 when "See More" is clicked
seeMoreButton.addEventListener("click", loadPhotos);