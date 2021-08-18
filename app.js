function getPin(){
const pin =Math.round(Math.random() * 10000);
const pinToString = pin + "";

if(pinToString.length == 4){
    return pin
 } else {
   return getPin();
 }
}


function generatePin(){
    const pin = getPin();
    pinOutPut = document.getElementById('generated-pin').value = pin
}

document.getElementById('key-pad').addEventListener('click', function(event){
const number = event.target.innerText;
const calcInput = document.getElementById('typed-num');
if(isNaN(number)){
    if(number == 'C'){
        calcInput.value = '';
    }
} else{
    const calcInput = document.getElementById('typed-num');
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number
    calcInput.value = newNumber;
}

})


function verifyPin(){
    const pin = document.getElementById('generated-pin').value;
    const typedNumbers = document.getElementById('typed-num').value;
    const successNotification  = document.getElementById('pin-success');
    const failedNotification  = document.getElementById('pin-failed');

    if (pin == typedNumbers){
        
        successNotification.style.display = 'block'
        failedNotification.style.display = 'none'
    } else {
        successNotification.style.display = 'none'
        failedNotification.style.display = 'block'
    }
}