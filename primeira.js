// inicial
let
    inicial = document.querySelector(".inicial");

    inicial.addEventListener("mouseover",trocax);
    inicial.addEventListener("mouseout",nadax);

    function trocax(){
    inicial.style.background="white" 
    console.log("entrou");
    }

    function nadax(){
    inicial.style.background=''
    console.log("saiu");
    };

// H2 
let
    subtitulo = document.querySelector("#primeiro");

    subtitulo.addEventListener("mouseover",troca1);
    subtitulo.addEventListener("mouseout",nada1);

    function troca1(){
    subtitulo.style.background="white"
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
    subtitulodois.style.background="white"
    console.log("entrou");
    };

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
    lista.style.background="white"
    console.log("entrou");
    };

    function nada3(){
    lista.style.background=''
    console.log("saiu");
    };


    // MuryoKusho
let
    subtitulo4 = document.querySelector(".MuryoKusho");

    subtitulo4.addEventListener("mouseover",troca4);
    subtitulo4.addEventListener("mouseout",nada4);

    function troca4(){
    subtitulo4.style.background="white"
    console.log("entrou");
    };

    function nada4(){
    subtitulo4.style.background=''
    console.log("saiu");
    };

    // paragrafos Muryo kusho
let
    pa2 = document.querySelector(".container");

    pa2.addEventListener("mouseover",troca5);
    pa2.addEventListener("mouseout",nada5);

    function troca5(){
    pa2.style.background="white" 
    console.log("entrou");
    }

    function nada5(){
    pa2.style.background=''
    console.log("saiu");
    }

    