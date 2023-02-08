function calculate(event) {
    event.preventDefault();
    var inputOne = document.getElementById("input1").value;
    var inputTwo = document.getElementById("input2").value;
    var theOperator = document.getElementById("operators").value;
    let result;

    const operator =('Enter operator ( either +, -, * or / ): ');
    inputOne = parseInt(inputOne);
    inputTwo = parseInt(inputTwo);

    
    switch (theOperator){
        case "+":
            result = inputOne + inputTwo;
            console.log(`${inputOne} + ${inputTwo} = ${result}`);
            break;
        case "-":
            result = inputOne - inputTwo;
            console.log(`${inputOne} - ${inputTwo} = ${result}`);
            break;
        case "/":
            result = inputOne / inputTwo;
            console.log(`${inputOne} / ${inputTwo} = ${result}`);
            break;        
        case "*":
            result = inputOne * inputTwo;
            console.log(`${inputOne} * ${inputTwo} = ${result}`);
            break;
        default:
            console.log('Invalid operator');
            break;
    }
    document.getElementById("output").innerHTML = result;
}