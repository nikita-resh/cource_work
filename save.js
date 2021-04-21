const points = document.querySelector(".points_number");
const name_input = document.getElementById("name_input");
const save_btn = document.getElementById("save_btn");
const message = document.getElementById("message");
const home_btn = document.getElementById("home");

let temp = localStorage.getItem("results");
if (temp == "" || temp == null) {
  let results = [];
  localStorage.setItem("results", JSON.stringify(results));
}

let results = localStorage.getItem("results");

// добавление счета на страницу
let current = JSON.parse(localStorage.getItem("current"));

points.innerHTML = current.score;

console.log(current);

name_input.addEventListener("input", () => {
  if (+name_input.value.length > 3 && +name_input.value.length < 9) {
    propper();
  } else {
    inpropper();
  }
});

function propper() {
  save_btn.classList.remove("grey");
  save_btn.classList.add("blue");

  message.innerHTML = "Valid name";
  message.classList.remove("red");
  message.classList.add("green");
}

function inpropper() {
  save_btn.classList.add("grey");
  save_btn.classList.remove("blue");
  message.innerHTML = "Invalid name";
  message.classList.add("red");
  message.classList.remove("green");
}

save_btn.addEventListener("click", () => {
  if (save_btn.classList.contains("blue")) {
    // console.log(current.score);

    results = localStorage.getItem("results");
    results = JSON.parse(results);
    let temp = {
      name: name_input.value,
      score: current.score,
    };
    results.push(temp);
    localStorage.setItem("results", JSON.stringify(results));
    alert("Your result saved succesfully!");
    document.location.href = "index.html";
  } else {
    alert("Invalid name");
    name_input.value = "";
  }
});

home_btn.addEventListener("click", () => {
  document.location.href = "index.html";
});
