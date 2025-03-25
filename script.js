document.addEventListener('DOMContentLoaded', function(){
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById(aumentar-fonte);
    const diminuiFonteBotão= document.getElementById(diminuir-fonte);
    aumentaFonteBotao.addEventListener('click', function(){;
    tamanhoAtualFonte += 0.1;
    document.body.style.fonteSize= ${tamanhoAtualFonte}rem
    })
   
   
    const diminuiFonteBotão= document.getElementById(diminuir-fonte);
    diminuiFonteBotao.addEventListener('click', function(){;
    tamanhoAtualFonte -= 0.1;
    document.body.style.fonteSize= ${tamanhoAtualFonte}rem
})
})