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
// ELEMENTS
// ===========================

const heartCount = document.getElementById("heart-count");
const heartButton = document.getElementById("heart-button");

const hasLiked = localStorage.getItem("nepsoc-heart");

if (hasLiked) {
    heartButton.disabled = true;
}


// ===========================
// LOAD CURRENT COUNT
// ===========================

async function loadHeartCount() {

    const { data, error } = await supabaseClient
        .from("site_stats")
        .select("heart_count")
        .eq("id", 1)
        .single();

    if (error) {
        console.error("SUPABASE ERROR:", error);
        heartCount.textContent = "ERROR";
        return;
    }

    heartCount.textContent =
        data.heart_count.toLocaleString();
}

loadHeartCount();


// ===========================
// HEART BUTTON
// ===========================

heartButton.addEventListener("click", async () => {

    const { data, error } = await supabaseClient
        .rpc("increment_heart");

    if (error) {
        console.error("SUPABASE ERROR:", error);
        return;
    }

    heartCount.textContent = data.toLocaleString();

    localStorage.setItem("nepsoc-heart", "true");

    // Disable the button
    heartButton.disabled = true;

    heartButton.classList.remove("liked");

    // Restart animation
    void heartButton.offsetWidth;

    heartButton.classList.add("liked");
});