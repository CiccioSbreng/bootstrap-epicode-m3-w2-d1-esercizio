function toggleThisDescription(element) {
    const card = element.closest(".card");
    const description = card.querySelector(".albumDescription");
    description.style.display = description.style.display === "none" ? "block" : "none";
  }
  