



document.addEventListener('DOMContentLoaded', function() {
    let tamanhoAtualFonte=1;
    const aumentarFonteBotao=document.getElementById('aumentar-fonte');
    const diminuirFonteBotao=document.getElementById('diminuir-fonte');
aumentarFonteBotao.addEventListener('click', function(){;
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize=${tamanhoAtualFonte}rem
    })
diminuirFonteBotao.addEventListener('click', function(){;
        tamanhoAtualFonte -=0.1;
        document.body.style.fontSize=${tamanhoAtualFonte}rem
    })


})