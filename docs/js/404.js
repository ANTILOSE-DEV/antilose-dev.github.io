// Обработка 404 ошибок для GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, является ли текущая страница 404 ошибкой
    if (document.title.includes('404') || 
        window.location.pathname.includes('404') ||
        document.body.innerHTML.includes('404')) {
        
        // Перенаправляем на нашу кастомную 404 страницу
        if (!window.location.pathname.includes('404.html')) {
            window.location.href = '/404.html';
        }
    }
});

// Альтернативный метод для обработки несуществующих страниц
if (window.location.pathname !== '/' && 
    !window.location.pathname.includes('.html') &&
    !window.location.pathname.includes('game/') &&
    !window.location.pathname.includes('css/') &&
    !window.location.pathname.includes('js/')) {
    
    // Проверяем существование страницы
    fetch(window.location.pathname + '.html')
        .then(response => {
            if (response.status === 404) {
                window.location.href = '/404.html';
            }
        })
        .catch(() => {
            window.location.href = '/404.html';
        });
}
