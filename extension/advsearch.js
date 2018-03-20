var sideBar = document.createElement("div");

// var searchBar = document.getElementById("advsearch");

var iframe = document.createElement('iframe');
iframe.src = chrome.runtime.getURL('advsearch.html');
document.body.appendChild(iframe);
console.log(document.styleSheets);
console.log(iframe)

if(!document.getElementById('advsearch')) {
    var link = document.createElement('link');
    link.type = "text/css"
    console.log(link.type)

    link.id = 'advsearch';
    link.rel = 'stylesheet';
    link.href = 'advsearch.css';
    document.head.appendChild(link);
}

sideBar.appendChild(iframe)

sideBar.setAttribute('class', 'sidebar-container');

var advSearch = document.getElementById("gs_bdy_sb");
advSearch.insertBefore(sideBar, advSearch.childNodes[0]);
 