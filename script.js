let images = ["eintracht.jpg", "eintracht.jpg", "eintracht.jpg", "eintracht.jpg", "eintracht.jpg", "eintracht.jpg", "eintracht.jpg"];

function init() {    
let imageRef = document.getElementById('image_load')
for (let index = 0; index < images.length; index++) {
    imageRef.innerHTML += load_images(index);
    
}
}

function load_images(index) {
    return `<img src=./img/${images[index]}>`;
}