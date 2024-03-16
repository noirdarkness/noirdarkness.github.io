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

// Set background image or video based on device
function setBackground() {
    var body = document.querySelector('body');
    if (isMobileDevice()) {
        body.style.backgroundImage = "url('media/skyline.png')";
    } else {
        body.style.backgroundImage = "url('media/26.mp4')";
    }
}

// Call setBackground function when the page loads
window.onload = function() {
    setBackground();
};
