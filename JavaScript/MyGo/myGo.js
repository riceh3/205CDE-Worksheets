var user = '';

function startForm(){
    'use strict';

    //get the value from form
    var name = document.getElementById('Name');

    //send output 
    var output = document.getElementById('output');

    //show output on page
    var message = '';

    user = (name.value);

    message = '<h2>User</h2>';
    message += '<p>' + user + '</p>';

    output.innerHTML = message;
    return false;
}


function init() {
    'use strict';

    document.getElementById('basicForm').onsubmit = startForm;

}
window.onload = init;

