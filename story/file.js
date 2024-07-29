const pw = [
    {
        dp:"https://qph.cf2.quoracdn.net/main-qimg-e2dfcef40c8ea11e7f80d30189e91f75-lq",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbDjSmFeQRKeHsMJe-IJxyM0n0KXS16l6LQ&s"
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1NltTWfbjodx-57_3xs22X0RDZqMSTVe7SA&s",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8r24aEpjswKhMdn9Sm0UKc2f16i9P2ghYA&s"
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiPnp4EomFLGgrLlNeidLTSSzB0CFOu8qWw&s",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8r24aEpjswKhMdn9Sm0UKc2f16i9P2ghYA&s"
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBkkd1z18NjzrI41MOanQDV5KPV13yc_HOQ&s",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1WLc2jdNeHntNbq-QQQMhhq444CEqwFH1vA&s"
    }
];

let clutter = "";

pw.forEach((em, nxt)=>{
    clutter += `<div class="story">
            <img id="${nxt}" src="${em.dp}" alt="">
        </div>`
})
const main = document.querySelector("#stories");
main.innerHTML = clutter;
console.log(clutter)
main.addEventListener("click", (don)=>{
    document.querySelector("#full_screen").style.display ="block"
    document.querySelector("#full_screen").style.backgroundImage = `url(${pw[don.target.id].story})` 
    setTimeout(() => {
        document.querySelector("#full_screen").style.display ="none"
    }, 1000);
})
