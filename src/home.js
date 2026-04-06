
//Homepage
import homeJpg from "./homeJpg.jpg";

export default function buildHomepage(){
    const wrapper = document.createElement("div")
    wrapper.classList.add("home-wrapper")
    let header = document.createElement("h1");

    const bodywrapper = document.createElement("div")
    bodywrapper.classList.add("body-wrapper")
    const img = document.createElement("img");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container")
    let intro = document.createElement("p");
    let text = document.createElement("p");

    textContainer.append(intro, text);
    bodywrapper.append(img, textContainer)

    header.textContent = "The Patty Project";
    img.src = homeJpg;
    intro.textContent = "Vergiss labberige Mensa-Patties. Wir bringen das Grill-Feeling direkt in dein Viertel. Handgemacht, frisch und mit der Extraportion Liebe (und Käse) zubereitet. Dein Hunger hat endlich einen Endgegner gefunden!";
    text.textContent = "Freu dich im 'Patty Project' auf reichlich Käse und frische Zutaten. Alle unsere Dip's sind Hausgemacht und frisch!"


    wrapper.append(header, bodywrapper);
    return wrapper
}