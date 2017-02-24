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

function namedFunction(){
    var test = '';
    return test;
}

var anon = function Anonymouse() {  //Anon functions are assigned to var
    var test = '';                 // can be reassigned later.
    return test;
};

function subtraction(a,b){
    var total = (a - b);
    console.log(total);
    return total;
}

subtraction(6,3);

var anonymous = function anon(c,d){
    var total = (c + d);
    console.log(total);
    return total;
};

anonymous(3,3);   //to call anon function, call the variables

// --------------------Methods------------------------------

// function is a value of a name in an object

var object = {
    name: function Value(){
        var a = "hello";
        console.log(a);
        return a;
    }
};

object.name();

//Functions are first class objects:
//            - return values
//            - parameter values

//-------------------Objects------------------------------

// = classes
class Object{
    constructor(firstName, lastName){
        this.first = firstName;
        this.last = lastName;
    }
}

var user = new Object("Hannah", "Rice");

//Functions with "new"= contructor functions
// "new" is strongly linked to "this"

//--------------Inheritance with classes-----------------------
// use prototypes 

class Person {
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
}
var add = new Person("Hannah", "Rice");

Person.prototype.fullname = function(){
    return this.first + " " + this.last;
};
add.fullname();
