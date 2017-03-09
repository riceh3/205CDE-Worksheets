window.onload = init();

function xp(){
    'use strict';

    var newDiv = document.getElementById("work");
    //newDiv.onmouseover = addText;

}
function addText(){
    if (document.createTextNode){
        var newText = "More info on experience page";
        var newNode = document.createTextNode(newText);
        document.getElementById("create").appendChild(newNode);
    }
    else {
        alert("out of date browser");
    }

}
function init(){
    'use strict';

    var personalprofile = document.getElementById("personalarrow");
    personalprofile.onclick = showPersonal;
}
function showPersonal(){
    'use strict';

    var show = document.getElementById("show");
    
    show.innerHTML = "Second year undergraduate studying Computing at Coventry Univeristy. Incredibley interested and inspired by the rapidly changing world of technology that we live in today, and I strive to develop and discover the future technical enhancements that habe yet to have been created. My future ambitions are to gain as much experience and practical skills as possible to work in the computer science industry. Main skills are; organisation, communication, team work, time managment and creativity.";

    }






