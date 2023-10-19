alert('Boas vindas ao jogo do número secreto');

let maximumNumber = 100; // número máximo que o sistema vai escolher //
let secretNumber = parseInt(Math.random() * maximumNumber + 1);
let guess; // chute do usuário //
let tries = 1; // tentativas do usuário //

// enquanto chute não for igual ao número secreto //
while(guess != secretNumber){
    guess = prompt(`Escolha um número entre 1 e ${maximumNumber}`);
    // se o chute for igual ao número secreto //
    if(guess == secretNumber){
        break;  
    } else{ //se for diferente//
        if(guess > secretNumber){
            alert(`O número secreto é menor que ${guess}`);
        } else{
            alert(`O número secreto é maior que ${guess}`);
        }
        tries++;
    }
}

let tentativaWord = tries > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${secretNumber} com ${tries} ${tentativaWord}.`);
