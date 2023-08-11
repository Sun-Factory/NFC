document.addEventListener('DOMContentLoaded', function () {
    const langButtons = document.querySelectorAll('.lang');
    langButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });

    function translatePage(lang) {
        // Aqui você pode adicionar o código para traduzir o conteúdo da página para a linguagem selecionada
        // Por exemplo, você pode ter uma função para atualizar o texto com base na linguagem escolhida
        // Exemplo simples:
        const translations = {
            pt: {
                welcome: 'Bem-vindo'
                // Adicione mais traduções aqui
            },
            en: {
                welcome: 'Welcome'
                // Adicione mais traduções aqui
            },
            // Adicione mais idiomas conforme necessário
        };

        const translatedElements = document.querySelectorAll('.translate');
        translatedElements.forEach(function (element) {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }
});
