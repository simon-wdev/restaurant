
//Homepage
import homeJpg from "./homeJpg.jpg";

export default function buildHomepage(){
    const wrapper = document.createElement("div")
    wrapper.classList.add("home-wrapper")
    let header = document.createElement("h1");

    let bodywrapper = document.createElement("div")
    bodywrapper.classList.add("body-wrapper")
    let img = document.createElement("img");
    let body = document.createElement("p");
    bodywrapper.append(img, body)

    header.textContent = "The Patty Project";
    img.src = homeJpg;
    body.textContent = "Vergiss labberige Mensa-Patties. Wir bringen das Grill-Feeling direkt in dein Viertel. Handgemacht, frisch und mit der Extraportion Liebe (und Käse) zubereitet. Dein Hunger hat endlich einen Endgegner gefunden!";

    wrapper.append(header, bodywrapper);
    return wrapper
}