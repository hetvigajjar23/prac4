console.log("Portfolio JavaScript loaded successfully");

document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      card.style.transform = "scale(1.05)";
      card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "scale(1)";
    });
  });
});
