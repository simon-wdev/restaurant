import BBQ from "./BBQ.jpg";
import OG from "./OG.jpg";
import vegan from "./vegan.jpg";


const dishes = [];

const dishCard = (name, description, price, imgSrc) => {
    return dishes.push({name, description, price, imgSrc});
}

const ogBurger = dishCard("The OG Burger", "80g saftiges Rindfleisch, Cheddar, knackiger Lollo Bionda, hausgemachte Pickles und unsere geheime Classic-Sauce.", "9.50€", OG)
const bbqBurger = dishCard("BBQ Beast", "Rindfleisch trifft auf krossen Bacon, Röstzwiebeln und eine rauchige Whiskey-BBQ-Sauce. Nichts für schwache Nerven!", "11,50€", BBQ)
const veganBurger = dishCard("Green Garden (V)", "Hausgemachtes Kichererbsen-Walnuss-Patty mit Avocado-Creme, Grillpaprika und frischem Rucola.", "10,50€", vegan)

export default function buildMenu(){
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper")


    dishes.forEach((dish) => {
        const dishCard = document.createElement("div");
        const dishText = document.createElement("div");
        const dishImg = document.createElement("img");
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const price = document.createElement("p");

        dishCard.classList.add("dish-card");
        price.classList.add("price")

        name.textContent = dish.name;
        description.textContent = dish.description;
        price.textContent = dish.price;

        dishImg.src = dish.imgSrc;
        dishImg.alt = "Bild des Gerichts"

        dishText.append(name, description, price)
        dishCard.append(dishImg, dishText);
        menuWrapper.append(dishCard);
    });
        return menuWrapper;
}

