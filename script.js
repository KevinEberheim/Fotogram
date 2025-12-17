let images = ["christmas.jpg",
    "christmas_cookies.jpg",
    "christmas_gifts.jpg",
    "christmas_tree.jpg",
    "christmas_village.jpg",
    "merry_christmas.jpg",
    "moon.png",
    "santa_claus.jpg",
    "snowflake.jpg",
    "star.jpg",
    "winter.jpg",
    "winter_landscape.jpg"];

function init() {
    let imageRef = document.getElementById('image_load');
    for (let index = 0; index < images.length; index++) {
        imageRef.innerHTML += load_images(index);

    }
}

function load_images(index) {
    return `<button aria-haspopup="dialog" aria-controls="pictureDialog" onclick="openDialog(${index}), eventBubbling(event)"><img src=./img/${images[index]} alt="Image ${images[index]}"></button>`;
}

const dialogRef = document.getElementById("pictureDialog");
const dialogFooterRef = document.getElementById("dialogFooter")
const dialogHeaderRef = document.getElementById("dialogHeader")
function openDialog(index) {
    dialogRef.showModal();
    showImageDialog(index);
    dialogFooterRef.innerHTML = footerdialog(index);
    dialogHeaderRef.innerHTML = headerdialog(index);
}

function closeDialog() {
    dialogRef.close();
}

function showImageDialog(index) {
    let showImageRef = document.getElementById("dialogMain");
    showImageRef.innerHTML = showImage(index);
}

function showImage(index) {
    return `<img src=./img/${images[index]} alt="Image ${images[index]}">`;
}

function buttonLeft(index) {
    index--;
    if (index >= 0) {
        openDialog(index);
    }
    else {
        index = images.length - 1
        openDialog(index);
    }
}

function buttonRight(index) {
    index++;
    if (index < images.length) {
        openDialog(index);
    }
    else {
        index = 0;
        openDialog(index);
    }
}

function footerdialog(index) {
    return `<button aria-label="Dialog switch image left" onclick="buttonLeft(${index})" class="leftRightButton">&blacktriangleleft;</button>
                <span aria-label="Index of the selected image" id="dialogspan" data-index=${index}>${index + 1}/${images.length}</span>
                <button aria-label="Dialog switch image right" onclick="buttonRight(${index})" class="leftRightButton">&blacktriangleright;</button>`
}

function headerdialog(index) {
    return `<h2 id="name_img">${images[index]}</h2>
                <button aria-label="Dialog close" onclick="closeDialog()" class="closeButton">&times;</button>`
}

function eventBubbling(event) {
    event.stopPropagation();
}

function pressArrow (event) {
    const spanElementIndex = document.getElementById('dialogspan');
    index = spanElementIndex.dataset.index;
    if (event.key === 'ArrowLeft') {
            buttonLeft(index);
    }
    if (event.key === 'ArrowRight') {
            buttonRight(index);
    }
}