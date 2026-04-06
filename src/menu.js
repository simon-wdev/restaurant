const dishes = [];
const container = document.querySelector(".main-content")

const dishCard = (name, description, price) => {
    return dishes.push({name, description, price});
}

const americanBurger = dishCard("The OG Burger", "80g saftiges Rindfleisch, Cheddar, knackiger Lollo Bionda, hausgemachte Pickles und unsere geheime Classic-Sauce.", "9.50€")
const phillyStack = dishCard("BBQ Beast", "Rindfleisch trifft auf krossen Bacon, Röstzwiebeln und eine rauchige Whiskey-BBQ-Sauce. Nichts für schwache Nerven!", "11,50€")
const cheeseClassic = dishCard("Green Garden (V)", "Hausgemachtes Kichererbsen-Walnuss-Patty mit Avocado-Creme, Grillpaprika und frischem Rucola.", "10,50€")

export default function buildMenu(){
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper")


    dishes.forEach((dish) => {
        const dishCard = document.createElement("div");
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const price = document.createElement("p");

        dishCard.classList.add("dish-card");

        name.textContent = dish.name;
        description.textContent = dish.description;
        price.textContent = dish.price;

        dishCard.append(name, description, price)
        menuWrapper.append(dishCard);
    });
        return menuWrapper;
}

