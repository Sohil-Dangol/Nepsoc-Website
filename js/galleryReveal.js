const galleryRevealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Only reveal once
                galleryRevealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.05
    }
);