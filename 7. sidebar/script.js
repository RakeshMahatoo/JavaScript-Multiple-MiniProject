const menuOpen = document.querySelector(".three-dots");
const menuClose = document.querySelector(".cut");
const sidebar = document.querySelector(".container");

menuOpen.addEventListener("click", () => {
  sidebar.style.width = "107vh"; // slide open
});

menuClose.addEventListener("click", () => {
  sidebar.style.width = "0"; // slide closed
});
