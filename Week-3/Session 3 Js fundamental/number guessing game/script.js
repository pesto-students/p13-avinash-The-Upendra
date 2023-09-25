

function playGuessingGame( numToGuess, totalGuesses = 10 ){
    

    let num = window.prompt( "Enter a number between 1 and 100." );
    numOfGuesses++;
    
    do{

        if( num == numToGuess ){
            window.alert("Congrats");
            break;

        }
        else if( num > numToGuess ){
            
            num = window.prompt(num +" is too large. Guess a smaller number.");
            numOfGuesses++;

        }
        else if( num < numToGuess ){
            
            num = window.prompt(num +" is too small. Guess a larger number.");
            numOfGuesses++;
    
        }
        else if( isNaN(num) ){
            numOfGuesses--;
            num = window.prompt("Please enter a number");
            
        }

    }
    while( numOfGuesses < totalGuesses );
    numOfGuesses = 0;
}



var numOfGuesses = 0;

playGuessingGame(4,3);


