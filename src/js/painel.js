/*
A seta avançar esconde uma imagem e mostra a proxima

a imagem atual começa no 0 porque é a primeira imagem, ao clicar no avançar o contador aumenta, chegando até 2 [0,1,2]

esconder todas as imagens, 
    pegar todas as imagens usando o DOM e remover a classe mostrar

mostrar a próxima imagem, 
    pegar todas as imagens, descobrir qual é a próxima e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens(){
    imagensPainel.forEach(imagem =>{
     imagem.classList.remove('mostrar')
    });
}

function mostrarImagens(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function(){

    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens){
        return;
    }

    imagemAtual++;

    esconderImagens();

    mostrarImagens();
})

setaVoltar.addEventListener('click', function(){
    
    if (imagemAtual === 0) {
        return;
   }
    imagemAtual--;

    esconderImagens();

    mostrarImagens();
})