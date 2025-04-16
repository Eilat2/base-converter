/*
names:
Linor Bareli 323109629
Eilat Cahana 206518524 
*/
let fromBase = 10;  
let toBase = 10;    

function getBaseSymbol(base) {
    if (base === 2) {
        return '₂';
    } else if (base === 8) {
        return '₈';
    } else if (base === 10) {
        return '₁₀';
    } else if (base === 16) {
        return '₁₆';
    }
}

function setFromBase(base) {
    fromBase = base;
    resetButtonStyles('from');
    document.getElementById(`btn-${base === 2 ? 'binary' : base === 8 ? 'octal' : base === 10 ? 'decimal' : 'hex'}-from`).classList.add('selected');
    console.log(`Source base set to: ${fromBase}`);
}

function setToBase(base) {
    toBase = base;
    resetButtonStyles('to');
    document.getElementById(`btn-${base === 2 ? 'binary' : base === 8 ? 'octal' : base === 10 ? 'decimal' : 'hex'}-to`).classList.add('selected');
    console.log(`Target base set to: ${toBase}`);
}

function resetButtonStyles(type) {
    const buttons = document.querySelectorAll(`#${type}-base button`);
    buttons.forEach(button => button.classList.remove('selected'));
}

function convert() {
    const inputValue = document.getElementById("number-input").value;

    if (!isValidInput(inputValue, fromBase)) {
        alert("Invalid input for the selected base.");
        return;
    }

    let decimalValue;
    if (fromBase === 2) {
        decimalValue = parseInt(inputValue, 2);
    } else if (fromBase === 8) {
        decimalValue = parseInt(inputValue, 8);
    } else if (fromBase === 10) {
        decimalValue = parseInt(inputValue, 10);
    } else if (fromBase === 16) {
        decimalValue = parseInt(inputValue, 16);
    }

    let resultValue;
    if (toBase === 2) {
        resultValue = decimalValue.toString(2);
    } else if (toBase === 8) {
        resultValue = decimalValue.toString(8);
    } else if (toBase === 10) {
        resultValue = decimalValue.toString(10);
    } else if (toBase === 16) {
        resultValue = decimalValue.toString(16).toUpperCase();
    }

    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = `Result: ${inputValue}${getBaseSymbol(fromBase)} = ${resultValue}${getBaseSymbol(toBase)}`;

    document.getElementById("number-input").value = '';
}

function isValidInput(value, base) {
    const regex = {
        2: /^[01]+$/, 
        8: /^[0-7]+$/, 
        10: /^[0-9]+$/, 
        16: /^[0-9A-Fa-f]+$/ 
    };
    return regex[base].test(value);
}
