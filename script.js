document.addEventListener('DOMContentLoaded', function() {
    let tamanhoAtualFonte=1;
    const aumentarFonteBotao=document.getElementById('aumentar-fonte');
    const diminuirFonteBotao=document.getElementById('diminuir-fonte');
aumentarFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize=${tamanhoAtualFonte}rem
    })
diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -=0.1;
        document.body.style.fontSize=${tamanhoAtualFonte}rem
    })
    document.addEventListener ('DOMContentLoaded', function(){
        const botaode|Acessibilidade = document.getElemntBuId ('botao-acessibilidade');
        const opcoesdeAcessibilidade = document.getElementById ('opcoes-acessibilidade');
        
        botaodeAcessibilidade.addeventListener("click", function(){
            botaodeAcessibilidade.classList.toggle('rotacao-botao');
            opcoesdeAcessibilidade.classList.toggle('apresenta-lista');
        })
    })

})