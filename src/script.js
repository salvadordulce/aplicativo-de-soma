var Conta = document.getElementById('Conta');
var primeiro = document.getElementById('primeiro');
var segundo = document.getElementById('segundo');
var resultado = document.getElementById('resultado');

//função responsável por buscar a soma
function somar(event) {

    //previne o comportamento padrão do formulário
    event.preventDefault()

    //pegando o valor do INPUT DE conta
    var valordasoma = parseInt(primeiro.value) + parseInt(segundo.value);
    resultado.innerText = valordasoma

    console.log(valordasoma);

}


//adicionando um evento de SUBMIT (envio) no formulário
Conta.addEventListener("submit", somar);