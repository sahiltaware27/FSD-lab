let result = document.getElementById('result');
let curr = '';
let storedVal = '';
let operator = '';

function appendValue(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (curr === '' && value === '-') {
            // Handle unary minus (negative number input)
            curr = '-';
            result.value += value;
        } else if (curr === '') {
            // Ignore operator if no current value
            return;
        } else {
            operator = value;
            storedVal = curr;
            curr = '';
            result.value += value;
        }
    } else {
        // Prevent multiple decimals in a number
        if (value === '.' && curr.includes('.')) return;
        curr += value;
        result.value += value;
    }
}

function clearResult() {
    result.value = '';
    curr = '';
    storedVal = '';
    operator = '';
}

function deleteLast() {
    curr = curr.slice(0, -1);
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    if (curr === '' || storedVal === '' || operator === '') {
        result.value = 'Error';
        return;
    }

    let res;
    const n1 = parseFloat(storedVal);
    const n2 = parseFloat(curr);

    switch (operator) {
        case '+':
            res = n1 + n2;
            break;
        case '-':
            res = n1 - n2;
            break;
        case '*':
            res = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                result.value = 'Error'; // Handle division by zero
                return;
            }
            res = n1 / n2;
            break;
        default:
            result.value = 'Error';
            return;
    }

    result.value = res;
    curr = res.toString();
    storedVal = ''; // Clear stored value after calculation
    operator = '';  // Clear operator after calculation
}