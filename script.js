document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('stars');
    const isMobile = window.innerWidth <= 768;
    const numberOfStars = isMobile ? 60 : 150;

    for (let i = 0; i < numberOfStars; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 2.5}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }

    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.left = `-${Math.random() * 200}px`;
        starsContainer.appendChild(shootingStar);

        setTimeout(() => {
            shootingStar.remove();
        }, 5000);
    }

    const shootingStarInterval = isMobile ? 5000 : 3000;
    setInterval(createShootingStar, shootingStarInterval);


    const revealButton = document.querySelector('.reveal-button');
    const hiddenMessage = document.getElementById('hidden-message');

    const giftItems = [
        { src: 'images/100.png', message: 'عيديتج 100 دولاررر, لا تصرفيها بمكان واحد. :>' },
        { src: 'images/1000.jpg', message: ' .عيديتج الفف دينار عراقي موثق' },
        { src: 'images/250.jpg', message: ' .عيديتج ربع 😭😭😭' },
        { src: 'images/25000.jpg', message: ' .عيديج معجونية 🤗🤗' },
        { src: 'images/50000.jpg', message: ' عيديتج 50 الفف هذه العملة محد شايفها بالعراق 😌😌' }
    ];

    function getRandomGift() {
        const randomIndex = Math.floor(Math.random() * giftItems.length);
        return giftItems[randomIndex];
    }

    if (revealButton && hiddenMessage) {
        revealButton.addEventListener('click', function() {
            const gift = getRandomGift();
            hiddenMessage.innerHTML = `
                <p>${gift.message} حاولي مره ثانية.</p>
                <div class="gift-display">
                    <img src="${gift.src}" alt="هدية" class="gift-image" />
                    <img src="images/koka_gift.png" alt="كوكا" class="koka-gift-image" />
                </div>
            `;
            hiddenMessage.style.display = 'block';
            hiddenMessage.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], {
                duration: 800,
                easing: 'ease-in-out'
            });
        });
    }
});