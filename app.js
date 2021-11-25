var initialPrice = document.querySelector('#initial-price');
var quantity = document.querySelector('#quantity');
var currentPrice = document.querySelector('#current-price');
var button = document.querySelector('#btn');
var outputBox = document.querySelector('#output');

function calculateProfitAndLoss(initial,quantity,current){
if (initial > current){
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss/initial) * 100;

    showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
} else if (current > initial){
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit/initial)* 100;

    showOutput(`Hey the Profit is ${profit} and the percent is ${profitPercentage}%`);
} else {
    showOutput(`No pain no gain and no gain no pain`);
 }
}

function submitHandler(){
    var ip = initialPrice.value;
    var qty = quantity.value;
    var curr = currentPrice.value;
    calculateProfitAndLoss(ip,qty,curr);
}

function showOutput(message){
outputBox.innerText = message;
}

button.addEventListener('click', submitHandler);
