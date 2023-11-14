document.addEventListener('DOMContentLoaded', function () {
    
    function createStars() {
        const container = document.querySelector('.stars-container');
        for (let i = 0; i < 1000; i++) { // Adjust the number of stars as needed
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            container.appendChild(star);
        }
    }

    
    createStars();
});
