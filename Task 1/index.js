const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.getElementById('current-time');
    const currentDayElement = document.getElementById('current-day');

    function updateTimeAndDay() {
        const now = new Date();
        currentTimeElement.textContent = now.toUTCString().slice(17, 25);
        currentDayElement.textContent = now.toLocaleString('en-US', { weekday: 'long' });
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
