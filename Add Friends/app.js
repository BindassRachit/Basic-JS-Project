const add_friend = document.querySelector("#add");
const friend = document.querySelector("h5");
const remove = document.querySelector("#remove");

let flag = 0;


add_friend.addEventListener("click", ()=>{
    if (flag == 0) {
        friend.innerHTML = "Friend";
        friend.style.color = "green";
        add_friend.innerHTML = "Remove";
        add_friend.style.backgroundColor = "white";
        add_friend.style.color = "black"        
        flag++;
    } else {
        friend.innerHTML = "Stranger";
        friend.style.color = "red";
        add_friend.innerHTML = "Add Friend";
        add_friend.style.backgroundColor = "rgb(41, 74, 206)";
        add_friend.style.color = "white"        
        flag=0;
    }
})

