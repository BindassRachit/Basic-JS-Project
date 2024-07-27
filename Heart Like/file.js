const images = document.querySelector(".container");
const heart = document.querySelector("i")

images.addEventListener("dblclick", ()=>{
    heart.style.opacity = 0.7;
    setTimeout(() => {
        heart.style.opacity = 0;
    }, 1000);
});

