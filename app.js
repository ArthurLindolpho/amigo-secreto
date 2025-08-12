//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = []
let listaSorteados = []

function mostrarNomes() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = listaNomes.join(', '); 
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value
    if (nome == ''){
        alert('Este campo não pode estar vazio!')
    } else{
        listaNomes.push(nome)
        limparCampo()
        mostrarNomes()
    }

}

function limparCampo(){
    nome = document.querySelector('input')
    nome.value = ''
}


function sortearAmigo() {
    if (listaNomes.length == 0){
        alert('Nenhum nome na lista para sortear.')
        return
    } else{
        let nomeSorteado = listaNomes[Math.floor(Math.random() * listaNomes.length)]
        let resultado = document.querySelector('#resultado') 
        resultado.innerHTML = `<li>${nomeSorteado}<li>`
        if (listaSorteados.includes(nomeSorteado)){
            return sortearAmigo()
        }else{
            listaSorteados.push(nomeSorteado)
        }
    }
    if (listaSorteados.length == listaNomes.length){
        setTimeout(() => {
            alert('Todos os nomes já foram sorteados!')
        }, 2000)
        return
    }
}
