var firstName = '';
var lastName = '';
var emailAddress = '';
var userMessage = '';

function submitForm(){
    'use strict';

    var first = document.getElementById('firstName');
    var last = document.getElementById('lastName');
    var address = document.getElementById('email');
    var message = document.getElementById('comment');


    firstName = (first.value);
    lastName = (last.value);
    emailAddress = (address.value);
    userMessage = (message.value);

    console.log("message from : " + " " + firstName + " " + lastName);
    console.log("Email Address : " + " " + emailAddress);
    console.log("Message : ");
    console.log("       " + userMessage);
    console.log("       ");


    return false;

}

function init(){
    'use strit';

    document.getElementById("contactForm").onsubmit = submitForm;
}

window.onload = init;