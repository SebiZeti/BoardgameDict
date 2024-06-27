var accessibleBg = "black";
var accessibleText = "rgb(153, 255, 253)";
var accessibleTitle = "rgb(255, 249, 71)"
var accessibleFontSize = "2vw";

var defaultBg = "white";
var defaultText = "black";
var defaultTitle = "rgb(7, 87, 141)";
var defaultFontSize = "1.3vw";

var root = document.querySelector(":root");

window.onload = function(){
    //alert(localStorage.getItem("On"))
    if(localStorage.getItem("On") === null){
        localStorage.setItem("On", "off");
    }

    applyStyle(localStorage.getItem("On"));
}
function toggle() {

    if(localStorage.getItem("On") == "off"){
        localStorage.setItem("On", "on");
    }
    else{
        localStorage.setItem("On", "off");
    }

    //alert(localStorage.getItem("On"))
    applyStyle(localStorage.getItem("On"));
   
}

function applyStyle(isOn){
    if(isOn == "on"){
        document.documentElement.style.setProperty("--default-text-color", accessibleText);
        document.documentElement.style.setProperty("--default-title-color", accessibleTitle);
        document.documentElement.style.setProperty("--bg-color", accessibleBg);
        document.documentElement.style.setProperty("--default-font-size", accessibleFontSize);
    }
    else{
        document.documentElement.style.setProperty("--default-text-color", defaultText);
        document.documentElement.style.setProperty("--default-title-color", defaultTitle);
        document.documentElement.style.setProperty("--bg-color", defaultBg);
        document.documentElement.style.setProperty("--default-font-size", defaultFontSize);
    }
}