// script.js
document.addEventListener('DOMContentLoaded', function() {
    const clickableText = document.getElementById('clickableText');
    const overlay = document.getElementById('overlay');

    clickableText.addEventListener('click', function() {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});
