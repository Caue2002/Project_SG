// paragrafo inicial
let
    h1 = document.querySelector(".zero");

    h1.addEventListener("mouseover",troca1);
    h1.addEventListener("mouseout",nada1);

    function troca1(){
    h1.style.background="darkgray" 
    console.log("entrou");
    }

    function nada1(){
    h1.style.background=''
    console.log("saiu");
    }

    // imagens dos personagens
let
    divimg = document.querySelector(".content");

    divimg.addEventListener("mouseover",troca2);
    divimg.addEventListener("mouseout",nada2);

    function troca2(){
    divimg.style.background="darkgray" 
    console.log("entrou");
    }

    function nada2(){
    divimg.style.background=''
    console.log("saiu");
    }

// textos
let
    p1 = document.querySelector(".container");

    p1.addEventListener("mouseover",troca5);
    p1.addEventListener("mouseout",nada5);

    function troca5(){
    p1.style.background="darkgray" 
    console.log("entrou");
    }

    function nada5(){
    p1.style.background=''
    console.log("saiu");
    }

