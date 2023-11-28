import homeImage from './images/home_banner_image.jpeg';

export default function createHomePage(){
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    const homeImageContainer = document.createElement('div');
    const homeBannerImage = new Image();
    const overlayText = document.createElement('div');
    const title = document.createElement('h1');
    const slogan = document.createElement('p');

    pageContent.setAttribute('class', 'page-content');
    homeImageContainer.setAttribute('class', 'home-image-container');
    homeBannerImage.setAttribute('class', 'home-banner-image');
    homeBannerImage.src = homeImage;
    overlayText.setAttribute('class', 'text-overlay');
    title.textContent = 'Hot Burst Pizza';
    slogan.textContent = 'Happy Treats For Happy Hearts';
    
    overlayText.append(title,slogan);
    homeImageContainer.append(homeBannerImage, overlayText);
    pageContent.appendChild(homeImageContainer);
    content.appendChild(pageContent);

}