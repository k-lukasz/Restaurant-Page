const createMenuItem = (title, description, money) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = title;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    const price = document.createElement('p');
    price.textContent = money;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(price);

    return menuItem;
}

const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem('MARKET GREENS', 'Tomatillo, Pickled Onion', '$18'));

    menu.appendChild(createMenuItem('WILD ARUGULA SALAD', 'Lemon Confit, Pine Nuts', '$18'));

    menu.appendChild(createMenuItem('SUMMER MELON', 'Feta, Golden Raisin', '$20'));

    menu.appendChild(createMenuItem('AHI TUNA CRUDO', 'Jalapeño Ponzu, Crispy Rice Noodle', '$22'));

    menu.appendChild(createMenuItem('DUNGENESS CRAB', 'Avocado Mousse, Smoked Salmon Roe', '$24'));

    menu.appendChild(createMenuItem('PORK BELLY', 'Date, Peach', '$22'));

    return menu;
}

const loadMenu = () => {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;