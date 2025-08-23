
let
    cabeçalho = document.querySelector(".cabeçalho");

    cabeçalho.addEventListener("mouseout",troca0);
    cabeçalho.addEventListener("mouseover",troca1);
    cabeçalho.addEventListener("click",troca2);

    function troca0(){
    cabeçalho.style.background=''
    console.log("entrou");
    };

    function troca1(){
    cabeçalho.style.background="purple"
    console.log("saiu");
    
    };

    function troca2(){
    cabeçalho.style.background=''
    console.log("entrou");
    }

    // paragrafo informativo
let 
    paragrafo = document.querySelector(".infor");

    paragrafo.addEventListener("mouseover",trocaCinza);
    paragrafo.addEventListener("mouseout",trocaBranco);
    paragrafo.addEventListener("mouseout",volta);

    function trocaCinza(){
    paragrafo.style.background="";
    }

    function trocaBranco(){
    paragrafo.style.background='';
    }

    function volta(){
    paragrafo.style.background='';
    paragrafo.innerHTML="                                      ⚠ <br> <br>                          Seja bem vindo! <br> Para mais informações  pressione 'Ler mais'";
    }
