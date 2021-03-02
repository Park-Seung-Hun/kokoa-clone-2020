const mainScreen = document.querySelector(".main-screen"),
  mainChat = mainScreen.querySelector("a"),
  moveScreen = localStorage.getItem("bg_user");

function init() {
  if (moveScreen === "Spring") {
    mainChat.setAttribute("href", "chat-spring.html");
  } else if (moveScreen === "Summer") {
    mainChat.setAttribute("href", "chat-summer.html");
  } else if (moveScreen === "Fall") {
    mainChat.setAttribute("href", "chat-fall.html");
  } else if (moveScreen === "Winter") {
    mainChat.setAttribute("href", "chat-winter.html");
  }
}

init();
