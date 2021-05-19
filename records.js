let base = document.querySelector(".list");
let clearBtn = Array.from(document.querySelectorAll("a"))[1];

let results = localStorage.getItem("results");
results = Array.from(JSON.parse(results));

results.sort((a, b) => b.score - a.score);

results = results.splice(0, 5);

for (let item of results) {
  let div = document.createElement("div");
  div.textContent = `${item.name} - ${item.score}`;
  div.classList.add("item");
  base.append(div);
}

clearBtn.addEventListener("click", () => {
  let temp = localStorage.getItem("results");
  let results = [];
  localStorage.setItem("results", JSON.stringify(results));
});
