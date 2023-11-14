document.addEventListener('DOMContentLoaded', function () {
    const heart = document.querySelector('.heart');
    const heartContainer = document.querySelector('.heart-container');

    // Add pulsating animation to the heart
    heart.style.animation = 'pulse 1.5s infinite';

    // Add neon border animation to the heart container
    heartContainer.style.boxShadow = '0 0 10px #ff65a3';
    setInterval(() => {
        heartContainer.style.boxShadow = '0 0 10px #ff65a3';
        setTimeout(() => {
            heartContainer.style.boxShadow = '0 0 20px #ff65a3';
        }, 500); // Adjust the duration as needed
    }, 2000); // Adjust the interval as needed
});
