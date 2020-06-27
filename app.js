function getNumber (num){
    var calc = document.getElementById("calc");
    calc.value +=num ;
}

function clearResult(){
    var calc = document.getElementById("calc");
    calc.value=""
}

function finalResult(){
    var calc = document.getElementById("calc");
    calc.value = eval(calc.value)   
}