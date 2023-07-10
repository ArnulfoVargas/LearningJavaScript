let firstInput = document.getElementById("first-number");
let secondInput = document.getElementById("second-number");
let resultInput = document.getElementById("result");

function Validate(id){
    let item = document.getElementById(id);

    if (item.value == ''){
        item.value = "0";
    }
}

function Add(){
    resultInput.value =  Number(firstInput.value) + Number(secondInput.value);
}
function Less(){
    resultInput.value =  Number(firstInput.value) - Number(secondInput.value);
}
function Multiply(){
    resultInput.value =  Number(firstInput.value) * Number(secondInput.value);
}
function Divide(){
    let val1 = Number(firstInput.value);
    let val2 = Number(secondInput.value);

    if(val1 != 0 && val2 != 0)
        resultInput.value =  val1 / val2;
    else
        resultInput.value = 0;
}
function Pow(){
    let val1 = Number(firstInput.value);
    let val2 = Number(secondInput.value);

    resultInput.value = Math.pow(val1, val2);
}
function Random(){
    let val1 = Number(firstInput.value);
    let val2 = Number(secondInput.value);

    resultInput.value = Math.random() * (val2 - val1) + val1;
}
function Sqrt(){
    let val2 = Number(secondInput.value);

    resultInput.value = Math.sqrt(val2);
}
function Abs(){
    let val2 = Number(secondInput.value);

    resultInput.value = Math.abs(val2);
}
function Round(){
    let value = resultInput.value;

    resultInput.value = Math.round(value);
}
function Floor(){
    let value = resultInput.value;

    resultInput.value = Math.floor(value);
}
function Ceil(){
    let value = resultInput.value;

    resultInput.value = Math.ceil(value);
}