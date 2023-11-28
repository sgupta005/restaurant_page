export default function createMenuPage(){
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    const heading = document.createElement('h1');
    
    pageContent.setAttribute('class', 'page-content');
    heading.textContent = 'Menu Page';
    
    pageContent.appendChild(heading);
    content.appendChild(pageContent);
}