document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.contenedor-menu');
    const menu2 = document.querySelector('.header');
    const menu3=document.querySelector('.contenedor-social-header');
    menu.classList.toggle('active'); 
    menu2.classList.toggle('active2');
    menu3.classList.toggle('active3');
});

const loadTheme = () => {
   
    
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
};

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');

    // Cambiar el ícono
    if (isLightMode) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
});

loadTheme();
