
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
