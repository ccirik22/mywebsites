document.addEventListener('DOMContentLoaded', () => {
    const entrybg = document.querySelector('.entrybg');
    const images = ['images/bgnew.jpg', 'images/bgnew2.jpg'];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        entrybg.style.backgroundImage = `url(${images[currentIndex]})`;
    }, 5000);

    const flags = document.querySelectorAll('.flag a');
    const infoCountries = document.querySelectorAll('.infocountry');

    // Show Europe div by default
    infoCountries.forEach(info => {
        if (info.querySelector('h3').textContent.trim() === 'Europe') {
            info.style.display = 'block';
            document.querySelector('.flag a img[src="images/europe.png"]').classList.add('active');
        } else {
            info.style.display = 'none';
        }
    });

    flags.forEach(flag => {
        flag.addEventListener('click', (event) => {
            event.preventDefault();
            const country = flag.querySelector('h3').textContent.trim();
            infoCountries.forEach(info => {
                if (info.querySelector('h3').textContent.trim() === country) {
                    info.style.display = 'block';
                } else {
                    info.style.display = 'none';
                }
            });
            document.querySelectorAll('.flag img').forEach(img => img.classList.remove('active'));
            flag.querySelector('img').classList.add('active');
        });
    });
});
