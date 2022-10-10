const openBtn = document.querySelector(".menu-icon-open");
const closeBtn = document.querySelector(".menu-icon-close");
const menuListContainer = document.querySelector(".menu-list");

const openElements = () => {
  openBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("visible");
  menuListContainer.classList.remove("hidden");
};

const closeElements = () => {
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
  openBtn.classList.add("visible");
  menuListContainer.classList.add("hidden");
};

openBtn.addEventListener("click", openElements);
closeBtn.addEventListener("click", closeElements);

menuListContainer.addEventListener("click", closeElements);