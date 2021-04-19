let base = document.querySelector(".list");

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

console.log(results);
