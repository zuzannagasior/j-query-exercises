var newsletterForm = $('.newsletter');

var userName = newsletterForm.find('#name');
var userEmail = newsletterForm.find('#email');

var inputSubscribe = newsletterForm.find('.newsletter-submit');

function validateNewsletterForm() {
    var nameVal = userName.val();
    var emailVal = userEmail.val();

    //unlock submit button
    if (!!nameVal && !!emailVal) {
        inputSubscribe.attr('disabled', false);
    } else {
        inputSubscribe.attr('disabled', true);
    };
};

function resetNewsletterForm() {
    userName.val('');
    userEmail.val('');
    inputSubscribe.attr('disabled', true);
};

function submitNewsletterForm(e) {
    e.preventDefault();

    var nameVal = userName.val();
    var emailVal = userEmail.val();
    alert('Sending user data... name: ' + nameVal + ', email: ' + emailVal);

    resetNewsletterForm();
};

userName.on('keyup', validateNewsletterForm);
userEmail.on('keyup', validateNewsletterForm);

newsletterForm.on('submit', submitNewsletterForm);