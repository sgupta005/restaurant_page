export default function createAboutPage(){
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    const heading = document.createElement('h1');
    
    pageContent.setAttribute('class', 'page-content');
    heading.textContent = 'About Page';
    
    pageContent.appendChild(heading);
    content.appendChild(pageContent);
}