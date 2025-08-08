document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-link");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      categoryLinks.forEach((l) => l.classList.remove("active"));

      this.classList.add("active");

      const category = this.getAttribute("data-category");

      document.querySelectorAll("[data-category]").forEach((item) => {
        if (item.classList.contains("col")) {
          if (
            category === "all" ||
            item.getAttribute("data-category") === category
          ) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
});
