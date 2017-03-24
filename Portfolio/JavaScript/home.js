
var output = '';

function startSearch(){
    'use strict';

    var search = document.getElementById('search')
    output = (search.value);

    console.log("Searching : " + " " + output);
    return false;

}

function init(){
    'use strict';

    document.getElementById('searchbox').onsubmit = startSearch;
}
window.onload = init;