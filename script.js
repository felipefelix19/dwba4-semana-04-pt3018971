document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#menu li");
    const conteudo = document.getElementById("conteudo");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Impede que o link seja seguido

            // Limpa o conteúdo atual
            conteudo.innerHTML = "";

            // Carrega o conteúdo correspondente
            const pagina = item.textContent.toLowerCase() + ".html";
            fetch(pagina)
                .then(function (response) {
                    return response.text();
                })
                .then(function (html) {
                    conteudo.innerHTML = html;
                });
        });
    });
});

// Captura os links do menu
const menuLinks = document.querySelectorAll('.menu a');

// Função para adicionar a classe "ativo" ao link clicado
function setActiveLink(event) {
  // Remove a classe "ativo" de todos os links do menu
  menuLinks.forEach((link) => {
    link.classList.remove('ativo');
  });

  // Adiciona a classe "ativo" ao link clicado
  event.target.classList.add('ativo');
}

// Adiciona um ouvinte de evento de clique a cada link do menu
menuLinks.forEach((link) => {
  link.addEventListener('click', setActiveLink);
});
