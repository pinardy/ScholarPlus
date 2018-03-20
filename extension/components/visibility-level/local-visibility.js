// append a button container to each search result
var individual_results_body = document.getElementsByClassName("gs_r");
for (var i = 0; i < individual_results_body.length; i++) {
  var button_div = document.createElement("div");

  var lv_button = document.createElement("button");
  lv_button.innerHTML = "Least Visible";
  lv_button.addEventListener("click", toggleLeastVisible.bind(null, i));

  var d_button = document.createElement("button");
  d_button.innerHTML = "Default";
  d_button.addEventListener("click", toggleDefault.bind(null, i));

  var mv_button = document.createElement("button");
  mv_button.innerHTML = "Most Visible";
  mv_button.addEventListener("click", toggleMostVisible.bind(null, i));

  button_div.appendChild(lv_button);
  button_div.appendChild(d_button);
  button_div.appendChild(mv_button);

  button_div.setAttribute('class', 'local-button-container');
  individual_results_body[i].insertBefore(button_div, null);
}

// selecting the description, authors, and extra footer, they are arrays
var description = document.getElementsByClassName("gs_rs");
var authors = document.getElementsByClassName("gs_a");
var extra_footer = document.getElementsByClassName("gs_fl");

function toggleLeastVisible(index) {
  description[index].style.display = "none";
  authors[index].style.display = "none";
  extra_footer[index].style.display = "none";
}

function toggleDefault(index) {
  description[index].style.display = "block";
  authors[index].style.display = "none";
  extra_footer[index].style.display = "none";
}

function toggleMostVisible(index) {
  description[index].style.display = "block";
  authors[index].style.display = "block";
  extra_footer[index].style.display = "none";
}
