export const backGround = () => {
    const bgElements = document.querySelectorAll(".set-bg");

    bgElements.forEach((elem) => {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    });

}

export const preloader = () => {
    const preloder = document.querySelector(".preloder");

    preloder.classList.add("active")

    setTimeout(() => {
        preloder.classList.remove("active")
    }, 500);
    console.log("hui")
}