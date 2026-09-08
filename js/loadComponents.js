async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

loadComponent("navbar", "/html/navbar.html");
loadComponent("footer", "/html/footer.html");