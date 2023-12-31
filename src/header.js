export default function createHeader(){
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const name_div = document.createElement('div');
    const navbar = document.createElement('nav');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');

    name_div.setAttribute('class', 'name');
    navbar.setAttribute('class', 'nav_bar');
    name_div.textContent = 'Hot Burst Pizza';
    homeButton.setAttribute('class', 'home-button');
    menuButton.setAttribute('class', 'menu-button');
    aboutButton.setAttribute('class', 'about-button');
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    aboutButton.textContent = 'About';

    navbar.append(homeButton,menuButton,aboutButton);
    header.append(name_div, navbar);
    content.appendChild(header);
}
