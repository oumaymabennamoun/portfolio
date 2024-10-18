window.addEventListener("scroll", () => {
    const header = document.getElementsByTagName("header")[0];

    if (window.scrollY > 20) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

const getQueryParameter = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);

}

const tag = getQueryParameter("tag");

if (tag) {
    document.querySelectorAll("div[filter-tags]").forEach(item => {
        const tags = item.getAttribute("filter-tags").split(",");

        if (tags.includes(tag)) {
            item.style.display = "block"; 
        } else {
            item.style.display = "none"; 
        }
    });
} else {
    document.querySelectorAll("div[filter-tags]").forEach(item => {
        item.style.display = "block";
    });
}