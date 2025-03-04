document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll("button");
    let screen = document.getElementById('display');
    let numberOne = '';
    let numberTwo = '';
    let operator = '';
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            let value = event.target.innerHTML;

            if (value === "AC") {
                clear();
            } else if (value === "Del") {
                del();
            } else if (value === "+" || value === "-" || value === "/" || value === "*") {
                if (numberOne && !operator) {
                    operator = value;
                    screen.innerHTML += value;
                }
            } else if (value === "=") {
                if (numberOne && operator && numberTwo) {
                    let result = calc(parseFloat(numberOne), parseFloat(numberTwo), operator);
                    screen.innerHTML = result;
                    numberOne = result;
                    numberTwo = '';
                    operator = '';
                    resultDisplayed = true;
                }
            } else {
                if (resultDisplayed) {
                    screen.innerHTML = '';
                    resultDisplayed = false;
                }
                screen.innerHTML += value;
                if (!operator) {
                    numberOne += value;
                } else {
                    numberTwo += value;
                }
            }
        });
    });

    function calc(x, y, op) {
        switch (op) {
            case "+":
                return x + y;
            case "-":
                return x - y;
            case "*":
                return x * y;
            case "/":
                return x / y;
            default:
                return 0;
        }
    }

    function clear() {
        screen.innerHTML = '';
        numberOne = '';
        numberTwo = '';
        operator = '';
    }

    function del() {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
        if (operator) {
            if (numberTwo) {
                numberTwo = numberTwo.slice(0, -1);
            } else {
                operator = '';
            }
        } else {
            numberOne = numberOne.slice(0, -1);
        }
    }
});