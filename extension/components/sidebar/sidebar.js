// div for the advanced search
var adv_search_div = document.createElement("div");
var adv_search_span = document.createElement("span");
var magnifying_glass = document.createElement("i");
magnifying_glass.setAttribute("class", "material-icons")
magnifying_glass.innerHTML = "search";
adv_search_span.appendChild(magnifying_glass);
adv_search_text = document.createElement("span");
adv_search_text.innerHTML = "Advanced Search";
adv_search_span.appendChild(adv_search_text);

adv_search_div.appendChild(adv_search_span);

var adv_search = document.createElement("button");
adv_search.innerHTML = "Search Now";
adv_search.addEventListener("click", popupAdvancedSearch)
// adv_search.setAttribute("class", "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary");
adv_search_div.appendChild(adv_search);
adv_search_div.setAttribute('class', 'adv-search-container');
adv_search_span.setAttribute('class', 'title');

// div for the sort
var sort_div = document.createElement("div");
var sort_span = document.createElement("span");
var filter_list = document.createElement("i");
filter_list.setAttribute("class", "material-icons")
filter_list.innerHTML = "filter_list";
sort_span.appendChild(filter_list);
var sort_text = document.createElement("span");
sort_text.innerHTML = "Sort by";
sort_span.appendChild(sort_text);

sort_div.appendChild(sort_span);
sort_div.setAttribute('class', 'sort-container');
sort_span.setAttribute('class', 'title');

// Relevance div
var row_div1 = document.createElement("div");
row_div1.setAttribute('class', 'sort-row');

var relevance_button = document.createElement("button");
relevance_button.addEventListener("click", changeToRelevance)
relevance_button.innerHTML = "Relevance";

row_div1.appendChild(relevance_button);
sort_div.appendChild(row_div1);

// Date div
var row_div2 = document.createElement("div");
row_div2.setAttribute('class', 'sort-row');
var date_button = document.createElement("button");
date_button.addEventListener("click", changeToDate)
date_button.innerHTML = "Date";

// Edits styling of filter buttons accordingly
buttonStyleChecker();

row_div2.appendChild(date_button);
sort_div.appendChild(row_div2);

// Div for 'Since' title
var sinceTitle_div = document.createElement("div");
var since_span = document.createElement("span");
var since_list = document.createElement("i");
since_list.setAttribute("class", "material-icons")
since_list.innerHTML = "access_alarm";
since_span.appendChild(since_list);
var since_text = document.createElement("span");
since_text.innerHTML = "Since";
since_span.appendChild(since_text);

sinceTitle_div.appendChild(since_span);
sinceTitle_div.setAttribute('class', 'sort-container');
since_span.setAttribute('class', 'title');

// Since time div
var sinceTime_div = document.createElement("div");
sinceTime_div.setAttribute('class', 'sort-row');

var anyTimeButton = document.createElement("button");
anyTimeButton.addEventListener("click", changeToAnyTime)
anyTimeButton.innerHTML = "Any time";

var since2018Button = document.createElement("button");
since2018Button.addEventListener("click", changeToSince2018)
since2018Button.innerHTML = "Since 2018";

var since2017Button = document.createElement("button");
since2017Button.addEventListener("click", changeToSince2017)
since2017Button.innerHTML = "Since 2017";

var since2014Button = document.createElement("button");
since2014Button.addEventListener("click", changeToSince2014)
since2014Button.innerHTML = "Since 2014";

// Edits the styling of the since buttons accordingly
sinceButtonStyleChecker()

sinceTime_div.appendChild(since_span);
sinceTime_div.appendChild(anyTimeButton);
sinceTime_div.appendChild(since2018Button);
sinceTime_div.appendChild(since2017Button);
sinceTime_div.appendChild(since2014Button);

// div for 'create alert' title
var create_alert_span = document.createElement("span");
var alertIcon = document.createElement("i");
alertIcon.setAttribute("class", "material-icons")
alertIcon.innerHTML = "email";
create_alert_span.appendChild(alertIcon);
create_alert_text = document.createElement("span");
create_alert_text.innerHTML = "Alert me";
create_alert_span.appendChild(create_alert_text);
create_alert_span.setAttribute("class", "title");

// create alert div
var createAlert_div = document.createElement("div");
var createAlertButton = document.createElement("button");
createAlertButton.addEventListener("click", createAlert)
createAlertButton.innerHTML = "Alert";
createAlert_div.appendChild(create_alert_span);
createAlert_div.appendChild(createAlertButton);
createAlert_div.setAttribute("class", "alert-container");


// horizontal lines as separators
var hr = document.createElement("hr");
hr.style.height = '100%';
hr.style.width = '100%';
var hr2 = document.createElement("hr");
hr2.style.height = '100%';
hr2.style.width = '100%';
var hr3 = document.createElement("hr");
hr3.style.height = '100%';
hr3.style.width = '100%';

// append all child into sidebar_div parent div
var sidebar_div = document.createElement("div");
sidebar_div.appendChild(adv_search_div);
sidebar_div.appendChild(hr);
sidebar_div.appendChild(sort_div)
sidebar_div.appendChild(hr2);
sidebar_div.appendChild(sinceTime_div)
sidebar_div.appendChild(hr3);
sidebar_div.appendChild(createAlert_div)
sidebar_div.setAttribute('class', 'sidebar-container');

// link to incorporate google material icon
var link = document.createElement("link");
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

// append to the google scholar sidebar
var advSearch = document.getElementById("gs_bdy_sb");
advSearch.insertBefore(sidebar_div, advSearch.childNodes[0]);

function popupAdvancedSearch() {
  var location = window.location.href;

  // Replaces trailing "==#"
  if (location.includes("==#")) {
    console.log("contains ==#")
    location = location.substring(0, location.length - 3)
  }
  // Replaces trailing "=#"
  if (location.includes("=#")) {
    console.log("contains =#")
    location = location.replace(/=#/g, " ");
  }
  location += "=#d=gs_asd";
  window.location = location
}

function changeToRelevance() {
  var location = window.location.href;
  if (location.includes("&scisbd=1")) {
    location = location.replace(/&scisbd=1/g, "");
  }
  if (location.endsWith("#")) {
    location = location.substring(0, location.length - 1)
  }
  window.location.replace(location)
}

function changeToDate() {
  var location = window.location.href;
  if (!location.includes("&scisbd=1")) {
    location += "&scisbd=1"
  }
  if (location.endsWith("#")) {
    location = location.substring(0, location.length - 1)
  }
  window.location.replace(location)
}

function buttonStyleChecker() {
  var location = window.location.href;
  if (location.includes("&scisbd=1")) {
    date_button.style.background = "rgb(76,142,251)";
    date_button.style.color = "white";
  } else {
    relevance_button.style.background = "rgb(76,142,251)";
    relevance_button.style.color = "white";
  }
}

function sinceButtonStyleChecker() {
  var location = window.location.href;
  // Since any time
  if (location.includes("scholar?hl=en")) {
    anyTimeButton.style.background = "rgb(76,142,251)";
    anyTimeButton.style.color = "white";
  }
  // Since 2018
  if (location.includes("scholar?as_ylo=2018")) {
    since2018Button.style.background = "rgb(76,142,251)";
    since2018Button.style.color = "white";
  }
  // Since 2017
  if (location.includes("scholar?as_ylo=2017")) {
    since2017Button.style.background = "rgb(76,142,251)";
    since2017Button.style.color = "white";
  }
  // Since 2014
  if (location.includes("scholar?as_ylo=2014")) {
    since2014Button.style.background = "rgb(76,142,251)";
    since2014Button.style.color = "white";
  } else {
    relevance_button.style.background = "rgb(76,142,251)";
    relevance_button.style.color = "white";
  }
}

function changeToAnyTime() {
  var location = window.location.href;
  if (location.includes("scholar?as_ylo=2018")) {
    var location = location.replace("scholar?as_ylo=2018", "scholar?hl=en");
  }
  if (location.includes("scholar?as_ylo=2017")) {
    var location = location.replace("scholar?as_ylo=2017", "scholar?hl=en");
  }
  if (location.includes("scholar?as_ylo=2014")) {
    var location = location.replace("scholar?as_ylo=2014", "scholar?hl=en");
  }
  window.location.replace(location)
}

function changeToSince2018() {
  var location = window.location.href;
  if (location.includes("scholar?hl=en")) {
    // stuff as_ylo=2018 in between scholar? and the rest
    var location = location.replace("scholar?hl=en", "scholar?as_ylo=2018&hl=en");
  }
  if (location.includes("scholar?as_ylo=2017")) {
    // stuff as_ylo=2018 in between scholar? and the rest
    var location = location.replace("scholar?as_ylo=2017", "scholar?as_ylo=2018");
  }
  if (location.includes("scholar?as_ylo=2014")) {
    // stuff as_ylo=2018 in between scholar? and the rest
    var location = location.replace("scholar?as_ylo=2014", "scholar?as_ylo=2018");
  }
  window.location.replace(location)
}

function changeToSince2017() {
  var location = window.location.href;
  if (location.includes("scholar?hl=en")) {
    // stuff as_ylo=2018 in between scholar? and the rest
    var location = location.replace("scholar?hl=en", "scholar?as_ylo=2017&hl=en");
  }
  if (location.includes("scholar?as_ylo=2018")) {
    // stuff as_ylo=2018 in between scholar? and the rest
    var location = location.replace("scholar?as_ylo=2018", "scholar?as_ylo=2017");
  }
  if (location.includes("scholar?as_ylo=2014")) {
    // stuff as_ylo=2018 in between scholar? and the rest
    var location = location.replace("scholar?as_ylo=2014", "scholar?as_ylo=2017");
  }
  window.location.replace(location)
}

function changeToSince2014() {
  var location = window.location.href;
  if (location.includes("scholar?hl=en")) {
    // stuff as_ylo=2018 in between scholar? and the rest
    var location = location.replace("scholar?hl=en", "scholar?as_ylo=2014&hl=en");
  }
  if (location.includes("scholar?as_ylo=2018")) {
    // stuff as_ylo=2018 in between scholar? and the rest
    var location = location.replace("scholar?as_ylo=2018", "scholar?as_ylo=2014");
  }
  if (location.includes("scholar?as_ylo=2017")) {
    // stuff as_ylo=2018 in between scholar? and the rest
    var location = location.replace("scholar?as_ylo=2017", "scholar?as_ylo=2014");
  }
  window.location.replace(location)
}

function createAlert() {
  var location = window.location.href;

  // Extract search query
  if (location.includes("&q=")) {
    var startIndex = location.indexOf("&q=")
    for (i = startIndex + 4; i < location.length; i++) {
      if (location.charAt(i) == "&") {
        var endIndex = i
        break
      }
    }
    console.log("startIndex:", startIndex)
    console.log("endIndex:", endIndex)
    var searchQuery = location.substring(startIndex + 3, endIndex)
  }

  // Replace href with create alert with search query inside
  newLocation = "https://scholar.google.com.sg/scholar_alerts?view_op=create_alert_options&hl=en&alert_query=" + searchQuery
  window.location.replace(newLocation)
}
