var firstName = '';
var lastName = '';

function submitForm(){
    'use strict';

    var first = document.getElementById('firstName');
    var last = document.getElementById('lastName');


    var message = '';

    firstName = (first.value);
    lastName = (last.value);

    console.log("message from " + " " + firstName + " " + lastName);

    return false;

}

function init(){
    'use strit';

    document.getElementById("contactForm").onsubmit = submitForm;
}

window.onload = init;