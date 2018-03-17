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
  var location = window.location.href;
  var location = location.replace(/&num=20|&num=10|&num=5/g, "");
  location += "&num=20";
  window.location.replace(location);
}

function toggleDefault() {
  var location = window.location.href;
  var location = location.replace(/&num=20|&num=10|&num=5/g, "");
  location += "&num=10";
  window.location.replace(location);
}

function toggleMostVisible() {
  var location = window.location.href;
  var location = location.replace(/&num=20|&num=10|&num=5/g, "");
  location += "&num=5";
  window.location.replace(location);
}


window.addEventListener("load", function mostStyleChange() {
  var location = window.location.href;
  if (location[location.length - 1] === '5') {
    for (var i = 0; i < description.length; i++) {
      description[i].style.display = "block";
    }
    for (var i = 0; i < authors.length; i++) {
      authors[i].style.display = "block";
    }
    for (var i = 0; i < extra_footer.length; i++) {
      extra_footer[i].style.display = "block";
    }
  } else if (location[location.length - 2] === '1' && location[location.length - 1] === '0') {
    for (var i = 0; i < description.length; i++) {
      description[i].style.display = "block";
    }
    for (var i = 0; i < authors.length; i++) {
      authors[i].style.display = "none";
    }
    for (var i = 0; i < extra_footer.length; i++) {
      extra_footer[i].style.display = "none";
    }
  } else {
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
});
