document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger');

    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {

        nav.classList.toggle('active');

        burger.classList.toggle('toggle');

    });

    // Sample data for stores

    const stores = [

        { name: 'breakfast', img: 'breakfast.jpg'
       },
      {name: 'lunch', img: 'lunch.jpg' },
      {name: 'dinner',img: 'dinner.jpg'},

        { name: 'Fresh Produce', img: 'produce.jpg' },

        { name: 'Electronics Hub', img: 'electronics.jpg' },

        // Add more stores as needed

    ];

    const storeContainer = document.querySelector('.store-container');

    stores.forEach(store => {

        const storeItem = document.createElement('div');

        storeItem.classList.add('store-item');

        storeItem.innerHTML = `

            <img src="${store.img}" alt="${store.name}">

            <h3>${store.name}</h3>

        `;

        storeContainer.appendChild(storeItem);

    });

});

