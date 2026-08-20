// State
let activeCategory = "all";
let searchTerm = "";

function applyFilters() {
  const sections = document.querySelectorAll(".section");
  let anyVisible = false;

  sections.forEach((section) => {
    const items = section.querySelectorAll(".menu-item");
    let sectionVisible = false;

    items.forEach((item) => {
      const itemCategory = item.dataset.category;
      const isVeg = item.dataset.veg === "true";
      const itemName = item.dataset.name.toLowerCase();
      const itemDesc = item
        .querySelector(".item-desc")
        .textContent.toLowerCase();
      const matchesCategory =
        activeCategory === "all" ||
        itemCategory === activeCategory ||
        (activeCategory === "vegetarian" && isVeg);
      const matchesSearch =
        !searchTerm ||
        itemName.includes(searchTerm) ||
        itemDesc.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        item.style.display = "block";
        sectionVisible = true;
        anyVisible = true;
      } else {
        item.style.display = "none";
      }
    });

    section.style.display = sectionVisible ? "block" : "none";
  });

  // Show no results message
  let noResults = document.getElementById("noResults");
  if (!anyVisible && (searchTerm || activeCategory !== "all")) {
    if (!noResults) {
      noResults = document.createElement("div");
      noResults.id = "noResults";
      noResults.className = "no-results";
      noResults.innerHTML = `
                        <h3>No items found</h3>
                        <p>Try adjusting your search or filter</p>
                    `;
      document.getElementById("menuContent").appendChild(noResults);
    }
  } else if (noResults) {
    noResults.remove();
  }
}

function filterCategory(category, btn) {
  activeCategory = category;
  document
    .querySelectorAll(".cat-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("searchInput").value = "";
  searchTerm = "";
  applyFilters();
}

function searchMenu() {
  searchTerm = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  if (searchTerm) {
    activeCategory = "all";
    document
      .querySelectorAll(".cat-btn")
      .forEach((b) => b.classList.remove("active"));
    document.querySelector('.cat-btn[data-cat="all"]').classList.add("active");
  }
  applyFilters();
}

// Smooth scroll for categories on mobile
document.querySelectorAll(".cat-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .getElementById("menuContent")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Initial apply
applyFilters();
