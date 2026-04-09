const wrapper = document.createElement("div");
wrapper.classList.add("about-wrapper");

const header = document.createElement("h1");
header.textContent = "Über uns:";
header.style.fontWeight = "bold";

const description = document.createElement("p");
description.textContent = "Das Patty Project startete nicht in der Küche sondern als Fullstack Projekt. Zwischen normalem Schulwahnsinn" +
                          " und der Liebe zu Burgern war es unser Traum verschiedene Zutaten in Module zu bündeln, sodass die Wartezeit für Kunden minimal bleibt." +
                          " Seit 2025 machen wir nun Burger im 'Webpack-Format' und freuen uns auf euren Besuch. Kommt doch mal vorbei!"

const infoWrapper = document.createElement("div");
infoWrapper.classList.add("info-wrapper");


function infoPairs(label, text){
    const infoRow = document.createElement("div");                  
    const strong = document.createElement("strong"); //strong ist ein neuer absatz, strong müsste innerhalb eine paragraph appended werden
    const p = document.createElement("p");
    strong.textContent = `${label}: `;
    p.textContent = text;

    infoRow.classList.add("info-row")

    infoRow.append(strong, p)
    return infoRow;
}

infoWrapper.append(
    infoPairs("Montag", "8 - 22 Uhr"),
    infoPairs("Dienstag", "Ruhetag"),
    infoPairs("Mittwoch", "8 - 22 Uhr"),
    infoPairs("Donnerstag", "8 - 22 Uhr"),
    infoPairs("Freitag", "8 - 22 Uhr"),
    infoPairs("Samstag", "8 - 22 Uhr"),
    infoPairs("Sonntag", "8 - 22 Uhr"),
);

export default function buildAbout(){
    wrapper.append(header, description, infoWrapper);

    return wrapper;
}