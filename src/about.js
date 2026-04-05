const wrapper = document.createElement("div");
wrapper.classList.add("about-wrapper");

const header = document.createElement("h1");
header.textContent = "Über uns:";
header.style.fontWeight = "bold";

const description = document.createElement("p");
description.textContent = "Rockin' burgers since 1989! We would love to serve you well!"

const infoBox = document.createElement("div");


function infoPairs(label, text){
    const strong = document.createElement("strong");
    const p = document.createElement("p");
    strong.textContent = `${label}: `;
    p.textContent = text;

    infoBox.append(strong, p)
}

infoPairs("OPEN", "Monday - Friday 8am - 22pm")

export default function buildAbout(){
    wrapper.append(header, description, infoBox);

    return wrapper;
}