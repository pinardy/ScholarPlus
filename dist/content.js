// var div=document.createElement("div"); 
// document.body.insertBefore("body")
// div.innerText="test123";

var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("index.html");

document.body.insertBefore (iFrame, document.body.firstChild);