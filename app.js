let listOfDrawnNumbers = [];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let tries = 1;

function textDisplayScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate: 1.2});
}

function initialTextDisplay(){
    textDisplayScreen('h1', 'Jogo do número secreto');
    textDisplayScreen('p', 'Escolha um número entre 1 e 10');
}

initialTextDisplay();


function guessVerify() {
    let guess = document.querySelector('input').value;
    
    if(guess == secretNumber) {
        textDisplayScreen('h1', 'Você acertou!');
        let triesWord = tries > 1 ? 'tentativas' : 'tentativa';
        let triesMessage = `Você descobriu o número secreto com ${tries} ${triesWord}!`;
        textDisplayScreen('p', triesMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(guess > secretNumber) {
            textDisplayScreen('p', 'O número secreto é menor');
        } else {
            textDisplayScreen('p', 'O número secreto é maior');
        }
        tries++;
        cleanField();
    }
}

function generateRandomNumber() {
    let choosenNumber = parseInt(Math.random() * limitNumber) + 1;
    let numberOfElementsInTheList = listOfDrawnNumbers.length;

    if(numberOfElementsInTheList == limitNumber){
        listOfDrawnNumbers = [];
    }

    if(listOfDrawnNumbers.includes(choosenNumber)){
        return generateRandomNumber();
    } else {
        listOfDrawnNumbers.push(choosenNumber);
        return choosenNumber;
    }
}

function cleanField() {
    guess = document.querySelector('input');
    guess.value = '';
}

function restartGame() {
    secretNumber = generateRandomNumber();
    cleanField();
    tries = 1;
    initialTextDisplay();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
