document.addEventListener('DOMContentLoaded', function() {
    // Controle de tamanho da fonte
    let tamanhoAtualFonte = 1;
    const aumentarFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    
    // Botão de acessibilidade
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    
    // Botão de contraste
    const modoNoturnoBotao = document.getElementById('modo-noturno');

    // Alternar visibilidade das opções
    botaoAcessibilidade.addEventListener('click', function() {
        this.classList.toggle('ativo');
        opcoesAcessibilidade.classList.toggle('mostrar');
    });

    // Aumentar fonte
    aumentarFonteBotao.addEventListener('click', function() {
        if (tamanhoAtualFonte < 1.5) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = tamanhoAtualFonte + 'rem';
        }
    });

    // Diminuir fonte
    diminuirFonteBotao.addEventListener('click', function() {
        if (tamanhoAtualFonte > 0.8) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = tamanhoAtualFonte + 'rem';
        }
    });

    // Modo noturno
    modoNoturnoBotao.addEventListener('click', function() {
        document.body.classList.toggle('modo-noturno');
        this.textContent = document.body.classList.contains('modo-noturno') 
            ? 'Modo Claro' 
            : 'Modo Noturno';
    });
});