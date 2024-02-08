export function criarElementoMenu() {
    const menuNavegacao = document.createElement('nav');
    menuNavegacao.classList.add('menu');
    menuNavegacao.innerHTML = `
        <img src="./public/assets/images/Logo-01.png" alt="Logo" />
        <ul class="menu__nav">
            <li onclick="active(this)"><a href="#">Home</a></li>
            <li onclick="active(this)"><a href="#" onclick="scrollElemento('.card__sobre')">Sobre</a></li>
            <li onclick="active(this)"><a href="#" onclick="scrollElemento()">Experiências</a></li>
            <li onclick="active(this)"><a href="#" onclick="scrollElemento()">Projetos</a></li>
            <li onclick="active(this)"><a href="#" onclick="scrollElemento()">Educação</a></li>
            <li onclick="active(this)"><a href="#" onclick="scrollElemento()">Contato</a></li>
        <ul>
    `;
    return menuNavegacao;
}
