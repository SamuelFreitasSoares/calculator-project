document.addEventListener('DOMContentLoaded', () => {

let button = document.querySelectorAll("button");
let screen = document.getElementById('display');

button.forEach(element => {
    element.addEventListener('click', (event) => {
        screen.innerHTML += event.target.innerHTML
    })
});











})