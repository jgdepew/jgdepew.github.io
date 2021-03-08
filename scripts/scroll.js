const checkpoint = 300;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    if (currentScroll >= 590) {
        document.querySelector(".page-header").style.background = "#E86A4F"
    } else {
        document.querySelector(".page-header").style.background = "transparent"
    }
    console.log(currentScroll);
    document.querySelector(".title").style.opacity = opacity;
});