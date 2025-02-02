//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let adicionar = [];
let amigo;
let sorteado;

function geraTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}

function selecionaAmigo(){
    return document.querySelector('input').value;
}

function adicionarAmigo(){
    amigo = selecionaAmigo();
    if (amigo == ''){
        alert ('Você precisa Digitar o nome do Seu amigo');
        }else{
            if (adicionar.includes(amigo)){
                alert('Nome de Amigo já Adicionado');
                }else{
                    adicionar.push(amigo);
                    geraTexto('ul' , adicionar);}
        }
    limparCampo();
}

function sortearAmigo(){
    if (adicionar.length === 0){
        geraTexto('h1', 'Amigo secreto');
        geraTexto('ul', '');
    } else{
        sorteado = Math.floor(Math.random() * adicionar.length);
        let amigoSorteado = adicionar[sorteado];
        alert(`Seu Amigo Secreto é: ${amigoSorteado}`);
        geraTexto('h1' , `Vamos sortear o próximo amigo!`);
        adicionar.splice(sorteado, 1);
    }
}