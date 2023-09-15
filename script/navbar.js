// Função para verificar a altura da página e alterar a classe da barra de navegação
function toggleNavbarSolidClass() {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const collapse = document.querySelector('.navbar-collapse');
    if (window.scrollY > 700) {
        navbar.classList.add('solid');
        logo.classList.add('solid');
        collapse.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        logo.classList.remove('solid');
        collapse.classList.remove('solid');
    }
}

// Adicionar um ouvinte de evento de rolagem para chamar a função
window.addEventListener('scroll', toggleNavbarSolidClass);
