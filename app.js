document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('open');
});

// JavaScript (app.js)

document.addEventListener('DOMContentLoaded', function() {
    // Add class to trigger logo animation after a short delay
    setTimeout(function() {
        var logoContainer = document.getElementById('logo-container');
        logoContainer.classList.remove('hidden'); // Remove 'hidden' class to reveal logo
        logoContainer.classList.add('show'); // Add 'show' class to animate logo sliding in
    }, 500); // Delay of 500 milliseconds
});

// app.js

document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Check if the device is a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Check device width and set background accordingly
function setBackground() {
    const body = document.querySelector('body');
    if (window.innerWidth <= 768) {
        body.style.backgroundImage = 'url("media/skyline.png")';
    } else {
        body.style.backgroundImage = 'url("media/26.mp4")';
    }
}

// Call the function initially and on window resize
setBackground();
window.addEventListener('resize', setBackground);

