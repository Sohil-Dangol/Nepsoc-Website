// ===========================
// SUPABASE CONNECTION
// ===========================

const supabaseUrl = "https://gcsnqnxhyibertmavsth.supabase.co";
const supabaseKey = "sb_publishable_YONRnW5HoGWC2Li-WvZsOA_L48CpjLd";

const supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);


// ===========================
// HEART
// ===========================

const heartCount = document.getElementById("heart-count");
const heartButton = document.getElementById("heart-button");

if (heartCount && heartButton) {

    const hasLiked = localStorage.getItem("nepsoc-heart");

    if (hasLiked) {
        heartButton.disabled = true;
    }

    async function loadHeartCount() {

        const { data, error } = await supabaseClient
            .from("site_stats")
            .select("heart_count")
            .eq("id", 1)
            .single();

        if (error) {
            console.error(error);
            return;
        }

        heartCount.textContent = data.heart_count.toLocaleString();
    }

    loadHeartCount();

    heartButton.addEventListener("click", async () => {

        const { data, error } = await supabaseClient
            .rpc("increment_heart");

        if (error) {
            console.error(error);
            return;
        }

        heartCount.textContent = data.toLocaleString();

        localStorage.setItem("nepsoc-heart", "true");

        heartButton.disabled = true;

        heartButton.classList.remove("liked");
        void heartButton.offsetWidth;
        heartButton.classList.add("liked");
    });
}



// ===========================
// NEWSLETTER
// ===========================

const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
const newsletterMessage = document.getElementById("newsletter-message");

if (newsletterForm && newsletterEmail && newsletterMessage) {

    newsletterForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = newsletterEmail.value.trim().toLowerCase();

        newsletterMessage.textContent = "Subscribing...";

        const { error } = await supabaseClient
            .from("subscribers")
            .insert({
                email: email
            });

        console.log("Email:", email);
        console.log("Error:", error);

        if (error) {

            console.error("NEWSLETTER ERROR:", error);

            if (error.code === "23505") {
                newsletterMessage.textContent =
                    "You're already subscribed!";
            } else {
                newsletterMessage.textContent =
                    "Something went wrong. Please try again.";
            }

            return;
        }

        newsletterMessage.textContent =
            "Thanks for subscribing! 🎉";

        newsletterForm.reset();
    });
}