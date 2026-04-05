import "./styles.css";
import buildHomepage from "./home.js"

const container = document.querySelector(".main-content");

function buildPage(buildFunction){
    container.innerHTML = "";
    container.appendChild(buildFunction());
}

class Events{
    static listener(){
        const home = document.querySelector(".home")

        home.addEventListener("click", function(){
            buildHomepage();
        })
    }
}

buildPage(buildHomepage);
Events.listener();

