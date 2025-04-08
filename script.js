document.addEventListener('DOMContentLoaded', function() {
    // Controles de acessibilidade
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    
    // Controle de fonte
    let tamanhoFonte = 1;
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    
    // Modo noturno
    const alternaContraste = document.getElementById('alterna-contraste');

    // Menu acessibilidade
    botaoAcessibilidade.addEventListener('click', function() {
        this.classList.toggle('ativo');
        opcoesAcessibilidade.classList.toggle('mostrar');
    });

    // Aumentar fonte
    aumentarFonte.addEventListener('click', function() {
        if (tamanhoFonte < 1.5) {
            tamanhoFonte += 0.1;
            document.body.style.fontSize = tamanhoFonte + 'rem';
        }
    });

    // Diminuir fonte
    diminuirFonte.addEventListener('click', function() {
        if (tamanhoFonte > 0.8) {
            tamanhoFonte -= 0.1;
            document.body.style.fontSize = tamanhoFonte + 'rem';
        }
    });

    // Modo noturno
    alternaContraste.addEventListener('click', function() {
        document.body.classList.toggle('modo-noturno');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#acessibilidade')) {
            botaoAcessibilidade.classList.remove('ativo');
            opcoesAcessibilidade.classList.remove('mostrar');
        }
    });
});