window.addEventListener("scroll", () => {
    const header = document.getElementsByTagName("header")[0];

    if (window.scrollY > 20) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

const displayMessage = document.getElementById("message");

const getQueryParameter = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);

}

const tag = getQueryParameter("tag");

if (tag) {
    document.querySelectorAll("div[skills]").forEach(item => {
        const tags = item.getAttribute("skills").split(",");

        if (tags.includes(tag)) {
            item.style.display = "block"; 
        } else {
            item.style.display = "none"; 
        }
    });
    displayMessage.innerHTML = `Displaying projects that contain "${tag}". <a href="/projects">Browse all projects</a>.`;
} else {
    document.querySelectorAll("div[skills]").forEach(item => {
        item.style.display = "block";
    });
    displayMessage.textContent = `Displaying all projects.`;
}

const backToTopButton = document.getElementById("top");

function backToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}