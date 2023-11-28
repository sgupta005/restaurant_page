import './css/index.css';
import './css/about.css';

export default function createAboutPage(){
    const content = document.getElementById('content');
    const main = document.querySelector('.main');
    const heading = document.createElement('h1');
    
    heading.textContent = 'About Page';
    
    main.appendChild(heading);
    content.appendChild(main);
}