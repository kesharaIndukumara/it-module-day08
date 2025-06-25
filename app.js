// const number = 20;
let number = Math.floor(Math.random() * 10);
console.log

function resetNumber(){
    number = Math.floor((Math.random() * 10)+1);
}

function isCorrectGuess(num) {
    num = parseInt(num);

    if(num == number){
        document.getElementById("txt-number").value = "";
        resetNumber()
        return "Congratulations! You guessed the correct number.";
    }else if(num < number){
        document.getElementById("txt-number").value = "";
        return "Your guess is too low. Try again!";
    }else if(num > number){
        document.getElementById("txt-number").value = "";
        return "Your guess is too high. Try again!";
    }else{
        document.getElementById("txt-number").value = "";
        return "Try Again..";
    }
}


document.getElementById("btn-guess").addEventListener("click", function() {
    let num = document.getElementById("txt-number").value;
    document.getElementById("element-h2").innerHTML = isCorrectGuess(num);
});