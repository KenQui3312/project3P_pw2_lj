// public/js/navbar.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');
    const hamburger = document.querySelector('.hamburger');
    const closeIcon = document.querySelector('.close');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            // Alternar visibilidad del menú
            mainMenu.classList.toggle('active');
            
            // Alternar íconos
            if (mainMenu.classList.contains('active')) {
                hamburger.style.display = 'none';
                closeIcon.style.display = 'inline';
            } else {
                hamburger.style.display = 'inline';
                closeIcon.style.display = 'none';
            }
        });

        // Cerrar menú al hacer clic en enlaces (mobile)
        document.querySelectorAll('#mainMenu a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 1024) {
                    mainMenu.classList.remove('active');
                    hamburger.style.display = 'inline';
                    closeIcon.style.display = 'none';
                }
            });
        });
    }
});