const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }

        });
    },
    {
        threshold: 0.05
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});