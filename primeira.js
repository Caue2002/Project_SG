// inicial
let
    inicial = document.querySelector(".inicial");

    inicial.addEventListener("mouseover",trocax);
    inicial.addEventListener("mouseout",nadax);

    function trocax(){
    inicial.style.background="purple" 
    console.log("entrou");
    }

    function nadax(){
    inicial.style.background=''
    console.log("saiu");
    };

// H2 
let
    subtitulo = document.querySelector(".primeiro");

    subtitulo.addEventListener("mouseover",troca1);
    subtitulo.addEventListener("mouseout",nada1);

    function troca1(){
    subtitulo.style.background="darkgray"
    console.log("entrou");
    }

    function nada1(){
    subtitulo.style.background=''
    console.log("saiu");
    };



// explicaçao dos podesres da 3 primeiras imagens
let
    ex = document.querySelector(".explicaçao1");

    ex.addEventListener("mouseover",troca2);
    ex.addEventListener("mouseout",nada2);

    function troca2(){
    ex.style.background="purple"
    console.log("entrou");
    };

    function nada2(){
    ex.style.background=''
    console.log("saiu");
    };


// imagens dos poderes
let
    imagens = document.querySelector(".explicaçao2");

    imagens.addEventListener("mouseover",troca3);
    imagens.addEventListener("mouseout",nada3);


    function troca3(){
    imagens.style.background="aqua"
    console.log("entrou");
    };

    function nada3(){
    imagens.style.background=''
    console.log("saiu");
    };

    // 
let
    imagensdois = document.querySelector(".explicaçao3");

    imagensdois.addEventListener("mouseover",troca5);
    imagensdois.addEventListener("mouseout",nada5);


    function troca5(){
    imagensdois.style.background="orange"
    console.log("entrou");
    };

    function nada5(){
    imagensdois.style.background=''
    console.log("saiu");
    };

let
    imagenst = document.querySelector(".explicaçao4");

    imagenst.addEventListener("mouseover",troca6);
    imagenst.addEventListener("mouseout",nada6);

    function troca6(){
    imagenst.style.background="red"
    console.log("entrou");
    };

    function nada6(){
    imagenst.style.background=''
    console.log("saiu");
    };



    // MuryoKusho
let
    subtitulo4 = document.querySelector(".MuryoKusho");

    subtitulo4.addEventListener("mouseover",troca7);
    subtitulo4.addEventListener("mouseout",nada7);

    function troca7(){
    subtitulo4.style.background="darkgray"
    console.log("entrou");
    };

    function nada7(){
    subtitulo4.style.background=''
    console.log("saiu");
    };

    // paragrafos Muryo kusho
let
    pa2 = document.querySelector(".container");

    pa2.addEventListener("mouseover",troca8);
    pa2.addEventListener("mouseout",nada8);

    function troca8(){
    pa2.style.background="darkgray" 
    console.log("entrou");
    }

    function nada8(){
    pa2.style.background=''
    console.log("saiu");
    }
