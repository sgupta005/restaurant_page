import homeImage from './images/home_banner_image.jpeg';
import './css/home.css';
import './css/index.css';

export default function createHomePage(){
    const content = document.getElementById('content');
    const main = document.querySelector('.main');
    const homeBannerImage = new Image();
    const overlayText = document.createElement('div');
    const title = document.createElement('h1');
    const slogan = document.createElement('p');

    homeBannerImage.setAttribute('class', 'home-banner-image');
    homeBannerImage.src = homeImage;
    overlayText.setAttribute('class', 'text-overlay');
    title.textContent = 'Hot Burst Pizza';
    slogan.textContent = 'Happy Treats For Happy Hearts';
    
    overlayText.append(title,slogan);
    main.append(homeBannerImage, overlayText);
    content.appendChild(main);

}