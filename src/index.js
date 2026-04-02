import "./styles.css";
import { Homepage } from "./home.js";


class Events{
    static listener(){
        const home = document.querySelector(".home")

        home.addEventListener("click", function(){
            home.buildHome();
        })
    }
}




const home = new Homepage();
home.buildHome();
