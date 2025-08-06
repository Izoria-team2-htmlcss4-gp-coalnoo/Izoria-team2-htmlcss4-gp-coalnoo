window.addEventListener("DOMContentLoaded", () => {
  fetch("/assets/html-common/headernav.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("nav-placeholder").innerHTML = data;
      const currentPath = window.location.pathname;
      document.querySelectorAll(".nav-link").forEach((link) => {
        const href = link.getAttribute("href");
        if (href && currentPath.includes(href)) {
          link.classList.add("active");
        }
      });
    });
  fetch("/assets/html-common/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
