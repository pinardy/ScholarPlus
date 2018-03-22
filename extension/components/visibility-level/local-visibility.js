// append a button container to each search result
var individual_results_body = document.getElementsByClassName("gs_r");
for (var i = 0; i < individual_results_body.length; i++) {

  //Create Empty Author div (to be toggled across views)
  var author_div = document.createElement("div");
  author_div.setAttribute('class', 'local_author_container');
  individual_results_body[i].insertBefore(author_div, null);

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

  // create footer div
  var footer_div = document.createElement("div");
  footer_div.setAttribute("class", "footer-container");

  // read current save to lib, generate cit, version
  var current_save_to_library = document.getElementsByClassName("gs_or_sav");
  var current_generate_citation = document.getElementsByClassName("gs_or_cit");
  var current_versions = document.getElementsByClassName("gs_nph");

  // create save to lib button
  var save_to_library_button = document.createElement("button");
  var library_icon = document.createElement("i");
  library_icon.setAttribute("class", "material-icons")
  library_icon.innerHTML = "local_library";
  save_to_library_button.appendChild(library_icon);
  save_to_library_button_text = document.createElement("span");
  save_to_library_button_text.innerHTML = "Save to Library";
  save_to_library_button.appendChild(save_to_library_button_text);
  save_to_library_button.setAttribute("class", "footer-button");

  // create generate cit button
  var generate_citation_button = document.createElement("button");
  var quote_icon = document.createElement("i");
  quote_icon.setAttribute("class", "material-icons")
  quote_icon.innerHTML = "format_quote";
  generate_citation_button.appendChild(quote_icon);
  generate_citation_button_text = document.createElement("span");
  generate_citation_button_text.innerHTML = "Generate Citation";
  generate_citation_button.appendChild(generate_citation_button_text);
  generate_citation_button.setAttribute("class", "footer-button");

  // create versions button
  var versions_button = document.createElement("button");
  var versions_icon = document.createElement("i");
  versions_icon.setAttribute("class", "material-icons")
  versions_icon.innerHTML = "list";
  versions_button.appendChild(versions_icon);
  versions_button_text = document.createElement("span");
  versions_button_text.innerHTML = "Other Versions";
  versions_button.appendChild(versions_button_text);
  versions_button.setAttribute("class", "footer-button");

  footer_div.appendChild(save_to_library_button);
  footer_div.appendChild(generate_citation_button);
  footer_div.appendChild(versions_button);

  // download_button_div.setAttribute("class", "download-button-div");
  var current_download_buttons = individual_results_body[i].getElementsByClassName("gs_or_ggsm");
  if (current_download_buttons.length > 0) {
    // create download button
    var anchor = current_download_buttons[0].getElementsByTagName("a");
    var download_button = document.createElement("button");
    download_url = anchor[0].href;
    download_button.setAttribute("class", "footer-button");
    var download_icon = document.createElement("i");
    download_icon.setAttribute("class", "material-icons")
    download_icon.innerHTML = "file_download";
    download_button.appendChild(download_icon);
    download_button_text = document.createElement("span");
    download_button_text.innerHTML = "Download File";
    download_button.appendChild(download_button_text);
    download_button.addEventListener("click", openDownloadTab.bind(null, download_url));
    footer_div.appendChild(download_button);
  }
  var indiv_block = document.getElementsByClassName("gs_ri");
  indiv_block[i].insertBefore(footer_div, null);

}

function openDownloadTab(url) {
  window.open(url);
}

// selecting the description, authors, and extra footer, they are arrays
var description = document.getElementsByClassName("gs_rs");
var authors = document.getElementsByClassName("gs_a");
var extra_footer = document.getElementsByClassName("gs_fl");
var author_div = document.getElementsByClassName("local_author_container");

function toggleLeastVisible(index) {
  description[index].style.display = "none";
  authors[index].style.display = "none";
  extra_footer[index].style.display = "none";
  author_div[index].style.display = "none";
}

function toggleDefault(index) {
  description[index].style.display = "block";
  authors[index].style.display = "block";
  extra_footer[index].style.display = "none";
  author_div[index].style.display = "none";
}

function toggleMostVisible(index) {
  description[index].style.display = "block";
  authors[index].style.display = "block";
  extra_footer[index].style.display = "none";
  author_div[index].style.display = "block";
  retrieveAuthorProfile(author_div[index], authors[index], index, true)

}


var gs_ri = document.getElementsByClassName("gs_ri");

function retrieveAuthorProfile(div, author, index, asynchronous) {
  //Check if the Author Profile was already loaded, dont make extra copies
  if (div.firstChild == null) {
    // Check for First Author Profile, add to view
    if (author.firstChild.tagName == "A") {
      var xmlHttp = new XMLHttpRequest();

      if (asynchronous == false) {
        xmlHttp.open("GET", author.firstChild, false); // false for sync
        xmlHttp.send(null);
        authorDOM(author.firstChild, index, xmlHttp.responseText)
      } else {
        xmlHttp.open("GET", author.firstChild, true); // true for async
        xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            authorDOM(author.firstChild, index, xmlHttp.responseText)
        }
        xmlHttp.send(null);
      }
    }
    // No author profile, add default message
    else {
      var no_author = document.createElement("h5");
      no_author.innerHTML = "No Author Profile"
      author_div[index].appendChild(no_author);
    }
  }
}

function authorDOM(theUrl, index, response) {
  var parser = new DOMParser();
  var htmlDoc = parser.parseFromString(response, "text/html");

  // Author Name
  var author_format_name = document.createElement("h5");
  author_format_name.setAttribute('class', 'local_author_name');
  var author_name = document.createElement("a");
  author_name.setAttribute('href', theUrl);
  author_name.innerHTML = htmlDoc.getElementById("gsc_prf_in").innerHTML;
  author_format_name.appendChild(author_name);
  author_div[index].appendChild(author_format_name);

  //Author Profile Picture
  var author_format_pic = document.createElement("div");
  author_format_pic.setAttribute('class', 'local_author_pic');
  var author_pic = document.createElement("div");
  author_pic = htmlDoc.getElementById("gsc_prf_pup-img");
  author_format_pic.appendChild(author_pic)
  author_div[index].appendChild(author_format_pic);

  //Author's Articles (max 3)
  var author_format_article = document.createElement("div");
  author_format_article.setAttribute('class', 'local_author_article');
  author_format_article.innerHTML = "<b>Related Articles</b>"

  var author_article_body = htmlDoc.getElementsByClassName("gsc_a_at");
  var max_articles = 3
  var no_of_articles = Math.min(author_article_body.length, max_articles)
  for (var i = 0; i < no_of_articles; i++) {
    var _div = document.createElement("div");
    _div.setAttribute('class', 'local_author_article_');
    _div.appendChild(author_article_body[i]);
    author_format_article.appendChild(_div);
  }
  gs_ri[index].appendChild(author_format_article);
}
