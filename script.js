// login btn handler

const loginBtn = document.getElementById('loginBtn').addEventListener('click', function(){
    const loginArea = document.getElementById("loginArea").style.display = "none";
    const transactionArea = document.getElementById('transactionArea').style.display = "block";
})

// deposit btn event handler

const depositBtn = document.getElementById('depositBtn').addEventListener("click", function(){

const depositNumber = getInputValue('depositAmount');

updateSpanText('depositDigit', depositNumber);
updateSpanText('balanceDigit', depositNumber);

document.getElementById('depositAmount').value = '';
    
})

// withdraw btn event handler 

const withdrawBtn = document.getElementById("withdrawBtn").addEventListener("click",function(){

    const withdrawNumber = getInputValue("withdrawAmount");

    updateSpanText('withdrawDigit', withdrawNumber);
    updateSpanText ("balanceDigit", - withdrawNumber);
    document.getElementById('withdrawAmount').value = '';

})

// input value function

function getInputValue(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// span text function

function updateSpanText (id, addedNumber) {
const current = document.getElementById(id).innerText;
const currentNumber = parseFloat(current);
const totalAmount = addedNumber + currentNumber;
document.getElementById(id).innerText = totalAmount;

}