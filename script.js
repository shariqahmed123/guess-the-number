var number = parseInt(Math.random() * 101);
var number1 = parseInt(Math.random() * 501);
var number2 = parseInt(Math.random() * 1001);

function checkNumber() {

    let numValue = document.querySelector("input").value;

    if (numValue == false) {
        alert("Please enter your guess number")
    } else if (numValue < number) {
        alert("too Small Try Again")
    } else if (numValue > number) {
        alert("too Large Try Again")
    } else if (numValue == number) {
        alert("Congratulation You won ")
    }

}




function checkNumber2() {

    let numValue = document.querySelector("input").value;

    if (numValue == false) {
        alert("Please enter your guess number")
    } else if (numValue < number1) {
        alert("too Small Try Again")
    } else if (numValue > number1) {
        alert("too Large Try Again")
    } else if (numValue == number1) {
        alert("Congratulation You won ")
    }

}




function checkNumber3() {

    let numValue = document.querySelector("input").value;

    if (numValue == false) {
        alert("Please enter your guess number")
    } else if (numValue < number2) {
        alert("too Small Try Again")
    } else if (numValue > number2) {
        alert("too Large Try Again")
    } else if (numValue == number2) {
        alert("Congratulation You won ")
    }

}