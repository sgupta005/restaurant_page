import './style.css';
import homeImage from './home_banner_image.png';

const main = document.querySelector('.main');
console.log(main);
const homeBannerImage = new Image();
homeBannerImage.setAttribute('class', 'home-banner-image');
homeBannerImage.src = homeImage;
main.appendChild(homeBannerImage);
