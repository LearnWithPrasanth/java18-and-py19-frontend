console.log("DOM Manipulation");

// let title = document.getElementById("title");
// let title = document.getElementsByTagName("div");
// let title = document.querySelector("#title");
// title.textContent = "Java and Python";
// console.log(title.textContent);

let btn = document.querySelector("button");
console.log(btn);

let sample = () => {
    console.log("Clicked");
};
// btn.addEventListener("click", sample);

// btn.onclick = () => {
//     console.log("Clicked");
// };

btn.onmouseover = () => {
    console.log("Mouse over");
};
btn.onmouseout = () => {
    console.log("Mouse Out");
};
