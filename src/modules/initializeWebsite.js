const createHeader = (id, text) => {
    const header = document.createElement('header');
    header.setAttribute('id', id);

    const logo = document.createElement('div');
    logo.textContent = text;

    header.appendChild(logo);

    return header;
}

const createBtn = (id, text) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);

    const span = document.createElement('span');
    span.textContent = text;

    btn.appendChild(span);
    btn.classList.add('tab');

    return btn;
}

const createNav = (id) => {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = createBtn('home', 'home');
    const menuBtn = createBtn('menu', 'menu');
    const contactBtn = createBtn('contact', 'contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

const createMain = (id) => {
    const main = document.createElement('main');
    main.setAttribute('id', id);

    return main;
}

const createFooter = (id, text) => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);

    const h3 = document.createElement('h3');
    h3.textContent = text;

    footer.appendChild(h3);

    return footer;
}

const initializeWebsite = () => {
    // Header
    const content = document.querySelector('#content');
    const header = createHeader('header', 'Restauration');
    header.innerHTML = `<img src="./images/logo.png" alt="" />`
    content.appendChild(header);

    // Nav
    const nav = createNav('nav');
    content.appendChild(nav);

    // Main
    const main = createMain('main');
    content.appendChild(main);

    // Footer
    const footer = createFooter('footer', 'Made by Me');
    content.appendChild(footer);

    console.log('hi');
}

export default initializeWebsite;