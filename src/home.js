
//Homepage
import homeJpg from "./homeJpg.jpg";

export default function buildHomepage(){
    const wrapper = document.createElement("div")
    let header = document.createElement("h1");
    const bodywrapper = document.createElement("div")
    const img = document.createElement("img");
    const textContainer = document.createElement("div");
    let intro = document.createElement("p");
    let text = document.createElement("p");

    bodywrapper.classList.add("body-wrapper")
    textContainer.classList.add("text-container")
    wrapper.classList.add("home-wrapper")
    
    img.src = homeJpg;
    img.alt = "Frau die ein Tablett mit Burgern in der Hand hält."
    
    header.textContent = "The Patty Project";
    intro.textContent = "Vergiss labberige Mensa-Patties. Wir bringen das Grill-Feeling direkt in dein Viertel. Handgemacht, frisch und mit der Extraportion Liebe (und Käse) zubereitet. Dein Hunger hat endlich einen Endgegner gefunden!";
    text.textContent = "Freu dich im 'Patty Project' auf reichlich Käse und frische Zutaten. Alle unsere Dip's sind Hausgemacht und frisch!"


    textContainer.append(intro, text);
    bodywrapper.append(img, textContainer)
    wrapper.append(header, bodywrapper);
    
    return wrapper
}