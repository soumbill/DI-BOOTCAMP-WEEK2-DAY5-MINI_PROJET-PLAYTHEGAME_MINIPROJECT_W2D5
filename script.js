// PARTIE I

function playTheGame(){
    
    let confirme = confirm("Souhaitez-vous jouer au jeu ?"), info, prompte;

    if (confirme) { //Tue
        
        prompte = Number(prompt("Entrer un nombre de 0 à 10"));

        if (isNaN(prompte)) {
            
            info = "Désolé, pas un bon numero, aurevoir";
        }
        else if (prompte < 0 || prompte > 10) {
            info = "Désolé, ce n'est pas un bon chiffre, aurevoir";
        }
        else{
            let computerNumber =Math.random(prompte);
            info = "Le nombre est " + computerNumber ;
        }
    }
    else{
        info = "Pas de probleme, aurevoir";
    }
    console.log(info);
}

playTheGame();

// PARTIE II

function compareNumber(userNumber, computerNumber){
    do {
        const computerNumber = 20;   
        let userNumber = prompt("Enter a number");

        if(userNumber == computerNumber){
            info = "WINNER";
        }
        else if(userNumber > computerNumber){
            info = "Votre nombre est plus grand que celui de l'ordi, deviner encore";
        }
        else{
            info = "Votre nombre est plus petit que celui de l'ordi, deviner encore";
        }
        console.log(info);

    } while (userNumber < computerNumber || userNumber > computerNumber);
}
compareNumber();