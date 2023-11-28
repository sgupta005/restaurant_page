import {initialLoad, menuLoad, aboutLoad, homeLoad} from './pageLoad.js';

initialLoad();

const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const aboutButton = document.querySelector('.about-button');

homeButton.addEventListener('click', homeLoad);
menuButton.addEventListener('click', menuLoad);
aboutButton.addEventListener('click', aboutLoad);



