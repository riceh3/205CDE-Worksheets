window.onload = init;

function init(){
    var upPersonal = document.getElementById("lesspersonal");
    var upTech = document.getElementById("lessTech");
    var upEducation = document.getElementById("lessEducation");
    var upWork = document.getElementById("lessWork");
    var upProjects = document.getElementById("lessProject");
   
    upWork.style.visibility = "hidden";
    upPersonal.style.visibility = "hidden";
    upTech.style.visibility = "hidden";
    upEducation.style.visibility = "hidden";
    upProjects.style.visibility = "hidden";
}

function personalDown(){
    'use strict';


    var personal = document.getElementById("personal");
    var more = document.getElementById("morepersonal");
    var up = document.getElementById("lesspersonal");

    up.style.visibility = "visible";
    
    more.style.visibility = "hidden";

    
    personal.innerHTML = " enhancements that habe yet to have been created. My future ambitions are to gain as much experience and practical skills as possible to work in the computer science industry. Main skills are; organisation, communication, team work, time managment and creativity.";
    
}

function personalUp(){
    'use strict';

    var personal = document.getElementById("personal");
    var more = document.getElementById("morepersonal");
    more.style.visibility = "visible";
    var up = document.getElementById("lesspersonal");

    personal.innerHTML = " ";
    up.style.visibility = "hidden";
    
}

function techDown(){
    'use strict';

    var tech = document.getElementById("list");
    tech.innerHTML = "<ul><li>Python</li><li>Microsoft Packages</li><li>SQL</li></ul>";

    var tech2 = document.getElementById("list2");
    tech2.innerHTML = "<ul><li>C++</li><li>GitHub</li><li>Visual Studio</li></ul>";

    var tech3 = document.getElementById("list3");
    tech3.innerHTML = "<ul><li>C#</li><li>HTML/CSS</li><li>Full UK Driving License</li></ul>";

    var more = document.getElementById("moreTech");
    more.style.visibility = "hidden";

    var up = document.getElementById("lessTech");
    up.style.visibility = "visible";
}

function techUp(){
    'use strict';

    var tech = document.getElementById("list");
    tech.innerHTML = " ";
    
    var tech2 = document.getElementById("list2");
    tech2.innerHTML = " ";

    var tech3 = document.getElementById("list3");
    tech3.innerHTML = " ";

    var more = document.getElementById("moreTech");
    more.style.visibility = "visible";

    var up = document.getElementById("lessTech");
    up.style.visibility = "hidden";
}
function educationDown(){
    'use strict';


    var education = document.getElementById("place");
    education.innerHTML = "Coventry University(2015-Present)";

    var education2 = document.getElementById("secondyear");
    education2.innerHTML = "Second Year Modules:";

    var education3 = document.getElementById("modules1");
    education3.innerHTML = " Designing for Usability 2 - Developing for the modern Web 1 - Programming, Algorithms and Data Structures - Data and Information Retrieval - Technology and it's Social, Legal and Ethical context - Making Money Online";

    var education4 = document.getElementById("firstyear");
    education4.innerHTML = "First Year Modules:";

    var education5 = document.getElementById("modules2");
    education5.innerHTML = " Introduction to Computing(72%) - Introduction to Algorithms(68%) - Computer Architecture and Networks(60%) - Enterprise Information Systems(78%) - Designing for Usability 1(66%) - Logic and Sets(68%) - Foundation App Development with Microsoft Net Framework(100%).";

    var education6 = document.getElementById("place2");
    education6.innerHTML = " King Edward VI College(2013-2015):";

    var education7 = document.getElementById("kegs");
    education7.innerHTML = "4 AS-Level and 3 A-Level(Accounting, Law, Business)";

    var education8 = document.getElementById("place3");
    education8.innerHTML = "Etone College(2011-2013)";

    var education9 = document.getElementById("etone");
    education9.innerHTML = "10 GCSE'S graded between A-C, including English and Math's";

    var more = document.getElementById("moreEducation");
    more.style.visibility = "hidden";

    var up = document.getElementById("lessEducation");
    up.style.visibility = "visible";
    

}
function educationUp(){
    'use strict';

    var education = document.getElementById("place");
    education.innerHTML = " ";

    var education2 = document.getElementById("secondyear");
    education2.innerHTML= " ";

    var education3 = document.getElementById("modules1");
    education3.innerHTML = " ";

    var education4 = document.getElementById("firstyear");
    education4.innerHTML = " ";

    var education5 = document.getElementById("modules2");
    education5.innerHTML = " ";

    var education6 = document.getElementById("place2");
    education6.innerHTML = " ";

    var education7 = document.getElementById("kegs");
    education7.innerHTML = " ";

    var education8 = document.getElementById("place3");
    education8.innerHTML = " ";

    var education9 = document.getElementById("etone");
    education9.innerHTML = " ";

    var more = document.getElementById("moreEducation");
    more.style.visibility = "visible";

    var up = document.getElementById("lessEducation");
    up.style.visibility = "hidden";
}

function workDown(){
    'use strict';

    var workname = document.getElementById("bank");
    workname.innerHTML = "Lloyds Banking Group - Summer Internship: ";

    var workdate = document.getElementById("bankdate");
    workdate.innerHTML = "June 2014 - August 2014: ";

    var workinfo = document.getElementById("bankinfo");
    workinfo.innerHTML = "As part of the Business academy program, I had the opportunity of working within the Birmingham branch of Lloyds bank. This experience was outstanding. I gained an in-depth view of the workings of the Bank, and greeted and advised customers using the branch. My main role was to encourage and initiate customers to use the new instant deposit machine in branch. Many customers were apprehensive, however once I introduced them to the advantages  of the machine, and hekped them navigate it, many then had the confidence to use it themselves.I gained skills in;Teamwork, organization and, communication. ";

    var workname2 = document.getElementById("argos");
    workname2.innerHTML = "Argos - Sales Assistant:";

    var workdate2 = document.getElementById("argosdate");
    workdate2.innerHTML = "November 2013 - January 2014:";

    var workinfo2 = document.getElementById("argosinfo");
    workinfo2.innerHTML = " Sales assistant, collect and distribute orders, assist and advise customers. I gained valuable experience with interacting and helping customers during a busy time. I gained skills in; Time management and, communication.";

    var more = document.getElementById("moreWork");
    more.style.visibility = "hidden";

    var up = document.getElementById("lessWork");
    up.style.visibility = "visible";
}

function workUp(){
    'use strict';

    var workname = document.getElementById("bank");
    workname.innerHTML = " ";

    var workdate = document.getElementById("bankdate");
    workdate.innerHTML = " ";

    var workinfo = document.getElementById("bankinfo");
    workinfo.innerHTML = " ";

    var workname2 = document.getElementById("argos");
    workname2.innerHTML = " ";

    var workdate2 = document.getElementById("argosdate");
    workdate2.innerHTML = " ";

    var workinfo2 = document.getElementById("argosinfo");
    workinfo2.innerHTML = " ";

    var more = document.getElementById("moreWork");
    more.style.visibility = "visible";

    var up = document.getElementById("lessWork");
    up.style.visibility = "hidden";

}

function projectDown(){
    'use strict';

    var projects = document.getElementById("projectOne");
    projects.innerHTML = "During my first year of univeristy I worked in a team of six to delevop a game of 'Tic Tac Toe' in python. The aim was to use AGILE project planning and developemtn, as well as create the game to be playable both online vs another player and offline against the computer AI. My responsibilities were:";

    var projectslist1 = document.getElementById("projectlist");
    projectslist1.innerHTML = "<ul><li>&bullet;&nbsp;Create online server</li><li>&bullet;&nbsp;Code the win conditions</li><li>&bullet;&nbsp;Design and code the game menu</li></ul>";

    var projectslist2 = document.getElementById("projectlist2");
    projectslist2.innerHTML = "<ul><li>&bullet;&nbsp;Create the user guide</li><li>&bullet;&nbsp;Code game board for input and selection</li></ul>";

    var project1text = document.getElementById("project1text");
    project1text.innerHTML = "To complete this project, I used my technical skills in, Python and Microsoft packages. I also used teamwork, communication and organization to ensure the project was a success. We completed this projects in time and achieved first class marks of 80%, we also further developed the game to include sounds, and title screen. I learned how to implement my prgramming skills to solve problems and work in a team enviroment with multiple developers generating and editing code.";

    var more = document.getElementById("moreProject");
    var up = document.getElementById("lessProject");


    up.style.visibility = "visible";
    
    more.style.visibility = "hidden";


}
function projectUp(){
    'use strict';

    var projects = document.getElementById("projectOne");
    projects.innerHTML = " ";

    var projectslist1 = document.getElementById("projectlist");
    projectslist1.innerHTML = " ";

    var projectslist2 = document.getElementById("projectlist2");
    projectslist2.innerHTML = " ";

    var project1text = document.getElementById("project1text");
    project1text.innerHTML = " ";

    var more = document.getElementById("moreProject");
    var up = document.getElementById("lessProject");

    up.style.visibility = "hidden";
    
    more.style.visibility = "visible";
   
}