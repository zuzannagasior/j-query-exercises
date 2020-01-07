var converterForm = $('.converter');

var temp1 = converterForm.find('#t1');
var temp2 = converterForm.find('#t2');

function convert() {
    var temp1Val = temp1.val();
    var converterdTemp;
    var convertFrom = temp1.data('convert-from');

    if(!!temp1Val) {
        if(convertFrom === "celsius") {
            converterdTemp = temp1Val*9/5+32;
        } else if(convertFrom === "fahrenheit") {
            converterdTemp = (temp1Val-32)*5/9;
        }
    }
    return temp2.val(converterdTemp);
}

function changeConverter(e) {
    e.preventDefault();

    var convertFrom = temp1.data('convert-from');
    if(convertFrom === "celsius") {
        temp1.data('convert-from', 'fahrenheit');
        converterForm.find('#label-for-t1').text('Fahrenheit');
        converterForm.find('#label-for-t2').text('Celsius');

    } else if(convertFrom === "fahrenheit") {
        temp1.data('convert-from', 'celsius');
        converterForm.find('#label-for-t1').text('Celsius');
        converterForm.find('#label-for-t2').text('Fahrenheit');
    }

    convert();
}

temp1.on('keyup mouseup', convert);
converterForm.on('submit', changeConverter);