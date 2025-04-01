
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
    .opcoes-acessibilidade{
        margin-top:10px;
        display: flex;
        flex-direction: column;
    }
    
    .opcoes-acessibilidade button{
        margin-bottom: 5px;
    }
    .apresenta-lista{
        display: none;
    }

})