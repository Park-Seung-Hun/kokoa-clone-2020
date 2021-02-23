const jsBody = document.querySelector(".js-bg"),
    jsNav=document.querySelector(".js-nav"),
    conceptScreen = localStorage.getItem("bg_user");;


function init(){

    if(conceptScreen === "Spring"){
        jsBody.style.background ="#EEEEDF";
        jsNav.style.background = "#A6AF6C";
    }
    else if(conceptScreen === "Summer"){
        jsBody.style.background ="#fff";
        jsNav.style.background = "#2196f3";
    }
    else if(conceptScreen === "Fall"){
        jsBody.style.background ="#F1F0E8";
        jsNav.style.background = "#723424";
    }
    else if(conceptScreen === "Winter"){
        jsBody.style.background ="#DCE3EF";
        jsNav.style.background = "#708098";
    }
}

init();