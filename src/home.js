import homeImage from './home_banner_image.png';

export default function home(){
    const content = document.getElementById('content');
    content.innerHTML = `
    <header>
    <div class="name">Hot Burst Pizza</div>
    <nav class="nav_bar">
        <button>Home</button>
        <button>Menu</button>
        <button>Contact Us</button>
    </nav>
    </header>
    <div class="main"></div>
    `
    const main = document.querySelector('.main');
    console.log(main);
    const homeBannerImage = new Image();
    homeBannerImage.setAttribute('class', 'home-banner-image');
    homeBannerImage.src = homeImage;
    main.appendChild(homeBannerImage);

}