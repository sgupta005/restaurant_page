import pizza from './images/menu/pepperoni pizza.jpg';

export default function createMenuPage(){
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    const menu = document.createElement('div')

    menu.setAttribute('class', 'menu');
    pageContent.setAttribute('class', 'page-content');
    
    menu.appendChild(
        createMenuItem(
            'Margerita Pizza',
            '130',
            'Lorem Ipusf sdfjlkf df dsf sfsljlk'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Margerita Pizza',
            '130',
            'Lorem Ipusf sdfjlkf df dsf sfsljlk'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Margerita Pizza',
            '130',
            'Lorem Ipusf sdfjlkf df dsf sfsljlk'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Margerita Pizza',
            '130',
            'Lorem Ipusf sdfjlkf df dsf sfsljlk'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Margerita Pizza',
            '130',
            'Lorem Ipusf sdfjlkf df dsf sfsljlk'
        )
    );
    menu.appendChild(
        createMenuItem(
            'Margerita Pizza',
            '130',
            'Lorem Ipusf sdfjlkf df dsf sfsljlk'
        )
    );
    
    pageContent.appendChild(menu);
    content.appendChild(pageContent);
}

function createMenuItem(name, price, description){
    const menuItem = document.createElement('div');
    menuItem.setAttribute('class', 'menu-item');

    const pizzaName = document.createElement('h2');
    pizzaName.setAttribute('class', 'pizza-name');
    pizzaName.textContent = name;

    const pizzaDescription = document.createElement('p');
    pizzaDescription.setAttribute('class', 'description');
    pizzaDescription.textContent = description;

    const pizzaPrice = document.createElement('p');
    pizzaPrice.setAttribute('class', 'price');
    pizzaPrice.textContent = `₹${price}`;

    const pizzaImage = new Image();
    pizzaImage.setAttribute('class', 'pizza-image');
    pizzaImage.src = pizza;
    pizzaImage.alt = 'name';

    menuItem.append(pizzaImage, pizzaName, pizzaPrice, pizzaDescription);

    console.log(menuItem);
    return menuItem;

}