export const scrollToTop = () => {
    const scrollBtn = document.querySelector(".page-up");
    const upPage = document.querySelector(".header")

    scrollBtn.addEventListener("click", (event) => {
        event.preventDefault();
        upPage.scrollIntoView({behavior: "smooth"});
    })
}