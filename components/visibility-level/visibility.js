// var button_div = document.createElement("div");

// var lv_button = document.createElement("button");
// lv_button.innerHTML = "Least Visible";
// lv_button.addEventListener("click", toggleLeastVisibleAll)

// var d_button = document.createElement("button");
// d_button.innerHTML = "Default";
// d_button.addEventListener("click", toggleDefaultAll)

// var mv_button = document.createElement("button");
// mv_button.innerHTML = "Most Visible"
// mv_button.addEventListener("click", toggleMostVisibleAll)

// button_div.appendChild(lv_button)
// button_div.appendChild(d_button)
// button_div.appendChild(mv_button)

// button_div.setAttribute('class', 'button-container');

// var query_results_body = document.getElementById("gs_bdy_ccl");
// query_results_body.insertBefore(button_div, query_results_body.childNodes[0]);
var description = document.getElementsByClassName("gs_rs");
var authors = document.getElementsByClassName("gs_a");
var extra_footer = document.getElementsByClassName("gs_fl");
var author_div = document.getElementsByClassName("local_author_container");

function toggleLeastVisibleAll() {
  var location = window.location.href;

  // Remove trailing #
  if (location.endsWith("#")) {
    location = location.substring(0, location.length - 1)
  }

  var location = location.replace(/&num=20|&num=10|&num=5/g, "");
  location += "&num=20";
  window.location.replace(location);
}

function toggleDefaultAll() {
  var location = window.location.href;

  // Remove trailing #
  if (location.endsWith("#")) {
    location = location.substring(0, location.length - 1)
  }

  var location = location.replace(/&num=20|&num=10|&num=5/g, "");
  location += "&num=10";
  window.location.replace(location);
}

function toggleMostVisibleAll() {
  var location = window.location.href;

  // Remove trailing #
  if (location.endsWith("#")) {
    location = location.substring(0, location.length - 1)
  }

  var location = location.replace(/&num=20|&num=10|&num=5/g, "");
  location += "&num=5";
  window.location.replace(location);
}


// Floating Action Button
var float_nav = document.createElement("nav");
float_nav.setAttribute('class', 'container');

var mostVisButton = document.createElement("a");
mostVisButton.setAttribute('class', 'buttons');
mostVisButton.setAttribute('href', '#');
mostVisButton.setAttribute('tooltip', 'Most Visible');
mostVisButton.addEventListener("click", toggleMostVisibleAll);
// mostVisButton.addEventListener("click", toggleViewButtonAll(2));

var defVisButton = document.createElement("a");
defVisButton.setAttribute('class', 'buttons');
defVisButton.setAttribute('href', '#');
defVisButton.setAttribute('tooltip', 'Default');
defVisButton.addEventListener("click", toggleDefaultAll);
// defVisButton.addEventListener("click", toggleViewButtonAll(1));

var leastVisButton = document.createElement("a");
leastVisButton.setAttribute('class', 'buttons');
leastVisButton.setAttribute('href', '#');
leastVisButton.setAttribute('tooltip', 'Least Visible');
leastVisButton.addEventListener("click", toggleLeastVisibleAll);
// leastVisButton.addEventListener("click", toggleViewButtonAll(0));

var fab = document.createElement("a");
fab.setAttribute('class', 'buttons');
fab.setAttribute('href', '#');

var span_1 = document.createElement("span");
var span_2 = document.createElement("span");
span_2.setAttribute('class', 'rotate');
span_1.appendChild(span_2);
fab.appendChild(span_1);

float_nav.appendChild(mostVisButton);
float_nav.appendChild(defVisButton);
float_nav.appendChild(leastVisButton);
float_nav.appendChild(fab);

document.body.appendChild(float_nav);

window.addEventListener("load", function mostStyleChange() {
  var location = window.location.href;
  if (location.match(/&num=5/g)) {
    span_2.setAttribute('id', 'current-most');
    for (var i = 0; i < description.length; i++) {
      description[i].style.display = "block";
    }
    for (var i = 0; i < authors.length; i++) {
      authors[i].style.display = "block";
    }
    for (var i = 0; i < extra_footer.length; i++) {
      extra_footer[i].style.display = "none";
    }
    for (var i = 0; i < author_div.length; i++) {
      author_div[i].style.display = "block";
      retrieveAuthorProfile(author_div[i], authors[i], i, true);
    }
  } else if (location.match(/&num=20/g)) {
    span_2.setAttribute('id', 'current-least');
    for (var i = 0; i < description.length; i++) {
      description[i].style.display = "none";
    }
    for (var i = 0; i < authors.length; i++) {
      authors[i].style.display = "none";
    }
    for (var i = 0; i < extra_footer.length; i++) {
      extra_footer[i].style.display = "none";
    }
    for (var i = 0; i < author_div.length; i++) {
      author_div[i].style.display = "none";
    }
  } else {
    span_2.setAttribute('id', 'current-def');
    for (var i = 0; i < description.length; i++) {
      description[i].style.display = "block";
    }
    for (var i = 0; i < authors.length; i++) {
      authors[i].style.display = "block";
    }
    for (var i = 0; i < extra_footer.length; i++) {
      extra_footer[i].style.display = "none";
    }
    for (var i = 0; i < author_div.length; i++) {
      author_div[i].style.display = "none";
    }
  }
});