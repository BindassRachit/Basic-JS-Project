const main = document.querySelector("#main");
const crsr = document.querySelector("#cursor");

main.addEventListener("mousemove",(logs)=>{
    crsr.style.left = logs.x+"px";
    crsr.style.top = logs.y+"px";
})
