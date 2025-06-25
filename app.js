const number = 20;

function isCorrectGuess(num) {
    num = parseInt(num);

    if(num == number){
        return "Congratulations! You guessed the correct number.";
    }else if(num < number){
        return "Your guess is too low. Try again!";
    }else if(num > number){
        return "Your guess is too high. Try again!";
    }else{
        return "Try Again..";
    }
}


document.getElementById("btn-guess").addEventListener("click", function() {
    let num = document.getElementById("txt-number").value;
    document.getElementById("element-h2").innerHTML = isCorrectGuess(num);
});