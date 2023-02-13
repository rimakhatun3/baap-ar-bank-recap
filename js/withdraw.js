
document.getElementById('btn-withdraw').addEventListener('click',function(){
const newWithdrawAmount = addInputFieldValueId('withdraw-fild');
const previousWithdrawAmount = addTextElementValue('withdraw-amount');
const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
setTextElementValue('withdraw-amount',totalWithdraw);
const previousTotalBalance = addTextElementValue('total-amount');
const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
setTextElementValue('total-amount',currentTotalBalance);
})