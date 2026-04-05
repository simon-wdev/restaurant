
//Homepage


export default function buildHomepage(){
    const wrapper = document.createElement("div")

    let header = document.createElement("h1");
    let body = document.createElement("p");

    header.textContent = "Welcome to our Restaurant!";
    body.textContent = "Come to our restaurant and choose a variety of special Burgers!";

    wrapper.append(header, body);
    return wrapper
}