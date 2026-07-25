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
    }
];

const gallery = document.getElementById("gallery");

photos.forEach(photo => {

    const item = document.createElement("div");
    item.className = `item ${photo.size}`;

    item.innerHTML = `
        <img src="${photo.image}" alt="${photo.title}">

        <div class="overlay">
            <h3>${photo.title}</h3>
            <p>${photo.description}</p>
        </div>
    `;

    gallery.appendChild(item);

});