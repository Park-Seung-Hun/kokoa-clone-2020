const login=document.querySelector(".index__body"),
    selectBox=login.querySelector("#seasonSelect"),
    selectOption=selectBox.querySelectorAll("option"),
    loginForm=document.querySelector("#login-form");

const bg_user="bg_user";

function changeColor(event){
    const target=event.target.value;

    if(target === "Spring"){
        selectBox.style.color = "#a80000";
        loginForm.setAttribute("action","friends.html");
    }
    else if(target === "Summer"){
        selectBox.style.color = "#005416";
        loginForm.setAttribute("action","friends.html");
    }
    else if(target ==="Fall"){
        selectBox.style.color = "#004e7f";
        loginForm.setAttribute("action","friends.html");
    }
    else if(target ==="Winter"){
        selectBox.style.color = "#f7c202";
        loginForm.setAttribute("action","friends.html");
    }
    else{
        selectBox.style.color = "white";
    }
    localStorage.setItem(bg_user,target);
}

function init(){
    selectBox.addEventListener("change",changeColor);
}

init();