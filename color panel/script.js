const btns = document.querySelector("#btn");
const names1 = document.querySelector("#name1");
const names2 = document.querySelector("#name2");
const names3 = document.querySelector("#name3");
const names4 = document.querySelector("#name4");
const names5 = document.querySelector("#name5");
const change1 = document.querySelector("#change1");
const change2 = document.querySelector("#change2");
const change3 = document.querySelector("#change3");
const change4 = document.querySelector("#change4");
const change5 = document.querySelector("#change5");



const getcolor = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    console.log(randomcode,randomnumber);
    change1.style.backgroundColor = randomcode;
    names1.innerText = randomcode;
}
const getcolor2 = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    console.log(randomcode,randomnumber);
    change2.style.backgroundColor = randomcode;
    names2.innerText = randomcode;
}
const getcolor3 = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    console.log(randomcode,randomnumber);
    change3.style.backgroundColor = randomcode;
    names3.innerText = randomcode;
}
const getcolor4 = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    console.log(randomcode,randomnumber);
    change4.style.backgroundColor = randomcode;
    names4.innerText = randomcode;
}
const getcolor5 = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    console.log(randomcode,randomnumber);
    change5.style.backgroundColor = randomcode;
    names5.innerText = randomcode;
}



btn.addEventListener("click", getcolor);
btn.addEventListener("click", getcolor2);
btn.addEventListener("click", getcolor3);
btn.addEventListener("click", getcolor4);
btn.addEventListener("click", getcolor5);