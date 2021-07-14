const createHome = () => {
    const home = document.createElement('div');
    home.classList.add('home');

    for (let i = 1; i <= 5; i++) {
        const img = document.createElement('img');
        img.classList.add('sliderImg');
        img.setAttribute('src', `./images/slide${i}.jpg`);
        img.setAttribute('id', `img${i}`);
        home.appendChild(img);
    }

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = `
    After six successful years in New York, chef Tom Colicchio brought Craft’s pioneering approach to the West Coast. Century City is now where you can enjoy Tom Colicchio’s signature ‘Whats Local Is Best’ cooking style and our ‘Make People Happy’ brand of hospitality. 
    
    Craft’s emphasis on seasonal dining and warm hospitality has always been a natural West Coast fit and can now be enjoyed on our private patio or back in our Main Dining Room for safety-conscious dinner. CLA To-Go is back offering pickup & local delivery to help you fill your home tables with all your Tom Colicchio favorites.`;


    home.appendChild(paragraph);

    return home;
}

const loadHome = () => {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;