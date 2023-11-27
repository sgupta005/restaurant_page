import homeImage from './home_banner_image.jpeg';

export default function home(){
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `
    <header>
    <div class="name">Hot Burst Pizza</div>
    <nav class="nav_bar">
        <button>Home</button>
        <button>Menu</button>
        <button>Contact Us</button>
    </nav>
    </header>
    <div class="main">
        <div class="text-overlay">
            <h1>Hot Burst Pizza</h1>
            <p>Hot Treats For Happy Hearts</p>
        </div>
    </div>
    `
    const main = document.querySelector('.main');
    console.log(main);
    const homeBannerImage = new Image();
    homeBannerImage.setAttribute('class', 'home-banner-image');
    homeBannerImage.src = homeImage;
    main.appendChild(homeBannerImage);

}