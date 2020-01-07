var registerForm = $('.register');

var userLogin = registerForm.find('#login');
var userPassword = registerForm.find('#password');

var passwordStrength = registerForm.find('.reg-valid-box');
passwordStrength.hide();

var inputSignUp = registerForm.find('.register-submit');

function checkPasswordStrength(password) {
    var averagePass = registerForm.find('#average');
    var strongPass = registerForm.find('#strong');

    var passwordLength = password.length;

    var numberPattern = /\d+/;
    var minOneNumber = numberPattern.test(password);

    var capitalLetter = /[A-Z]+/;
    var minOneCapitalLetter = capitalLetter.test(password);

    if (passwordLength >= 12 && minOneCapitalLetter && minOneNumber) {
        strongPass.show();
        averagePass.show();
    } else if (passwordLength >= 8 && minOneCapitalLetter) {
        averagePass.show();
        strongPass.hide();
    } else {
        averagePass.hide();
        strongPass.hide();
    };

};

function validateRegisterForm(e) {
    var targetId = e.target.id;

    var loginVal = userLogin.val();
    var passwordVal = userPassword.val();

    //unlock submit button
    if (!!loginVal && !!passwordVal) {
        inputSignUp.attr('disabled', false);
    } else {
        inputSignUp.attr('disabled', true);
    };


    //show password strenght
    if (targetId === 'password') {
        if (!!passwordVal) {
            passwordStrength.show();
            checkPasswordStrength(passwordVal);
        } else {
            passwordStrength.hide();
        };
    };
};

function resetRegisterForm() {
    userLogin.val('');
    userPassword.val('');
    passwordStrength.hide();
    inputSignUp.attr('disabled', true);
};

function submitRegisterForm(e) {
    e.preventDefault();

    var loginVal = userLogin.val();
    var passwordVal = userPassword.val();
    alert("Signing up... name: " + loginVal + ", password: " + passwordVal);

    resetRegisterForm();
};

userLogin.on('keyup', validateRegisterForm);
userPassword.on('keyup', validateRegisterForm);

registerForm.on('submit', submitRegisterForm);