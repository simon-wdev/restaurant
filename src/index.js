import "./styles.css";
import buildHomepage from "./home.js"
import buildMenu from "./menu.js";

const container = document.querySelector(".main-content");

function buildPage(buildFunction){
    container.innerHTML = "";
    container.appendChild(buildFunction());
}

class Events{
    static listener(){
        const home = document.querySelector(".home");
        const menu = document.querySelector(".menu");

        home.addEventListener("click", function(){
            buildPage(buildHomepage);
        })

        menu.addEventListener("click", function(){
            buildPage(buildMenu);
        })


    }
}

buildPage(buildHomepage);
Events.listener();

