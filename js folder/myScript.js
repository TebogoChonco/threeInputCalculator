function calculate(event) {
    event.preventDefault();
    let inputOne = document.getElementById("input1").value;
    let inputTwo = document.getElementById("input2").value;
    let theOperator = document.getElementById("operators").value;

    let result;

    if (inputOne !== "" && inputTwo !== "") {

        inputOne = parseInt(inputOne);
        inputTwo = parseInt(inputTwo);

        if (theOperator == "+") {
            result = inputOne + inputTwo;
        }
        else if (theOperator == "-") {
            result = inputOne - inputTwo;
        }
        else if (theOperator == "/") {
            result = inputOne / inputTwo;
        }
        else if (theOperator == "*") {
            result = inputOne * inputTwo;
        }
        else {
            alert("Hacked!");
        }

        document.getElementById("output").innerHTML = result;
    }
    else {
        alert("Please provide all inputs");
    }
}