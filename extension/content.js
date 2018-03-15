var button_div = document.createElement("div");

var lv_button = document.createElement("button");
lv_button.innerHTML = "Least Visible";
lv_button.addEventListener("click", toggleLeastVisible)

var d_button = document.createElement("button");
d_button.innerHTML = "Default";
d_button.addEventListener("click", toggleDefault)

var mv_button = document.createElement("button");
mv_button.innerHTML = "Most Visible"
mv_button.addEventListener("click", toggleMostVisible)

button_div.appendChild(lv_button)
button_div.appendChild(d_button)
button_div.appendChild(mv_button)

button_div.setAttribute('class', 'button-container');

var query_results_body = document.getElementById("gs_bdy_ccl");
query_results_body.insertBefore(button_div, query_results_body.childNodes[0]);
var description = document.getElementsByClassName("gs_rs");
var authors = document.getElementsByClassName("gs_a");
var extra_footer = document.getElementsByClassName("gs_fl");

function toggleLeastVisible() {
    for (var i = 0; i < description.length; i++) {
        description[i].style.display = "none";
    }
    for (var i = 0; i < authors.length; i++) {
        authors[i].style.display = "none";
    }
    for (var i = 0; i < extra_footer.length; i++) {
        extra_footer[i].style.display = "none";
    }
}

function toggleDefault() {
    console.log('default');
    for (var i = 0; i < description.length; i++) {
        description[i].style.display = "initial";
    }
    for (var i = 0; i < authors.length; i++) {
        authors[i].style.display = "none";
    }
    for (var i = 0; i < extra_footer.length; i++) {
        extra_footer[i].style.display = "none";
    }
}

function toggleMostVisible() {
    for (var i = 0; i < description.length; i++) {
        description[i].style.display = "initial";
    }
    for (var i = 0; i < authors.length; i++) {
        authors[i].style.display = "initial";
    }
    for (var i = 0; i < extra_footer.length; i++) {
        extra_footer[i].style.display = "initial";
    }
}

// var button2=document.createElement("button"); 
// document.body.insertBefore("body")
// button2.innerText="Normal";
// var button3=document.createElement("button"); 
// document.body.insertBefore("body")
// button3.innerText="Most Visible";

// var iFrame  = document.createElement ("iframe");
// iFrame.src  = chrome.extension.getURL ("index.html");

// document.body.insertBefore (iFrame, document.body.firstChild);
