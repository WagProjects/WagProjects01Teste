function scrollElemento(seletor) {
    const targetElement = document.querySelector(seletor);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
    }
    else {
        console.error(`Elemento ${seletor} não encontrado.`);
    }
}
