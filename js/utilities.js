function addInputFieldValueId(elementId){
    const inputFieldValue = document.getElementById(elementId);
    const inputFieldValueSting = inputFieldValue.value;
    const inputField = parseFloat(inputFieldValueSting);
    inputFieldValue.value = '';
    return inputField;

}

function addTextElementValue(eventId){
    const textElementValue = document.getElementById(eventId);
    const textElementValueSting = textElementValue.innerText;
    const textElement = parseFloat(textElementValueSting);
    return textElement;
}
function setTextElementValue(elementId,newValue){;
const textValue = document.getElementById(elementId);
textValue.innerText = newValue;
}