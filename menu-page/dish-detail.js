const urlParams = new URLSearchParams(window.location.search);
const dishId = urlParams.get("dish") || "red-ragu-cream-pasta";

const currentDish = dishesData[dishId];

if (currentDish) {
  document.title = `${currentDish.name} - Izoria`;

  document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector(".dish-title");
    if (titleElement) {
      titleElement.innerHTML = currentDish.name.replace(" ", "<br>");
    }

    const subtitleElement = document.querySelector(".dish-subtitle");
    if (subtitleElement) {
      subtitleElement.textContent = currentDish.koreanName;
    }

    const imageElement = document.querySelector(".dish-image");
    if (imageElement) {
      imageElement.src = currentDish.image;
      imageElement.alt = currentDish.name;
    }

    const categoryElement = document.querySelector(".category-badge");
    if (categoryElement) {
      categoryElement.textContent =
        currentDish.category.charAt(0).toUpperCase() +
        currentDish.category.slice(1);
    }

    const descriptionElement = document.querySelector(".dish-description");
    if (descriptionElement) {
      descriptionElement.textContent = currentDish.description;
    }

    const currentIndex = dishOrder.indexOf(dishId);
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : dishOrder.length - 1;
    const nextIndex =
      currentIndex < dishOrder.length - 1 ? currentIndex + 1 : 0;

    const prevLink = document.getElementById("prevLink");
    const nextLink = document.getElementById("nextLink");

    if (prevLink) {
      prevLink.href = `dish-detail.html?dish=${dishOrder[prevIndex]}`;
    }
    if (nextLink) {
      nextLink.href = `dish-detail.html?dish=${dishOrder[nextIndex]}`;
    }

    const dishContainer = document.getElementById("dishScroll");
    dishContainer.innerHTML = dishOrder
      .map((id) => {
        const dish = dishesData[id];
        return id === dishId
          ? `<div class="flex-shrink-0 dish-item opacity-50">
                <div class="position-relative">
                    <div class="ratio ratio-1x1">
                        <img src="${dish.image}" alt="${dish.name}" class="img-fluid object-fit-cover">
                    </div>
                </div>
            </div>`
          : `<div class="flex-shrink-0 dish-item">
                <a href="dish-detail.html?dish=${id}" class="text-decoration-none dish-card">
                    <div class="position-relative overflow-hidden">
                        <div class="ratio ratio-1x1">
                            <img src="${dish.image}" alt="${dish.name}" class="img-fluid object-fit-cover">
                        </div>
                        <div class="dish-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center opacity-0 p-2 text-center">
                            <span class="text-black text-uppercase ls-normal fw-semibold">${dish.name}</span>
                        </div>
                    </div>
                </a>
            </div>`;
      })
      .join("");

    const scrollLeftBtn = document.getElementById("scrollLeftBtn");
    const scrollRightBtn = document.getElementById("scrollRightBtn");

    if (scrollLeftBtn) {
      scrollLeftBtn.addEventListener("click", () => {
        dishContainer.scrollBy({ left: -300, behavior: "smooth" });
      });
    }

    if (scrollRightBtn) {
      scrollRightBtn.addEventListener("click", () => {
        dishContainer.scrollBy({ left: 300, behavior: "smooth" });
      });
    }
  });
} else {
  window.location.href = "index.html";
}
