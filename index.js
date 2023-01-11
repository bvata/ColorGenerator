const containerEl = document.querySelector(".container")
const hash = '#'

for (let index = 0; index < 30; index++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("color");
    containerEl.appendChild(createDiv);
}

const characters ='0123456789abcdef';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return hash+result;
}
const backgroundEl = document.querySelectorAll (".color")

for (i in backgroundEl){
    backgroundEl[i].innerHTML = generateString(6)
    backgroundEl[i].style.setProperty("--background_color",generateString(6))

}
