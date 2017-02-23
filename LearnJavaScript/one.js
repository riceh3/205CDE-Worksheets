
//-------------Variables--------------------------

var myName = "Hannah";//visible to whole function
var undefined = ''; //No value will return undefined
let myOtherName = "Hannah"; //only visible to loop


//-------------Operators-------------------------

var firstHalf = "this is a";
var secondHalf = "sentence";
var sentence = (firstHalf + " " + secondHalf);

// == IS Equal to
// === IS

//------------Control Structures-----------------

var pet1 = "cat";
if (pet1 == "dog"){
    console.log(pet1 += "!");

}
else if (pet1 == "cat"){
    console.log(pet1 += "!!!!!!");
}
else {
    console.log(pet1 += "wrong");
}
//-----------Switch case break -- Control Structures----
var pet = "dog";
switch (pet) {
    case "cat": text = "cat";
    break;

    case "dog": text = "dog"
    break;

    default: text = "The pet is not a dog or a cat";

}
console.log(text);

//------------Controll structures - while & do while ------
// do while = code block will execute at least once
function go(){
    var num = 3;
    while (num > 0) {
        num = num-1;
        console.log(num);
    }
    var newNum = 3;
    do {
        console.log(newNum);
        newNum = newNum - 1;
    }
    while (newNum > 0)

}

//--------------For loops are the same --------------------

var sequence = [0,1,2,3,4,5];

for (i = 0; i < sequence.length; i++){ // the same as for i in range to len

    console.log(sequence[i]);

}

//-------------An Array---------------------------

var array = ["Hannah", "is", "Iron", "man"];

console.log(array[3]);

// objects = like key value pairs BUT NAME VALUE PAIRS -----------
//----------------------- BLOODY OBJECT YOU DUMB HEAD --------------
// then part of the object is name value pairs, jesus hannah!

var object = {

    NAME: "Hey Im a value",
};

//Watch your syntax though :
//no spaces allowed in names or - but can if use "".
// also _ is allowed.


// values can be any js value = a value can be a nested object

var newObject = {
    newName: "new value",
    nestedObject : {
        nestedName : "ooh im nested",
    },
};

//--------------------- get object values ------------------

var show = newObject["newName"];
console.log(show);

// or

var otherShow = newObject.newName;
console.log(otherShow);

// Can use || to set other value to be shown instead of undefined
// to define an undefined value :

newObject["aNewName"] = "A bloody brand new value";
console.log(newObject["aNewName"]);

// OBJECTS ARE NEVER COPPIED, THEY ARE REFERENED !!!!!!!


