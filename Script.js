
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


// TITULO
let
    titulo = document.querySelector("#principal");

    titulo.addEventListener("mouseover",trocaparaLightblue);
    titulo.addEventListener("mouseout",zera);

function trocaparaLightblue(){
    titulo.style.background="lightblue";
}

function zera(){
    titulo.style.background='';
}


// H2 
let
    subtitulo = document.querySelector("#primeiro");

    subtitulo.addEventListener("mouseover",trocalightblue);
    subtitulo.addEventListener("mouseout",nada);

function trocalightblue(){
    subtitulo.style.background="lightblue"
    console.log("entrou");
}

function nada(){
    subtitulo.style.background=''
    console.log("saiu");
};




// h3 poderes
let
    subtitulodois = document.querySelector("#poderes");

    subtitulodois.addEventListener("mouseover",trocalightblue2);
    subtitulodois.addEventListener("mouseout",zero);

function trocalightblue2(){
    subtitulodois.style.background="lightblue"
    console.log("entrou");
}

    function zero(){
    subtitulodois.style.background=''
    console.log("saiu");
};

// lista 1
let
    lista = document.querySelector("#alternada");

    lista.addEventListener("mouseover",trocalightblue3);
    lista.addEventListener("mouseout",zerando);

function trocalightblue3(){
    lista.style.background="lightblue"
    console.log("entrou");
}

    function zerando(){
    lista.style.background=''
    console.log("saiu");
    }
