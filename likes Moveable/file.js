const post = document.querySelector("#post");
const like = document.querySelector("i");
const h = document.querySelector("h2")

post.addEventListener("dblclick", (likes)=>{
    console.log(likes);
    h.innerHTML = "Love You Abhijeet Babu"
    like.style.top = likes.layerY+"px"
    like.style.left = likes.layerX+"px"
    like.style.opacity = 0.7;
    setTimeout(() => {
        like.style.opacity = 0;
        // h.innerHTML = "Pechan liya na"
        like.style.top = likes.layerY+"px"
        like.style.left = likes.layerX+"px"
    }, 1000);
});