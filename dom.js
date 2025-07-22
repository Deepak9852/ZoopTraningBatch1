// modify element  innerHTML , innerText , textContent

// document.getElementById("heading").innerHTML = `<h5> this is h2 </h5>`;

// heading.textContent = `<h2>This is text content</h2>`;

// document.getElementById("heading").innerText = `<h5> this is h2 </h5>`;

// document.getElementsByClassName("heading2")[1].innerHTML =
//   "this is class element but changed by dom";

// document.getElementsByTagName("h1")[0].innerHTML = "changed by tagName";

// document.querySelector(".heading2").innerHTML = "Changed By query selector";

// document.querySelectorAll(".heading2")[1].innerHTML =
//   "Changed By query selector";

let image = document.getElementById("image");
image.setAttribute(
  "src",
  "https://burst.shopifycdn.com/photos/calm-water-in-european-city.jpg?width=746&format=pjpg&exif=0&iptc=0"
);

console.log(image.getAttribute("src"));
image.removeAttribute("src");

const div = document.createElement("div");
div.textContent = "The new div is created";

// document.body.appendChild(div);
let body = document.body;
const divelemet = body.appendChild(div);
divelemet.style.color = "red";
divelemet.setAttribute("id", "createdDiv");

divelemet.remove();

function change() {
  let heading = document.getElementById("heading");
  heading.innerHTML = `<h5> this is h2 </h5>`;
  heading.style.color = "red";
  heading.style.fontSize = "80px";
  heading.style.backgroundColor = "Green";
}

function remove() {
  heading.remove();
}

// event delegation

// addEventListener("event" , "listner" , "boolean")
// event onclick onchange onmousedown , function , true/false

// annonymus function

const myList = document.getElementById("myList");

myList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    alert(`You clicked: ${e.target.textContent}`);
  }

  if (e.target.classList.contains("remove-btn")) {
    const li = e.target.closest("li");
    li.remove();
  }
});

function addItem() {
  const newItem = document.createElement("li");
  newItem.innerHTML = `New Item <button class="remove-btn">Remove</button>`;
  myList.appendChild(newItem);
}

function printTable() {
  let inputValue = document.getElementById("numberInput").value;
  let outputValue = document.getElementById("output");

  let result = "";
  if (inputValue === "") {
    outputValue.innerHTML = "<span> Please enter a number</span>";
    return;
  }

  for (let i = 1; i <= 10; i++) {
    result += `${inputValue} * ${i} = ${inputValue * i} <br> `;
  }
  outputValue.innerHTML = result;
}

// fifo  --- first in first out ()  , lifo -- last in first out

// creation phase

//  execution phase       ----  event loop    ---- synchronous  -----   asynchronous ----- callback browser api dom

// Assignment

// to do list
//  scientific calculator
