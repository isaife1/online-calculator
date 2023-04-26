let result = document.getElementById('result');

function setValue(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    let calc = result.value;
    if (calc) {
        result.value = eval(calc);
    }
}