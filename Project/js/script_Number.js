let input = document.getElementById('givNumber');
let result = document.querySelector('.result-digits');
function sumDigits(num) {
    return num.toString().split('').map(Number).reduce(function(a,b){return a + b});
}
function resetInput() {
    return  input.value = ''; 
}
function findNumber() {
    const inputValue = input.value;
    const sum = sumDigits(inputValue);
    resetInput();
    if (sum > 9) {
        result.innerHTML = '';
        findNumber();
    } 
    result.innerHTML = 'This number '+ inputValue +' and digits sum ' + sum;    
};