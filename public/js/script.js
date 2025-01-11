window.addEventListener("scroll", () => {
    const header = document.getElementsByTagName("header")[0];

    if (window.scrollY > 20) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

const displayMessage = document.getElementById("message");

const getQueryParams = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const tag = getQueryParams("tag");

if (tag) {
    document.querySelectorAll("div[skills]").forEach(item => {
        const tags = item.getAttribute("skills").split(",");

        if (tags.includes(tag)) {
            item.style.display = "block"; 
        } else {
            item.style.display = "none"; 
        }
    });
    displayMessage.innerHTML = `Displaying projects that contain "${tag}". <br> 
    <a href="/projects" class="return" style="text-decoration: underline;">Return to all projects</a>.`;
} else {
    document.querySelectorAll("div[skills]").forEach(item => {
        item.style.display = "block";
    });
    displayMessage.innerHTML = `Browse all projects or filter by skills!`;
}

const backToTopButton = document.getElementById("top");

function backToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}