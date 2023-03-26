var startRange = 1;
var endRange = 100;
var secretNumber = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
var guessCount = 3;
var startElement = document.getElementById("start");
var endElement = document.getElementById("end");
var numberInputElement = document.getElementById("number");
var countElement = document.getElementById("count");
var resultElement = document.getElementById("result");
var btnGuess = document.getElementById("btn-guess");
startElement.innerHTML = startRange.toString();
endElement.innerHTML = endRange.toString();
// if (numberInputElement.value = " ") {
//     btnGuess.disabled = true;
// }
// else {
//     btnGuess.disabled = false;
// }
function check() {
    var guess = Number(numberInputElement.value);
    guessCount--;
    if (guess === secretNumber) {
        if (guessCount === 2) {
            resultElement.innerHTML = "Chúc mừng! Bạn đã đoán đúng ngay lần đầu tiên và nhận được 100 điểm.";
        }
        else if (guessCount === 1) {
            resultElement.innerHTML = "Chúc mừng! Bạn đã đoán đúng ở lần thứ 2 và nhận được 50 điểm.";
        }
        else {
            resultElement.innerHTML = "Chúc mừng! Bạn đã đoán đúng ở lần thứ 3 và nhận được 30 điểm.";
        }
        // Disable number input and guess button
        numberInputElement.disabled = true;
        btnGuess.disabled = true;
    }
    else if (guessCount === 0) {
        resultElement.innerHTML = "Game over. Số bí mật là " + secretNumber;
        // Disable number input and guess button
        numberInputElement.disabled = true;
        btnGuess.disabled = true;
    }
    else if (guess < secretNumber) {
        resultElement.innerHTML = "Số của bạn nhỏ quá. Bạn còn: " + guessCount + " lần đoán.";
    }
    else {
        resultElement.innerHTML = "Số của bạn lớn quá. Bạn còn:" + guessCount + " lần đoán.";
    }
    countElement.innerHTML = guessCount.toString();
    numberInputElement.value = "";
}
function reset() {
    secretNumber = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
    guessCount = 3;
    numberInputElement.disabled = false;
    btnGuess.disabled = false;
    resultElement.innerHTML = "";
    countElement.innerHTML = guessCount.toString();
    numberInputElement.value = "";
}
