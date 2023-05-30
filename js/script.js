// DICHIARAZIONE VARIABILI
let winNumbers= [];
let userNumbers;
let points= 0;
let max= 100;
let seconds= 30;
let message= document.querySelector(".message")

// CREAZIONE ALERT
alert("Pronto? Chiuso il messaggio avrai 30 secondi per memorizzare i numeri in sottoimpressione.");

// DICHIARAZIONE FUNZIONI
// Funzione per la generazione dei numeri random
function numbersGenerator(array, max){
    let check = false
    let number;
    while(check === false){
        number = Math.floor(Math.random() * (max - 1 + 1) + 1)
        
        if(!array.includes(number)){
            check = true
        }
    }
    return number
}
// Funzione per la generazione dei prompt per le risposte
function userAnswers(){
    let input;
    for( let i=1; i<=5; i++){
        input= parseInt(prompt("Inserisci i numeri che hai appena visto uno alla volta.").trim());
        // CALCOLO IL PUNTEGGIO
        if(winNumbers.includes(input)){
            points++
        }
    }
    return input
}

// GENERAZINE NUMERI RANDOM
for( let i=1; i<=5; i++){

    let number= numbersGenerator(winNumbers, max)
    winNumbers.push(number)
}

// Visualizzazione nel dom dei numeri da indovinare
message.innerHTML= winNumbers

// TIMER
// Timer per la scomparsa dei numeri dal dom
setTimeout( function(){
    message.innerHTML= "";
}, seconds * 1000);
setTimeout( function(){
    userAnswers();
    // Visualizzazione nel dom del punteggio
    message.innerHTML=`Complimenti! Hai totalizzato un punteggio di: ${points}`
}, (seconds + 1) * 1000)
