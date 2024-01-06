alert(`Boas vindas ao jogo do número secreto`);
let chute;
let i = 1;
let limite;
let dificuldade;
dificuldade = prompt(`Escolha a dificuldade do seu jogo:\n\n1. Fácil\n2. Médio\n3. Difícil`);    

if (dificuldade == 1){
    limite = 10;
} else {
    if (dificuldade == 2){
        limite = 50;
    } else {
        if (dificuldade == 3){
            limite = 100;
        } else {
             alert("Automaticamente iremos para o modo mais difícil pois você digitou um valor inválido.");
             limite = 100;
        }
    }
}

let numeroSecreto = parseInt(Math.random()*limite + 1);
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${limite}. Essa é sua ${i}ª tentativa.`);
    if (chute >= numeroSecreto) {
        if(chute>numeroSecreto){
            alert(`Você errou. O número secreto é menor que ${chute}. Tente novamente.`);
        }
        else{
            break;
        }
    } else {
        alert(`Você errou. O número secreto é maior que ${chute}. Tente novamente.`);
    }
    i = i + 1;
}

let palavraTentativa = i > 1 ? `tentativas` : `tentativa`;

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${i} ${palavraTentativa}`);