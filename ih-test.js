


document.getElementById('langBtn').onclick = function() {
    var menu = document.getElementById('langMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
};

// Dil değiştirme fonksiyonu
function setLanguage(lang) {
    document.querySelectorAll('[data-en][data-tr]').forEach(function(el) {
        el.textContent = el.getAttribute('data-' + lang);
    });
}

// Butonlara tıklama olayları
document.querySelector('.lang-menu button:nth-child(1)').onclick = function() {
    setLanguage('en');
};
document.querySelector('.lang-menu button:nth-child(2)').onclick = function() {
    setLanguage('tr');
};
