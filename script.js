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

const dialogRef = document.getElementById("pictureDialog");
const dialogFooterRef = document.getElementById("dialogFooter");
const dialogHeaderRef = document.getElementById("dialogHeader");
const dialogImageName = document.getElementById('name_img')

function init() {
    let imageRef = document.getElementById('image_load');
    for (let index = 0; index < images.length; index++) {
        imageRef.innerHTML += loadImages(index);
    }
}

function loadImages(index) {
    return `<button aria-haspopup="dialog" aria-controls="pictureDialog" onclick="openDialog(${index}), eventBubbling(event)">
            <img src=./img/${images[index]} alt="Image ${images[index]}">
            </button>`;
}

function openDialog(index) {
    dialogRef.showModal();
    dialogRef.focus();
    showImageDialog(index);
    dialogFooterRef.innerHTML = setfooterdialog(index);
    setTitleDialog(index);
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

function showPreviousImageDialog(index) {
    index--;
    if (index >= 0) {
        openDialog(index);
    }
    else {
        index = images.length - 1;
        openDialog(index);
    }
}

function showNextImageDialog(index) {
    index++;
    if (index < images.length) {
        openDialog(index);
    }
    else {
        index = 0;
        openDialog(index);
    }
}

function setfooterdialog(index) {
    return `<button aria-label="Dialog switch image left" onclick="showPreviousImageDialog(${index})" class="leftRightButton">
                &blacktriangleleft;
            </button>
            <span aria-label="Index of the selected image" id="dialogspan" data-index=${index}>
                ${index + 1}/${images.length}
            </span>
            <button aria-label="Dialog switch image right" onclick="showNextImageDialog(${index})" class="leftRightButton">
                &blacktriangleright;
            </button>`
}

function setTitleDialog(index) {
    dialogImageName.innerHTML = images[index];
}

function eventBubbling(event) {
    event.stopPropagation();
}

function pressArrowKey(event) {
    const spanElementIndex = document.getElementById('dialogspan');
    index = spanElementIndex.dataset.index;
    if (event.key === 'ArrowLeft') {
            showPreviousImageDialog(index);
    }
    if (event.key === 'ArrowDown') {
            showPreviousImageDialog(index);
    }
    if (event.key === 'ArrowRight') {
            showNextImageDialog(index);
    }
    if (event.key === 'ArrowUp') {
            showNextImageDialog(index);
    }
}