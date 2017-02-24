// DOM is a structured tree model representation of HTML
// contects HTML, Scripts, Style, all programs together in tree structure.

// DOCUMENT OBJECT MODEL 

// DOM objects ie: Document refferes to everything on/in the Document

//normally uses dot notation such as:

//window.onload(init);
//document.getElementById(); // Can select elements

// Can add dynamic elements to the DOM

window.onload = function() {
// create a couple of elements
    heading = document.createElement("h1");
    heading_text = document.createTextNode("My Title!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}

window.onload = function(){
    heading = document.createElement("p");
    heading_content = document.createTextNode("This is some content");
    heading.appendChild(heading_content);
    document.body.appendChild(heading);
}

// They overwirte each other



