import createHeader from './header.js';
import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createAboutPage from './about.js';

export function initialLoad(){
    createHeader();
    createHomePage();
}

export function homeLoad(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    createHomePage();
}

export function menuLoad(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    createMenuPage();
}

export function aboutLoad(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    createAboutPage();
}