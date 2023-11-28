import './css/index.css';
import './css/menu.css';

export default function createMenuPage(){
    const content = document.getElementById('content');
    const main = document.querySelector('.main');
    const heading = document.createElement('h1');
    
    heading.textContent = 'Menu Page';
    
    main.appendChild(heading);
    content.appendChild(main);
}