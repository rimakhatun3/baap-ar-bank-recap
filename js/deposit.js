// sceond step add function for deposit field

// first step add button even handler
document.getElementById('btn-deposit').addEventListener('click',function(){
const newDepositAmount = addInputFieldValueId('deposit-fild');
const previousDepositAmount = addTextElementValue('total-deposit');
const totalDeposit = previousDepositAmount + newDepositAmount;
setTextElementValue('total-deposit',totalDeposit);
const previousTotalBalance = addTextElementValue('total-amount');
const totalBalance = previousTotalBalance + newDepositAmount;
setTextElementValue('total-amount',totalBalance);
})