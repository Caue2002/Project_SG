
// PARAGRAFO
let 
    paragrafo = document.querySelector("#p1");

    paragrafo.addEventListener("mouseover",trocaCinza);
    paragrafo.addEventListener("mouseout",trocaBranco);
    paragrafo.addEventListener("mouseout",volta);

function trocaCinza(){
    paragrafo.style.background="lightblue";
}

function trocaBranco(){
    paragrafo.style.background='';
}

function volta(){
    paragrafo.style.background='';
    paragrafo.innerHTML="Seja bem vindo! Para mais informações  pressione 'clique'";
}



// let
//     titulo = document.querySelector("#principal");

//     titulo.addEventListener("mouseover",trocaparaLightblue);
//     titulo.addEventListener("mouseout",zera);

// function trocaparaLightblue(){
//     titulo.style.background="purple";
// }

// function zera(){
//     titulo.style.background='';
// }


// H2 
let
    subtitulo = document.querySelector("#primeiro");

    subtitulo.addEventListener("mouseover",troca1);
    subtitulo.addEventListener("mouseout",nada1);

function troca1(){
    subtitulo.style.background="lightblue"
    console.log("entrou");
}

function nada1(){
    subtitulo.style.background=''
    console.log("saiu");
};



// h3 poderes
let
    subtitulodois = document.querySelector("#poderes");

    subtitulodois.addEventListener("mouseover",troca2);
    subtitulodois.addEventListener("mouseout",nada2);

function troca2(){
    subtitulodois.style.background="lightblue"
    console.log("entrou");
}

    function nada2(){
    subtitulodois.style.background=''
    console.log("saiu");
};


// lista 1
let
    lista = document.querySelector("#alternada");

    lista.addEventListener("mouseover",troca3);
    lista.addEventListener("mouseout",nada3);

function troca3(){
    lista.style.background="lightblue"
    console.log("entrou");
}

    function nada3(){
    lista.style.background=''
    console.log("saiu");
    }
