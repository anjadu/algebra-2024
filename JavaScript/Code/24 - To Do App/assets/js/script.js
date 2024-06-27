// API Endpoint
const api_url = 'https://api.edu.skuflic.com';

// Global variables
const date = new Date();
const audio = new Audio('assets/audio/ping.mp3');
const options = { month: 'long', day: 'numeric', year: 'numeric' };

const progressEl = document.querySelector('.percentage');

// Logo Animation using anime.js library
anime({
    targets: '.loading',
    direction: 'alternate',
    loop: false,
    duration: 1000,
    update: function (anim) {
        progressEl.innerHTML = Math.round(anim.progress) + '%';
    },
});

// Hide the loading screen after the animation is done
setTimeout(() => {
    document.getElementsByClassName('loading')[0].style.display = 'none';
}, 1000);

// Modal Functionality
const modal = document.getElementById('modal');
const button = document.getElementById('button');
const span = document.querySelector('.close-modal');

function showModal() {
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

button.addEventListener('click', showModal);
span.addEventListener('click', hideModal);

window.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target === modal) {
        console.log(event.target);
        hideModal();
    }
});

// Copyright Year - Footer
document.getElementById('year').innerText = date.getFullYear();

// Greeting Function
(function () {
    const icon = document.getElementById('icon');
    const hours = date.getHours();
    let text;

    if (hours < 12) {
        icon.innerHTML = 'routine';
        text = 'Good Morning';
    } else if (hours < 18) {
        icon.innerHTML = 'clear_day';
        text = 'Good Afternoon';
    } else {
        icon.innerHTML = 'dark_mode';
        text = 'Good Evening';
    }

    document.getElementById('greeting').innerHTML = text;
})();

function setUser() {
    let user = document.getElementById('name').value;
    localStorage.setItem('user', user);
    document.getElementById('user').innerHTML = user;
    hideModal();
    document.getElementById('name').value = '';
}

(function () {
    const user = localStorage.getItem('user');
    document.getElementById('user').innerText = !user
        ? 'Hey there stranger'
        : user;
})();
