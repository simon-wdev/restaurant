const dishes = [];

const dishCard = (name, description, price) => {
    return dishes.push({name, description, price});
}

const americanBurger = dishCard("American Burger", "A lot of fat and sugar.", 13.99)
const phillyStack = dishCard("Classic Philly Stack", "CHEEEEEEEEEEEESE", 12.99)
const cheeseClassic = dishCard("Cheeseburger", "All time Classic!", 10.99)

export default function buildMenu(){
    const wrapper = document.createElement("div");

    dishes.forEach((dish) => {
        const name = document.createElement("h2");
        name.textContent = dish.name;

        const description = document.createElement("p");
        description.textContent = dish.description;

        const price = document.createElement("p");
        price.textContent = dish.price;

        wrapper.append(name, description, price)

    });

    return wrapper;
}

