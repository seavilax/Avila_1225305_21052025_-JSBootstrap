$(document).ready(function() {
    // Función para cambiar al modo claro
    $('#lightMode').click(function() {
        $('body').removeClass('dark-theme');
        localStorage.setItem('theme', 'light');
    });

    // Función para cambiar al modo oscuro
    $('#darkMode').click(function() {
        $('body').addClass('dark-theme');
        localStorage.setItem('theme', 'dark');
    });

    // Verificar el tema guardado al cargar la página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        $('body').addClass('dark-theme');
    }
}); 