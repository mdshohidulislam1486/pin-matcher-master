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