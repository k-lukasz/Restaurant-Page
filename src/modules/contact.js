const createContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 123 456 789';

    const adress = document.createElement('p');
    adress.textContent = 'Adress: 10100 Constellation Boulevard, Los Angeles, CA 90067';

    const localization = document.createElement('img');
    localization.src = './images/localization.png';
    localization.alt = 'Los Angeles Craft';

    contact.appendChild(phone);
    contact.appendChild(adress);
    contact.appendChild(localization);

    return contact;
}

const loadContact = () => {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;