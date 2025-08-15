const Tr = document.querySelector('#Tr');
const Eng = document.querySelector('#Eng');
const Ru = document.querySelector('#Ru');

const elementsToTranslate = document.querySelectorAll('[data-tr]');

Tr.addEventListener('click', function () {
    elementsToTranslate.forEach(element => {
        element.innerHTML = element.getAttribute('data-tr');
      
    });
});

Eng.addEventListener('click', function () {
    elementsToTranslate.forEach(element => {
        element.innerHTML = element.getAttribute('data-en');
    
    });
});

Ru.addEventListener('click', function () {
    elementsToTranslate.forEach(element => {
        element.innerHTML = element.getAttribute('data-ru');
        
    });
});
const backi = document.getElementById('backi');
const forwardi = document.getElementById('forwardi');
const nav = document.querySelector('nav');
const firstText = document.querySelector('.welcome .first');
const secondText = document.querySelector('.welcome .second');
const thirdText = document.querySelector('.welcome .third');

// Arka plan resimleri dizisi
const backgrounds = [
    "url('images/leather.jpg')", // Varsayılan arka plan
    "url('images/textbg.jpg')",   // İlk resim
    "url('images/textbg1.jpg')"   // İkinci resim
];

let currentIndex = 0;
let interval;

// Arka plan resmini ve ilgili metni değiştirme fonksiyonu
function changeBackground(index) {
    currentIndex = (index + backgrounds.length) % backgrounds.length;
    nav.style.backgroundImage = backgrounds[currentIndex];
    updateTextVisibility(currentIndex);
}

// Metin görünürlüğünü güncelleyen fonksiyon
function updateTextVisibility(index) {
    firstText.style.display = 'none';
    secondText.style.display = 'none';
    thirdText.style.display = 'none';

    if (index === 0) {
        firstText.style.display = 'block';
    } else if (index === 1) {
        secondText.style.display = 'block';
    } else if (index === 2) {
        thirdText.style.display = 'block';
    }
}

// Geri butonuna basıldığında arka plan resmini önceki resimle değiştirme
backi.addEventListener('click', function() {
    changeBackground(currentIndex - 1);
    resetInterval();
});

// İleri butonuna basıldığında arka plan resmini sonraki resimle değiştirme
forwardi.addEventListener('click', function() {
    changeBackground(currentIndex + 1);
    resetInterval();
});

// 4 saniyede bir arka plan resmini otomatik değiştirme
function startInterval() {
    interval = setInterval(function() {
        changeBackground(currentIndex + 1);
    }, 5000);
}

// Butona basıldığında interval'i sıfırlama
function resetInterval() {
    clearInterval(interval);
    startInterval();
}

// Başlangıçta ilk arka plan ve metni ayarla
changeBackground(currentIndex);
startInterval();
