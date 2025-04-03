document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainMenu = document.getElementById("mainMenu");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".close");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle del menú principal
  if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", function () {
      mainMenu.classList.toggle("active");

      if (mainMenu.classList.contains("active")) {
        hamburger.style.display = "none";
        closeIcon.style.display = "inline";
      } else {
        hamburger.style.display = "inline";
        closeIcon.style.display = "none";
      }
    });
  }

  // Manejo de submenús en móviles
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");
    const submenu = dropdown.querySelector(".dropdown-menu");

    if (submenu) {
      link.addEventListener("click", function (event) {
        if (window.innerWidth <= 1024) {
          event.preventDefault(); // Evita la navegación inmediata
          dropdown.classList.toggle("active");

          // Mostrar/ocultar submenú
          submenu.style.display =
            submenu.style.display === "block" ? "none" : "block";
        }
      });
    }
  });

    // Cerrar el menú al hacer clic en un enlace (solo en móviles)
    document.querySelectorAll('#mainMenu a').forEach(link => {
        link.addEventListener('click', function (event) {
            if (window.innerWidth <= 1024) {
                const parentDropdown = this.closest('.dropdown');

                // Si es un enlace dentro de un submenú, no cerrar el menú principal
                if (parentDropdown && parentDropdown.classList.contains('active')) {
                    return;
                }

                // Si es un enlace normal, cerrar el menú
                mainMenu.classList.remove('active');
                hamburger.style.display = 'inline';
                closeIcon.style.display = 'none';
            }
        });
    });
});
