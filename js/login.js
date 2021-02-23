const login=document.querySelector(".index__body"),
    selectBox=login.querySelector("#dormitorySelect"),
    selectOption=selectBox.querySelectorAll("option"),
    loginForm=document.querySelector("#login-form");

function changeColor(event){
    const target=event.target.value;

    if(target === "Gryffindor"){
        selectBox.style.color = "#a80000";
        loginForm.setAttribute("action","dormitory/G.html");
    }
    else if(target === "Slytherin"){
        selectBox.style.color = "#005416";
        loginForm.setAttribute("action","dormitory/S.html");
    }
    else if(target ==="Ravenclaw"){
        selectBox.style.color = "#004e7f";
        loginForm.setAttribute("action","dormitory/R.html");
    }
    else if(target ==="Hufflepuff"){
        selectBox.style.color = "#f7c202";
        loginForm.setAttribute("action","dormitory/H.html");
    }
    else{
        selectBox.style.color = "white";
    }
}

function init(){
    selectBox.addEventListener("change",changeColor);
}

init();