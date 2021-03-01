const splashScreen = document.querySelector("#splash-screen"),
  conceptSplash = localStorage.getItem("bg_user");

function init() {
  if (conceptSplash === "Spring") {
    splashScreen.setAttribute("class", "splash-screen__spring");
    splashScreen.innerHTML = `<i class="fas fa-seedling fa-2x"></i>`;
  } else if (conceptSplash === "Summer") {
    splashScreen.setAttribute("class", "splash-screen__summer");
    splashScreen.innerHTML = `<i class="fas fa-umbrella-beach fa-2x"></i>`;
  } else if (conceptSplash === "Fall") {
    splashScreen.setAttribute("class", "splash-screen__fall");
    splashScreen.innerHTML = `<i class="fab fa-canadian-maple-leaf fa-2x"></i>`;
  } else if (conceptSplash === "Winter") {
    splashScreen.setAttribute("class", "splash-screen__winter");
    splashScreen.innerHTML = `<i class="fas fa-snowman fa-2x"></i>`;
  }
}

init();
