var individual_results_body = document.getElementsByClassName("gs_r");
for (var i = 0; i < individual_results_body.length; i++) {

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
  library_icon.innerHTML = "star";
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

  var no_of_citations_div = document.createElement("div");
  no_of_citations_div.setAttribute("class", "citations-container");

  // TODO: THIS COULD BE BOTTLENECK
  // create number of citations span
  var all_anchors = individual_results_body[i].getElementsByTagName("a");

  var no_of_citations = document.createElement("span");
  for (let i = 0; i < all_anchors.length; i++) {

    // reading the href of save to lib
    if (all_anchors[i].className == "gs_or_sav") {
      save_to_library_button.addEventListener("click", saveToLibrary.bind(null, all_anchors[i].href));
      footer_div.appendChild(save_to_library_button);
    }
    // reading the href of generating citations
    if (all_anchors[i].className == "gs_or_cit") {
      generate_citation_button.addEventListener("click", generateCitation.bind(null, all_anchors[i].href));
      footer_div.appendChild(generate_citation_button);
    }
    // reading the number of citations
    if (all_anchors[i].innerHTML.match(/Cited/g)) {
      no_of_citations.innerHTML = all_anchors[i].innerHTML;
    }
    // reading the number of versions
    if (all_anchors[i].className == "gs_nph") {
      // create versions button
      var versions_button = document.createElement("button");
      var versions_icon = document.createElement("i");
      versions_icon.setAttribute("class", "material-icons")
      versions_icon.innerHTML = "list";
      versions_button.appendChild(versions_icon);
      versions_button_text = document.createElement("span");
      versions_button_text.innerHTML = all_anchors[i].innerHTML;
      versions_button.appendChild(versions_button_text);
      versions_button.setAttribute("class", "footer-button");
      versions_button.addEventListener("click", readOtherVersions.bind(null, all_anchors[i].href));
      footer_div.appendChild(versions_button);
    }
  }
  no_of_citations_div.appendChild(no_of_citations);

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
  indiv_block[i].insertBefore(no_of_citations_div, null);
}

function openDownloadTab(url) {
  window.open(url);
}

function readOtherVersions(url) {
  window.location.replace(url);
}

function generateCitation(url) {
  console.log(url);
  window.open(url);
}

function saveToLibrary(url) {
  console.log(url);
  window.open(url);
}
