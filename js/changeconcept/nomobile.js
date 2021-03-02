const noMobile = document.querySelector(".no-mobileScreen"),
  noMobileImg = noMobile.querySelector("img");
let noMobileScreen = localStorage.getItem("bg_user");

function changeNomobile() {
  noMobileScreen = localStorage.getItem("bg_user");

  if (noMobileScreen === "Spring") {
    noMobileImg.setAttribute("src", "css/screens/image/spring.png");
    noMobile.style.background = "#A6AF6C";
  } else if (noMobileScreen === "Summer") {
    noMobile.style.background = "#2196f3";
    noMobileImg.setAttribute("src", "css/screens/image/summer.png");
  } else if (noMobileScreen === "Fall") {
    noMobile.style.background = "#723424";
    noMobileImg.setAttribute("src", "css/screens/image/fall.png");
  } else if (noMobileScreen === "Winter") {
    noMobile.style.background = "#708098";
    noMobileImg.setAttribute("src", "css/screens/image/winter.png");
  } else if (noMobileScreen === "") {
    noMobile.style.background = "#CDE2EF";
    noMobileImg.setAttribute("src", "css/screens/image/wait.png");
  }
}
function init() {
  changeNomobile();
  window.addEventListener("change", changeNomobile);
}

init();
