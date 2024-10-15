window.addEventListener("scroll", () => {
    const header = document.getElementsByTagName("header")[0];

    if (window.scrollY > 15) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});