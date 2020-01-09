var calculatorForm = $('.calculator');

var calculatorInput = calculatorForm.find('#calcInput');
var calculatorBtns = calculatorForm.find('.calculator-btns div');
var result = calculatorForm.find('.result');

var tmpValue;
var tmpOperation;

function doOperation(op, oldInputValue) {
    switch (op) {
        case '+':
            return Number(tmpValue) + oldInputValue;
        case '-':
            return Number(tmpValue) - oldInputValue;
        case 'x':
            return Number(tmpValue) * oldInputValue;
        case '÷':
            return Number(tmpValue) / oldInputValue;
    };
};

function operation(op, opToOverwrite) {

    if (opToOverwrite === '=') {
        var oldInputValue = Number(calculatorInput.val());
        var newInputValue = doOperation(op, oldInputValue);

        calculatorInput.val(String(newInputValue));
        tmpValue = String(newInputValue);

        result.html('');
        tmpOperation = '';

    } else {
        var oldInputValue = Number(calculatorInput.val());
        var newInputValue = doOperation(op, oldInputValue);

        result.html(String(newInputValue).concat(opToOverwrite));

        tmpValue = String(newInputValue);
        tmpOperation = opToOverwrite;
        calculatorInput.val('');
    };
};

function handleClick(e) {
    var className = e.target.className;
    var innerText = e.target.innerText;

    if (!!className && (className === 'operation')) {
        if (innerText === 'Clear') {
            //reset calculator
            calculatorInput.val('');
            tmpOperation = '';
            tmpValue = '';
            result.html('');
        } else {
            if ((tmpOperation !== innerText) && // for avoiding multiple click errors
                !!calculatorInput.val()) { // do operation only if there is a value in input
                if (!!tmpOperation) {
                    operation(tmpOperation, innerText);
                } else {
                    tmpValue = calculatorInput.val();
                    tmpOperation = innerText;
                    result.html(tmpValue.concat(tmpOperation));
                    calculatorInput.val('');
                };
            };
        };
    } else {
        // adding number to value in input
        var oldInputValue = calculatorInput.val();
        var newInputValue = oldInputValue.concat(innerText);
        calculatorInput.val(newInputValue);
    };
};

calculatorBtns.on('click', handleClick);