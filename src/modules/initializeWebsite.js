const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = './images/logo.png'

    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

const setActiveButton = (button) => {
    const buttons = document.querySelectorAll('.button-nav');
    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

const createNav = () => {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('button-nav');
    homeBtn.classList.add('active');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeBtn);
        // loadHome();
    })

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('button-nav');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuBtn);
        // menuBtn();
    })

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('button-nav');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactBtn);
        // contactBtn();
    })

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    for (let i = 1; i <= 5; i++) {
        const img = document.createElement('img');
        img.classList.add('sliderImg');
        img.setAttribute('src', `./images/slide${i}.jpg`);
        img.setAttribute('id', `img${i}`);
        main.appendChild(img);
    }

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = `
    After six successful years in New York, chef Tom Colicchio brought Craft’s pioneering approach to the West Coast. Century City is now where you can enjoy Tom Colicchio’s signature ‘Whats Local Is Best’ cooking style and our ‘Make People Happy’ brand of hospitality. 
    
    Craft’s emphasis on seasonal dining and warm hospitality has always been a natural West Coast fit and can now be enjoyed on our private patio or back in our Main Dining Room for safety-conscious dinner. CLA To-Go is back offering pickup & local delivery to help you fill your home tables with all your Tom Colicchio favorites.`;


    main.appendChild(paragraph);

    return main;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p')
    copyright.textContent = 'Copyright © 2021 Me'

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/siIas';

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}

const initializeWebsite = () => {
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default initializeWebsite;