/*SISTEMA DE SLIDESHOW*/

'use strict';

const images = [
    {'id': '1', 'url': 'imagens/maquiagem1.jpeg'},
    {'id': '2', 'url': 'imagens/maquiagem2.jpeg'},
    {'id': '3', 'url': 'imagens/maquiagem3.jpeg'},
    {'id': '4', 'url': 'imagens/maquiagem4.jpeg'},
    {'id': '5', 'url': 'imagens/maquiagem5.jpeg'},
    {'id': '6', 'url': 'imagens/maquiagem6.jpeg'},
    {'id': '7', 'url': 'imagens/maquiagem7.jpeg'},
    {'id': '8', 'url': 'imagens/maquiagem8.jpeg'},
]

const containerItems = document.querySelector("#container-items")

const loadImages = (images, container) => {
images.forEach ( image => {
    container.innerHTML += `<div class="item">
        <img src='${image.url}'>
        </div>`
})
}
loadImages(images, containerItems)
let items = document.querySelectorAll(".item")

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll(".item");
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click', next);


/*******************************************************************************************/



const images_2 = [
    {'id': '1', 'url': 'imagens/epilacao1.jpeg'},
    {'id': '2', 'url': 'imagens/epilacao2.jpeg'},
    {'id': '3', 'url': 'imagens/epilacao3.jpeg'},
   
]

const containerItems_2 = document.querySelector("#container-items2")

const loadImages_2 = (images_2, container_2) => {
images_2.forEach ( image_2 => {
    container_2.innerHTML += `<div class="item-2">
        <img src='${image_2.url}'>
        </div>`
})
}
loadImages_2(images_2, containerItems_2)
let items_2 = document.querySelectorAll(".item-2")

const previous2 = () => {
    containerItems_2.appendChild(items_2[0]);
    items_2 = document.querySelectorAll(".item-2");
}

const next2 = () => {
    const lastItem_2 = items_2[items_2.length - 1];
    containerItems_2.insertBefore(lastItem_2, items_2[0]);
    items_2 = document.querySelectorAll('.item-2');
}

document.querySelector('#previous2').addEventListener('click',previous2);
document.querySelector('#next2').addEventListener('click', next2);


/*******************************************************************************************/



const images_3 = [
    {'id': '1', 'url': 'imagens/sombra1.jpeg'},
    {'id': '2', 'url': 'imagens/sombra2.jpeg'},
    {'id': '3', 'url': 'imagens/sombra3.jpeg'},
    {'id': '4', 'url': 'imagens/sombra4.jpeg'},
    {'id': '5', 'url': 'imagens/sombra5.jpeg'},
    {'id': '6', 'url': 'imagens/sombra6.jpeg'},
]

const containerItems_3 = document.querySelector("#container-items3")

const loadImages_3 = (images_3, container_3) => {
images_3.forEach ( image_3 => {
    container_3.innerHTML += `<div class="item-3">
        <img src='${image_3.url}'>
        </div>`
})
}
loadImages_3(images_3, containerItems_3)
let items_3 = document.querySelectorAll(".item-3")

const previous3 = () => {
    containerItems_3.appendChild(items_3[0]);
    items_3 = document.querySelectorAll(".item-3");
}

const next3 = () => {
    const lastItem_3 = items_3[items_3.length - 1];
    containerItems_3.insertBefore(lastItem_3, items_3[0]);
    items_3 = document.querySelectorAll('.item-3');
}

document.querySelector('#previous3').addEventListener('click',previous3);
document.querySelector('#next3').addEventListener('click', next3);


