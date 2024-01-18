let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const icon = document.querySelector("#dark-mode-toggle i");
const navbar = document.querySelector(".navbar");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
  icon.className = "fas fa-sun";
  navbar.className = "navbar navbar-expand-lg navbar-dark";
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.removeItem("darkMode");
  icon.className = "fas fa-moon";
  navbar.className = "navbar navbar-expand-lg navbar-light";
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
