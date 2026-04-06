
//Homepage


export default function buildHomepage(){
    const wrapper = document.createElement("div")

    let header = document.createElement("h1");
    let body = document.createElement("p");

    header.textContent = "The Patty Project";
    body.textContent = "Vergiss labberige Mensa-Patties. Wir bringen das Grill-Feeling direkt in dein Viertel. Handgemacht, frisch und mit der Extraportion Liebe (und Käse) zubereitet. Dein Hunger hat endlich einen Endgegner gefunden!";

    wrapper.append(header, body);
    return wrapper
}