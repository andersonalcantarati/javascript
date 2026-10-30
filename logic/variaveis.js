/*
Praticando declaração de variáveis
string: "Bah!";
number: 10; (integer or float/real) => JavaScript não faz distinção, real ou inteiro é tudo 'number'.
boolean: true; || false;
*/

const numeroUm = 1;
console.log ("O valor armazenado na variável é: " + numeroUm);
console.log(typeof numeroUm); //Verifica o tipo da variável

const numeroDois = 1.5;
console.log ("O valor armazenado na variável é: " + numeroDois);
console.log(typeof numeroDois); //Verifica o tipo da variável

const numeroTres = "1";
console.log ("O valor armazenado na variável é: " + numeroTres);
console.log(typeof numeroTres); //Verifica o tipo da variável

const usuarioLogado = true;
console.log ("O valor armazenado na variável é: " + usuarioLogado);
console.log(typeof usuarioLogado); //Verifica o tipo da variável

function verificarEstado(usuarioLogado){
    if (usuarioLogado !== true)
        console.log("Usuário não logado")
    else
        console.log("Usuário logado")
};

verificarEstado(usuarioLogado); //Chama a função

function somar(numeroUm, numeroTres){
    adicao = numeroUm + numeroTres //Porquê se eu por const ou let ele dá como undefined?
    return adicao;
};

console.log (somar(numeroUm, numeroTres)); //Como a variável numeroTres é uma string, então o resultado foi concatenado ficando "11"
console.log(typeof adicao); //Confirmando o que aconteceu: O Resultado foi uma string, se ambos fossem núnmero, seria 2 como resultado.