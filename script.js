let images = ["eintracht.jpg", "favicon.svg", "eintracht.jpg", "eintracht.jpg", "eintracht.jpg", "eintracht.jpg", "eintracht.jpg"];

function init() {    
let imageRef = document.getElementById('image_load');
for (let index = 0; index < images.length; index++) {
    imageRef.innerHTML += load_images(index);
    
}
}

function load_images(index) {
    return `<img onclick="openDialog(${index}), eventBubbling(event)" src=./img/${images[index]}>`;
}

const dialogRef= document.getElementById("pictureDialog");
const dialogFooterRef = document.getElementById("dialogFooter")
function openDialog(index){
    dialogRef.showModal();
    showImageDialog(index);
    dialogFooterRef.innerHTML = footerdialog(index);
    name_for_img(index);
}

function closeDialog(){
    dialogRef.close();
}

function showImageDialog(index){
    let showImageRef = document.getElementById("dialogMain");
    showImageRef.innerHTML = showImage(index);
}

function showImage(index){
    return `<img src=./img/${images[index]}>`;
}

function buttonLeft(index){
    index--;
    if (index>=0) {
        openDialog(index);
    }
    else{
        index=images.length-1
        openDialog(index);
    }
}

function buttonRight(index){
    index++;
    if (index<images.length) {
        openDialog(index);
    }
    else{
        index=0;
        openDialog(index);
    }
}

function footerdialog(index){
    return `<button onclick="buttonLeft(${index})">&blacktriangleleft;</button>
                <span>${index+1}/${images.length}</span>
                <button onclick="buttonRight(${index})">&blacktriangleright;</button>`
}

function eventBubbling(event){
    event.stopPropagation();
}

const image_name = document.getElementById('name_img')
function name_for_img(index){
    image_name.innerHTML = images[index];
}