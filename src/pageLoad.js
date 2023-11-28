import createHeader from './header.js';
import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createAboutPage from './about.js';

export function initialLoad(){
    createHeader();
    createHomePage();
}

export function homeLoad(){
    clearContent();
    createHomePage();
}

export function menuLoad(){
    clearContent();
    createMenuPage();
}

export function aboutLoad(){
    clearContent();
    createAboutPage();
}

function clearContent(){
    const content = document.getElementById('content');
    const pageContent = document.querySelector('.page-content');
    
    if (pageContent){
        content.removeChild(pageContent);
    }
}
