// make all <br> disappear for alignment issues in description
var all_br = document.getElementsByTagName("br");
for (let i = 0; i < all_br.length; i++) {
  all_br[i].style.display = "none";
}
var all_results = document.getElementsByClassName("gs_r");
for (let i = 0; i < all_results.length; i++) {
  // append <hr> to each individual_results_body[i]
  var hr = document.createElement("hr");
  hr.setAttribute("class", "local-result-hr");
  all_results[i].insertAdjacentElement("afterend", hr);
}

//Add author related article js
var script = document.createElement("script");
script.type = 'text/javascript';
script.innerHTML = 'function myJsFunc(link){\
  console.log(link);\
  var xmlHttp = new XMLHttpRequest();\
  xmlHttp.open("GET", link, false);\
  xmlHttp.send(null);\
  var parser = new DOMParser();\
  var htmlDoc = parser.parseFromString(xmlHttp.responseText, "text/html");\
  console.log(htmlDoc);\
  link = htmlDoc.getElementsByClassName("gsc_vcd_title_link")[0].href;\
  window.location.href = link;\
}';
document.head.appendChild(script);

// append a button container to each search result
var individual_results_body = document.getElementsByClassName("gs_r gs_or gs_scl");
var append_author_box = document.getElementsByClassName("gs_ri");
for (let i = 0; i < individual_results_body.length; i++) {
  //Create Empty Author div (to be toggled across views)
  var author_div = document.createElement("div");
  author_div.setAttribute('class', 'local_author_container');
  append_author_box[i].insertBefore(author_div, null);

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
  //individual_results_body[i].insertBefore(button_div, null);

  // check if the result have description, to prevent screwing up the indexing later on
  var indiv_description = individual_results_body[i].getElementsByClassName("gs_rs");
  if (indiv_description.length == 0) {
    var empty_description = document.createElement("div");
    empty_description.setAttribute("class", "gs_rs");
    individual_results_body[i].appendChild(empty_description);
  }
}

// selecting the description, authors, and extra footer, they are arrays
var description = document.getElementsByClassName("gs_rs");
var authors = document.getElementsByClassName("gs_a");
var extra_footer = document.getElementsByClassName("gs_fl");
var author_div = document.getElementsByClassName("local_author_container");
var result_view_button = document.getElementsByClassName("open-toolbar");
var number_of_citations = document.getElementsByClassName("citations-container");

function toggleLeastVisible(index) {
  description[index].style.display = "none";
  authors[index].style.display = "none";
  extra_footer[index].style.display = "none";
  author_div[index].style.display = "none";
  number_of_citations[index].style.display = "block";
}

function toggleDefault(index) {
  description[index].style.display = "block";
  authors[index].style.display = "block";
  extra_footer[index].style.display = "none";
  author_div[index].style.display = "none";
  number_of_citations[index].style.display = "block";
}

function toggleMostVisible(index) {
  description[index].style.display = "block";
  authors[index].style.display = "block";
  extra_footer[index].style.display = "none";
  author_div[index].style.display = "block";
  number_of_citations[index].style.display = "block";

  retrieveAuthorProfile(author_div[index], authors[index], index, true)

}

var gs_ri = document.getElementsByClassName("gs_ri");

function retrieveAuthorProfile(div, author, index, asynchronous) {
  //Check if the Author Profile was already loaded, dont make extra copies
  if (div.firstChild == null) {
    // Check for First Author Profile, add to view
    if (author.firstChild.tagName == "A") {
      var xmlHttp = new XMLHttpRequest();

      // create spinner
      var progress_bar_container = document.createElement("div");
      var progress_bar = document.createElement("div");
      progress_bar.setAttribute("class", "progress");
      progress_bar.innerHTML = "Loading";
      progress_bar_container.appendChild(progress_bar);
      progress_bar_container.setAttribute("class", "progress-bar-container");
      author_div[index].appendChild(progress_bar_container);

      if (asynchronous == false) {
        xmlHttp.open("GET", author.firstChild, false); // false for sync
        xmlHttp.send(null);
        authorDOM(author.firstChild, index, xmlHttp.responseText, progress_bar_container)
      } else {
        xmlHttp.open("GET", author.firstChild, true); // true for async
        xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            authorDOM(author.firstChild, index, xmlHttp.responseText, progress_bar_container)
        }
        xmlHttp.send(null);
      }
    }
    // No author profile, add default message
    else {
      var no_author = document.createElement("span");
      no_author.innerHTML = "<strong>No Author Profile</strong>"
      author_div[index].appendChild(no_author);
    }
  }
}

function authorDOM(theUrl, index, response, progress_bar) {
  var parser = new DOMParser();
  var htmlDoc = parser.parseFromString(response, "text/html");
  //OLD NAME/PROFILE PIC FORMAT
  // // Author Name
  // var author_format_name = document.createElement("h5");
  // author_format_name.setAttribute('class', 'local_author_name');
  // var author_name = document.createElement("a");
  // author_name.setAttribute('href', theUrl);
  // author_name.innerHTML = htmlDoc.getElementById("gsc_prf_in").innerHTML;
  // author_format_name.appendChild(author_name);
  // author_div[index].appendChild(author_format_name);

  // //Author Profile Picture
  // var author_format_pic = document.createElement("div");
  // author_format_pic.setAttribute('class', 'local_author_pic');
  // var author_pic = document.createElement("div");
  // author_pic = htmlDoc.getElementById("gsc_prf_pup-img");
  // author_format_pic.appendChild(author_pic)
  // author_div[index].appendChild(author_format_pic);

  // //Author's Articles (max 3)
  // var author_format_article = document.createElement("div");
  // author_format_article.setAttribute('class', 'local_author_article');
  // author_format_article.innerHTML = "<b>Author's Top Publications</b>"

  // var author_article_body = htmlDoc.getElementsByClassName("gsc_a_at");
  // var max_articles = 3
  // var no_of_articles = Math.min(author_article_body.length, max_articles)
  // for (var i = 0; i < no_of_articles; i++) {
  //     var _div = document.createElement("div");
  //     _div.setAttribute('class', 'local_author_article_');
  //     _div.appendChild(author_article_body[i]);
  //     author_format_article.appendChild(_div);
  // }
  // author_div[index].appendChild(author_format_article);

  //NEW NAME/PROFILE PIC FORMAT
  //Author Profile
  // console.log(author_pic[author_pic.length-1].children[1].children[0])
  var author_profile = document.createElement("div");
  author_profile.setAttribute('class', 'local_author_profile');
  var author_pic = htmlDoc.getElementById("gsc_prf");
  //Remove Follow Button, id = gsc_prf_btnf. 
  author_pic.removeChild(author_pic.childNodes[0]);
  author_profile.appendChild(author_pic);

  //Add H-index
  var author_stats = document.createElement("div");
  author_stats.setAttribute('id', 'author_stats');
  var author_hidx_table = htmlDoc.getElementById("gsc_rsb_st");
  var hidx_values = author_hidx_table.querySelector('tbody');
  for (var i = 0; i < hidx_values.childElementCount; i++) {
    var hidx_row = hidx_values.childNodes[i]
    var label = hidx_row.childNodes[0].childNodes[0].innerHTML;
    var value = hidx_row.childNodes[1].innerHTML;
    var output = document.createElement("div");
    output.setAttribute('class', 'author_hidx');
    output.innerHTML = label + ": " + value;
    author_stats.appendChild(output);
  }
  author_profile.querySelector('div[id="gsc_prf"]').appendChild(author_stats);
  author_div[index].appendChild(author_profile);

  //Author's Articles (max 3)
  var author_format_article = document.createElement("div");
  author_format_article.setAttribute('class', 'local_author_article');
  author_format_article.innerHTML = "<strong>Author's Top Publications</strong>";

  var author_article_table = htmlDoc.getElementById("gsc_a_t");
  var author_articles = author_article_table.querySelector('tbody[id="gsc_a_b"]');
  var max_articles = 3;
  //Delete extra articles
  if (author_articles.childElementCount > max_articles) {
    for (var i = author_articles.childElementCount - 1; i >= max_articles; i--) {
      author_article_table.querySelector('tbody[id="gsc_a_b"]').deleteRow(max_articles);
    }
  }
  //Modify article attributes
  for (var i = 0; i < author_article_table.querySelector('tbody[id="gsc_a_b"]').childElementCount; i++){
    var author_article_href = author_article_table.querySelector('tbody[id="gsc_a_b"]').childNodes[i].firstChild.firstChild;
    var author_article_link = 'https://scholar.google.com'+ author_article_href.getAttribute('data-href');
    author_article_href.href = 'javascript:void(0)';
    author_article_href.setAttribute('onclick',"myJsFunc('"+ author_article_link +"');");
  }
  author_format_article.appendChild(author_article_table);
  author_div[index].appendChild(author_format_article);

  progress_bar.style.display = "none";
}
