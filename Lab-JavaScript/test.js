function calculate(){
    'use strict'
    var total;
    var quantity = document.getElementById("quantity").value;
    var price = 10;
    total = quantity * price;
    console.log('Total at $10 a pop' + total);
    total = total.toFixed(2);
    document.getElementById('total').value = total;

    return false;
}

function init(){
    'use strict'

    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;

}
window.onload = init;