export class Homepage {
    constructor(){
        this.head = "<h1>Welcome to my Restaurant</h1>"
        this.text = "<p>This is a generic text about my restaurant.</p>"
    }

    buildHome(){
        const container = document.querySelector(".main-content");

        container.innerHTML = `${this.head} ${this.text}`;
    }
}