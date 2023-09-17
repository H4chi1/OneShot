// selecionar o HTML dos botões

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

let indiceAtual = 0;

//identificar o clique nos botões e remover e adicionar a classe nos botões e imagens

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        indiceAtual = indice;
        mostrarImagem(indice);


    })
})

function mostrarImagem(indice) {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
    botoesCarrossel[indice].classList.add('selecionado');

    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
    imagens[indice].classList.add('ativa');
}






document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
        mostrarImagem(indiceAtual);
    }
    else if (event.key === 'ArrowRight') {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        mostrarImagem(indiceAtual);
    }
})