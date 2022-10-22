function takeValue(x){
    document.getElementById('result').innerHTML += x;
}

function clearInput(){
    document.getElementById('result').innerHTML = "";
}

function calculateResult(){
    console.log(document.getElementById('result').innerHTML)
    if(document.getElementById('result').innerHTML != ''){
        const result = eval(document.getElementById('result').innerHTML);
        document.getElementById('result').innerHTML = result;
    }
    
}

const comma = document.querySelector('#comma');
const cero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');
const deleteN = document.querySelector('#delete');

zero.addEventListener('click', () =>{
    takeValue(0);
}) 
comma.addEventListener('click', () =>{
    takeValue(".");
}) 
one.addEventListener('click', () =>{
    takeValue(1);
}) 
two.addEventListener('click', () =>{
    takeValue(2);
}) 
three.addEventListener('click', () =>{
    takeValue(3);
}) 
four.addEventListener('click', () =>{
    takeValue(4);
}) 
five.addEventListener('click', () =>{
    takeValue(5);
}) 
six.addEventListener('click', () =>{
    takeValue(6);
}) 
seven.addEventListener('click', () =>{
    takeValue(7);
}) 
eight.addEventListener('click', () =>{
    takeValue(8);
}) 
nine.addEventListener('click', () =>{
    takeValue(9);
}) 

plus.addEventListener('click', () =>{
    takeValue("+");
}) 
minus.addEventListener('click', () =>{
    takeValue("-");
}) 
multiply.addEventListener('click', () =>{
    takeValue("*");
}) 
divide.addEventListener('click', () =>{
    takeValue("/");
}) 

equal.addEventListener('click', () =>{
    calculateResult();
}) 
deleteN.addEventListener('click', () =>{
    clearInput();
}) 
