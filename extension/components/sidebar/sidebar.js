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

// sort_div.appendChild(sort_span);
sort_div.setAttribute('class', 'sort-container');
sort_span.setAttribute('class', 'title');

var relevance_checkbox_label = document.createElement("label");
var relevance_checkbox_input = document.createElement("input");
var relevance_checkbox_span = document.createElement("span");
relevance_checkbox_label.setAttribute("class", "material-checkbox");
relevance_checkbox_input.setAttribute("type", "checkbox");
relevance_checkbox_input.addEventListener("click", changeToRelevance);
relevance_checkbox_span.innerHTML = "Relevance";
relevance_checkbox_label.appendChild(relevance_checkbox_input);
relevance_checkbox_label.appendChild(relevance_checkbox_span);
sort_div.appendChild(relevance_checkbox_label);

// date checkbox
var date_checkbox_label = document.createElement("label");
var date_checkbox_input = document.createElement("input");
var date_checkbox_span = document.createElement("span");
date_checkbox_label.setAttribute("class", "material-checkbox");
date_checkbox_input.setAttribute("type", "checkbox");
date_checkbox_input.addEventListener("click", changeToDate);
date_checkbox_span.innerHTML = "Date";
date_checkbox_label.appendChild(date_checkbox_input);
date_checkbox_label.appendChild(date_checkbox_span);
sort_div.appendChild(date_checkbox_label);

actionCheckboxStyleChecker();

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
sinceTime_div.setAttribute('class', 'since-time-container');

// creating the checkboxes for "since"

var anytime_checkbox_label = document.createElement("label");
var anytime_checkbox_input = document.createElement("input");
var anytime_checkbox_span = document.createElement("span");
anytime_checkbox_label.setAttribute("class", "material-checkbox");
anytime_checkbox_input.setAttribute("type", "checkbox");
anytime_checkbox_input.addEventListener("click", changeToAnyTime);
anytime_checkbox_span.innerHTML = "Anytime";
anytime_checkbox_label.appendChild(anytime_checkbox_input);
anytime_checkbox_label.appendChild(anytime_checkbox_span);
sinceTime_div.appendChild(anytime_checkbox_label);

var since2018_checkbox_label = document.createElement("label");
var since2018_checkbox_input = document.createElement("input");
var since2018_checkbox_span = document.createElement("span");
since2018_checkbox_label.setAttribute("class", "material-checkbox");
since2018_checkbox_input.setAttribute("type", "checkbox");
since2018_checkbox_input.addEventListener("click", changeToSince2018);
since2018_checkbox_span.innerHTML = "Since 2018";
since2018_checkbox_label.appendChild(since2018_checkbox_input);
since2018_checkbox_label.appendChild(since2018_checkbox_span);
sinceTime_div.appendChild(since2018_checkbox_label);

var since2017_checkbox_label = document.createElement("label");
var since2017_checkbox_input = document.createElement("input");
var since2017_checkbox_span = document.createElement("span");
since2017_checkbox_label.setAttribute("class", "material-checkbox");
since2017_checkbox_input.setAttribute("type", "checkbox");
since2017_checkbox_input.addEventListener("click", changeToSince2017);
since2017_checkbox_span.innerHTML = "Since 2017";
since2017_checkbox_label.appendChild(since2017_checkbox_input);
since2017_checkbox_label.appendChild(since2017_checkbox_span);
sinceTime_div.appendChild(since2017_checkbox_label);


var since2014_checkbox_label = document.createElement("label");
var since2014_checkbox_input = document.createElement("input");
var since2014_checkbox_span = document.createElement("span");
since2014_checkbox_label.setAttribute("class", "material-checkbox");
since2014_checkbox_input.setAttribute("type", "checkbox");
since2014_checkbox_input.addEventListener("click", changeToSince2014);
since2014_checkbox_span.innerHTML = "Since 2014";
since2014_checkbox_label.appendChild(since2014_checkbox_input);
since2014_checkbox_label.appendChild(since2014_checkbox_span);
sinceTime_div.appendChild(since2014_checkbox_label);

// set the ticked thing
sinceCheckboxStyleChecker();

// div for action buttons
var action_div = document.createElement("div");
action_div.setAttribute("class", "action-container");

// adv search button
var adv_search = document.createElement("button");
var magnifying_glass = document.createElement("i");
magnifying_glass.setAttribute("class", "material-icons")
magnifying_glass.innerHTML = "search";
adv_search.appendChild(magnifying_glass);
var adv_search_text = document.createElement("span");
adv_search_text.innerHTML = "Advanced Search";
adv_search.appendChild(adv_search_text);
adv_search.setAttribute("id", "gs_res_drw_adv");
adv_search.addEventListener("click", popupAdvancedSearch)
action_div.appendChild(adv_search);

// alert button
var createAlertButton = document.createElement("button");
createAlertButton.addEventListener("click", createAlert)
var alertIcon = document.createElement("i");
alertIcon.setAttribute("class", "material-icons")
alertIcon.innerHTML = "email";
createAlertButton.appendChild(alertIcon);
var alert_text = document.createElement("span");
alert_text.innerHTML = "Alert Me";
createAlertButton.appendChild(alert_text);
action_div.appendChild(createAlertButton);

// horizontal lines as separators
var hr = document.createElement("hr");
hr.style.height = '100%';
hr.style.width = '100%';

// append all child into sidebar_div parent div
var sidebar_div = document.createElement("div");

sidebar_div.appendChild(sort_span);
sidebar_div.appendChild(sort_div);
sidebar_div.appendChild(since_span);
sidebar_div.appendChild(sinceTime_div);
sidebar_div.appendChild(hr);
// sidebar_div.appendChild(adv_search_div);
sidebar_div.appendChild(action_div);
sidebar_div.setAttribute('class', 'sidebar-container');

// link to incorporate google material icon
var link = document.createElement("link");
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

// append to the google scholar sidebar
var advSearch = document.getElementById("gs_bdy_sb");
advSearch.insertBefore(sidebar_div, advSearch.childNodes[0]);

function changeToRelevance() {
  date_checkbox_input.checked = false;
  relevance_checkbox_input.checked = true;
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
  date_checkbox_input.checked = true;
  relevance_checkbox_input.checked = false;
  var location = window.location.href;
  if (!location.includes("&scisbd=1")) {
    location += "&scisbd=1"
  }
  if (location.endsWith("#")) {
    location = location.substring(0, location.length - 1)
  }
  window.location.replace(location)
}

function actionCheckboxStyleChecker() {
  var location = window.location.href;
  if (location.includes("&scisbd=1")) {
    date_checkbox_input.checked = true;
  } else {
    relevance_checkbox_input.checked = true;
  }
}

function sinceCheckboxStyleChecker() {
  var location = window.location.href;
  // Since any time
  if (location.includes("scholar?hl=en")) {
    anytime_checkbox_input.checked = true;
    since2018_checkbox_input.checked = false;
    since2017_checkbox_input.checked = false;
    since2014_checkbox_input.checked = false;
  }
  // Since 2018
  if (location.includes("scholar?as_ylo=2018")) {
    anytime_checkbox_input.checked = false;
    since2018_checkbox_input.checked = true;
    since2017_checkbox_input.checked = false;
    since2014_checkbox_input.checked = false;
  }
  // Since 2017
  else if (location.includes("scholar?as_ylo=2017")) {
    anytime_checkbox_input.checked = false;
    since2018_checkbox_input.checked = false;
    since2017_checkbox_input.checked = true;
    since2014_checkbox_input.checked = false;
  }
  // Since 2014
  else if (location.includes("scholar?as_ylo=2014")) {
    anytime_checkbox_input.checked = false;
    since2018_checkbox_input.checked = false;
    since2017_checkbox_input.checked = false;
    since2014_checkbox_input.checked = true;
  } else {
    anytime_checkbox_input.checked = true;
    since2018_checkbox_input.checked = false;
    since2017_checkbox_input.checked = false;
    since2014_checkbox_input.checked = false;
  }
}

function changeToAnyTime() {
  anytime_checkbox_input.checked = true;
  since2018_checkbox_input.checked = false;
  since2017_checkbox_input.checked = false;
  since2014_checkbox_input.checked = false;
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
  anytime_checkbox_input.checked = false;
  since2018_checkbox_input.checked = true;
  since2017_checkbox_input.checked = false;
  since2014_checkbox_input.checked = false;
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
  anytime_checkbox_input.checked = false;
  since2018_checkbox_input.checked = false;
  since2017_checkbox_input.checked = true;
  since2014_checkbox_input.checked = false;
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
  anytime_checkbox_input.checked = false;
  since2018_checkbox_input.checked = false;
  since2017_checkbox_input.checked = false;
  since2014_checkbox_input.checked = true;
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
