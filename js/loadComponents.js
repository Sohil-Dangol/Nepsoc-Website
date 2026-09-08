async function loadComponent(id, file, root) {
    try {
        const response = await fetch(root + file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}: ${response.status}`);
        }

        let html = await response.text();

        // Replace {{ROOT}} with the actual website root
        html = html.replaceAll("{{ROOT}}", root);

        const element = document.getElementById(id);

        if (!element) {
            throw new Error(`Element #${id} not found`);
        }

        element.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}


// Find the root of the website from this script's location
const script = document.currentScript;
const root = new URL("../", script.src).href;


// Load shared components
loadComponent("navbar", "html/navbar.html", root);
loadComponent("footer", "html/footer.html", root);