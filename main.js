// ============================
// OMNITRIX BUTTON CLICK
// ============================
document.getElementById("omnitrixButton").addEventListener("click", () => {
  window.location.href = "omnitrix.html";
});

// ============================
// SEARCH SYSTEM
// ============================
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();

  // Search through aliens.js data
  const found = aliens.find(a => a.name.toLowerCase() === query);

  if (found) {
    searchResult.textContent = `Found: ${found.name} (${found.species})`;
  } else {
    searchResult.textContent = "Alien not found.";
  }
});

// ============================
// ALIEN GRID POPULATION
// ============================
const grid = document.querySelector(".grid");

aliens.forEach(alien => {
  const card = document.createElement("div");
  card.classList.add("alien-card");

  card.innerHTML = `
    <img src="${alien.image}" alt="${alien.name}">
    <h3>${alien.name}</h3>
    <p>${alien.species}</p>
  `;

  grid.appendChild(card);
});

// ============================
// CODE INPUT SYSTEM
// ============================
let codeSequence = "";

document.querySelectorAll(".code-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value; // "L" or "R"
    codeSequence += value;
    document.getElementById("codeDisplay").textContent = codeSequence;
  });
});

// ============================
// RESET CODE
// ============================
document.getElementById("resetCode").addEventListener("click", () => {
  codeSequence = "";
  document.getElementById("codeDisplay").textContent = "";
});

// ============================
// SECRET CODE UNLOCK
// ============================
// Example secret code:
const secretCode = "LRLRRLLRLR";

setInterval(() => {
  if (codeSequence === secretCode) {
    window.location.href = "fusion.html";
  }
}, 200);
