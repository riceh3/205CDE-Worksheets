//----------------------Functions----------------------------

var x = 2;
var y = 2;

function addition(x,y){
    var total = (x + y);
    console.log(total);
    return total; //need return statememt else will be undefined
}
addition(x,y);

//Function scope = varibales defined in function only viewable inside function.
//But are visible throughout whole function.

//-----------------JavaScript Hoisting---------------------------

// moves all declarations to the top scope
// declare all variables at top of function
// this is default action of JavaScript

function scope(){
    var defineHere = '';
    //then code blocks
}

// named functions can call itself, and be used for debuggers

//-------------------Anonymous Functions-----------------------

