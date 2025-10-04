//que- why we can't save arrays & objects but we save string in localStorage
//Ans - Because localStorage only stores strings and their APIs built like that. To save arrays or objects, you must first convert them using JSON.stringify() and retrieve them with JSON.parse().

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  document.body.classList.toggle("light", theme === "light");
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme || getSystemTheme());
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}

// Apply theme on load
setInitialTheme();

// Listen to system theme changes if no manual override
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(e.matches ? "dark" : "light");
  }
});

// Button toggle
document.querySelector("button").addEventListener("click", toggleTheme);
