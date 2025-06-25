// const number = 20;
let number = Math.floor(Math.random() * 10);
console.log(number);

function resetNumber(){
    number = Math.floor((Math.random() * 10)+1);
    console.log(number);
}

let count = 3;

function isCorrectGuess(num) {
    num = parseInt(num);
    if(num == number){
        document.getElementById("txt-number").value = "";
        resetNumber()
        count--;
        document.getElementById("count").innerHTML = count;
        if(count <= 0){
            document.getElementById("btn-guess").disabled = true;
            document.getElementById("btn-guess").disabled = true;
            return "Congratulations!..Game Over!"
        }
        return "Congratulations! You guessed the correct number.";
    }else if(num < number){
        count--;
        document.getElementById("count").innerHTML = count;
        if(count <= 0){
            document.getElementById("btn-guess").disabled = true; 
            document.getElementById("btn-guess").disabled = true;
            return "Game Over!"  
        }
        document.getElementById("txt-number").value = "";
        return "Your guess is too low. Try again!";
    }else if(num > number){
        count--;
        document.getElementById("count").innerHTML = count;
        if(count <= 0){
            document.getElementById("btn-guess").disabled = true; 
            document.getElementById("btn-guess").disabled = true;
            return "Game Over!"  
        }
        document.getElementById("txt-number").value = "";
        return "Your guess is too high. Try again!";
    }else{
        count--;
        document.getElementById("count").innerHTML = count;
        if(count <= 0){
            document.getElementById("btn-guess").disabled = true; 
            document.getElementById("btn-guess").disabled = true;
            return "Game Over!"  
        }
        document.getElementById("txt-number").value = "";
        return "Try Again..";
    }
}


document.getElementById("btn-guess").addEventListener("click", function() {
    let num = document.getElementById("txt-number").value;
    document.getElementById("element-h2").innerHTML = isCorrectGuess(num);
});