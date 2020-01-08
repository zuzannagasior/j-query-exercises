var currencyCalcForm = $('.currency-calc');

var currencySelects = currencyCalcForm.find('select');
var currencyInput = currencyCalcForm.find('#value1');
var currencyCalcInput = currencyCalcForm.find('#value2');

var apiAccessKey = '7c188060db38c1452be4624575eca30c';

function convertCurrency() {
    var value1 = currencyInput.val();

    var currency1 = currencySelects.filter('#currency1').val();
    var currency2 = currencySelects.filter('#currency2').val();

    if (currency1 === currency2) {
        currencyCalcInput.val(value1);
    } else {
        // convert only if there is value in input
        if (value1) {
            $.get(`http://data.fixer.io/api/latest?access_key=${apiAccessKey}&&symbols=${currency1},${currency2}`, function (data) {
                var rate1 = data.rates[currency1];
                var rate2 = data.rates[currency2];

                var value2 = Number(value1) / rate1 * rate2;
                
                currencyCalcInput.val(value2.toFixed(2));
            });
        } else {
            currencyCalcInput.val('');
        };
    };
};

currencySelects.on('change', convertCurrency);
currencyInput.on('keyup click', convertCurrency);