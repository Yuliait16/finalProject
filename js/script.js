"use strict";

let bodyes = document.querySelectorAll(`.body`);
let blocks = document.querySelector(`.wraper`).children;
blocks = Array.from(blocks).slice(2, 8);
let planItemBody = document.querySelectorAll(`.plan__item-body`);

let researches = document.querySelector(`.services__content`).children;
researches = Array.from(researches).slice(3, 6);

let viewAll = document.querySelector(`.services__button-view`);


if (document.documentElement.clientWidth <= 480) {
    for (let i of bodyes) {
        i.hidden = true;
    }
    for (let i of planItemBody) {
        i.hidden = true;
    }
    for (let i of researches) {
        i.hidden = true;
    }

    viewAll.addEventListener("click", showAll);
}


for (let i of blocks) {
    i.addEventListener(`click`, showBlock);
}
for (let i of planItemBody) {
    i.addEventListener(`click`, showPlan);
}

/* function showBlock(e) {
    if (e.target.classList.contains(`head__arrow`)) {
        let body = this.querySelector(`.body`);
        body.hidden = !body.hidden;
    }
} */

function showBlock(e) {
    let target = e.target;
    if (target.classList.contains(`head__arrow`)) {
        let body = this.querySelector(`.body`);
        body.hidden = !body.hidden;
        target.classList.toggle(`rotate`);
    }
}

function showPlan(e) {
    //let target = e.target;
    if (e.target.classList.contains(`plan__arrow`)) {
        let head = this.querySelector(`.plan__item`);
        console.log(head);
    }
}

function showAll(e) {
    for (let i of researches) {
        i.hidden = !i.hidden;
    }
}

function buttonActive(e) {
    let target = e.target;
    let buttons = document.querySelectorAll(`.plan__button`);
    for (let i of buttons) {
        i.classList.remove(`button__active`);
    }
    target.classList.add(`button__active`);
}

let planButton = document.querySelectorAll(`.plan__button`);

for (let i of planButton) {
    i.addEventListener("click", buttonActive);
}



let servicesItems = document.querySelectorAll(`.services__item`);

for (let i of servicesItems) {
    i.addEventListener("click", servicesActive);
}

function servicesActive(e) {
    let target = e.target;
    let img = e.currentTarget.querySelector(`.services__icon`).firstElementChild;
    if (target.classList.contains(`services__button`)) {
        let buttons = document.querySelectorAll(`.services__button`);
        for (let i of buttons) {
            i.parentElement.firstElementChild.firstElementChild.src = 'img/services/smartphone-black.jpg';
            i.classList.remove(`services__button-active`);
            i.classList.add(`services__button-default`);
            
            
            i.parentElement.classList.remove(`services__item-active`);
            i.parentElement.classList.add(`services__item-default`);
        }
        
        target.classList.add(`services__button-active`);
        img.src = `img/services/smartphone-white.jpg`;
        e.currentTarget.classList.remove(`services__item-default`);
        e.currentTarget.classList.add(`services__item-active`);
       
       console.log(e.currentTarget);

    }
}

/*HEADER */

const header = document.querySelector(`.header`);

window.addEventListener("scroll", function(e) {
    const scrollFromTop = document.querySelector(`html`).scrollTop;
    header.style.background = scrollFromTop > 120 ? `#b2b4b0` : `white`;
})



burger.addEventListener(`click`, showBurger);

function showBurger(e) {
    let listBurger = document.querySelector(`.header__list-burger`);
    let menu = burger.nextElementSibling;

    if (menu.classList.contains(`header__list`)) {
        menu.classList.remove(`header__list`);
        menu.classList.add(`header__list-burger`);
    } else {
        menu.classList.remove(`header__list-burger`);
        menu.classList.add(`header__list`);
    }
}

    