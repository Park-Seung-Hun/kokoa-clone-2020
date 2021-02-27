const login=document.querySelector(".index__body"),
    selectBox=login.querySelector("#seasonSelect"),
    selectOption=selectBox.querySelectorAll("option"),
    loginForm=document.querySelector("#login-form");

const bg_user="bg_user";

function changeColor(event){
    const target=event.target.value;

    if(target === "Spring"){
        login.style.background ="#A6AF6C";
        loginForm.setAttribute("action","friends.html");   
    }
    else if(target === "Summer"){
        login.style.background = "#2196f3";
        loginForm.setAttribute("action","friends.html");
    }
    else if(target ==="Fall"){
        login.style.background = "#723424";
        loginForm.setAttribute("action","friends.html");
    }
    else if(target ==="Winter"){
        login.style.background = "#708098";
        loginForm.setAttribute("action","friends.html");
    }
    else{
        login.style.background="#CDE2EF";
    }
    localStorage.setItem(bg_user,target);
}

function init(){
    localStorage.setItem(bg_user,"");
    selectBox.addEventListener("change",changeColor);
}

init();