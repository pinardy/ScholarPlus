var individual_results_body = document.getElementsByClassName("gs_r");
var tooltip_counter = 1;
for (var i = 0; i < individual_results_body.length; i++) {
  //

  // create footer div
  var footer_div = document.createElement("div");
  footer_div.setAttribute("class", "footer-container");

  // create number of citations span
  var all_anchors = individual_results_body[i].getElementsByTagName("a");
  for (let i = 0; i < all_anchors.length; i++) {

    // reading the href of save to lib
    if (all_anchors[i].className == "gs_or_sav") {
      // create save to lib button
      var save_to_library_button = document.createElement("button");
      var library_icon = document.createElement("i");
      library_icon.setAttribute("class", "material-icons");
      library_icon.innerHTML = "star";
      save_to_library_button.appendChild(library_icon);
      save_to_library_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon");

      var tooltip_number = "tt" + tooltip_counter;
      save_to_library_button.setAttribute("id", tooltip_number);
      var tooltip1 = document.createElement("div");
      tooltip1.setAttribute("class", "mdl-tooltip");
      tooltip1.setAttribute("for", tooltip_number);
      tooltip1.innerHTML = "Save to Library";
      footer_div.appendChild(tooltip1);
      tooltip_counter += 1;

      save_to_library_button.addEventListener("click", saveToLibrary.bind(null, all_anchors[i].href));
      footer_div.appendChild(save_to_library_button);
    }
    // reading the href of generating citations
    if (all_anchors[i].className == "gs_or_cit") {
      // create generate cit button
      var generate_citation_button = document.createElement("button");
      var quote_icon = document.createElement("i");
      quote_icon.setAttribute("class", "material-icons")
      quote_icon.innerHTML = "format_quote";
      generate_citation_button.appendChild(quote_icon);
      generate_citation_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon");

      var tooltip_number = "tt" + tooltip_counter;

      generate_citation_button.setAttribute("id", tooltip_number);
      var tooltip2 = document.createElement("div");
      tooltip2.setAttribute("class", "mdl-tooltip");
      tooltip2.setAttribute("for", tooltip_number);
      tooltip2.innerHTML = "Generate Citations";
      footer_div.appendChild(tooltip2);
      tooltip_counter += 1;

      generate_citation_button.addEventListener("click", generateCitation.bind(null, all_anchors[i].href));
      footer_div.appendChild(generate_citation_button);
    }
    // reading the number of citations
    if (all_anchors[i].innerHTML.match(/Cited/g)) {

      var no_of_citations_div = document.createElement("div");
      var no_of_citations = document.createElement("span");
      no_of_citations_div.setAttribute("class", "citations-container");
      no_of_citations.innerHTML = all_anchors[i].innerHTML;
      no_of_citations_div.appendChild(no_of_citations);
    }
    // reading the number of versions
    if (all_anchors[i].className == "gs_nph") {
      // create versions button
      var versions_button = document.createElement("button");
      var versions_icon = document.createElement("i");
      versions_icon.setAttribute("class", "material-icons")
      versions_icon.innerHTML = "list";
      versions_button.appendChild(versions_icon);
      versions_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon");

      var tooltip_number = "tt" + tooltip_counter;

      versions_button.setAttribute("id", tooltip_number);
      var tooltip3 = document.createElement("div");
      tooltip3.setAttribute("class", "mdl-tooltip");
      tooltip3.setAttribute("for", tooltip_number);
      tooltip3.innerHTML = all_anchors[i].innerHTML;
      footer_div.appendChild(tooltip3);

      versions_button.addEventListener("click", readOtherVersions.bind(null, all_anchors[i].href));
      footer_div.appendChild(versions_button);
      tooltip_counter += 1;

    }
  }
  var current_download_buttons = individual_results_body[i].getElementsByClassName("gs_or_ggsm");
  if (current_download_buttons.length > 0) {
    // create download button
    var anchor = current_download_buttons[0].getElementsByTagName("a");
    var download_button = document.createElement("button");
    download_url = anchor[0].href;
    download_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon");
    var download_icon = document.createElement("i");
    download_icon.setAttribute("class", "material-icons")
    download_icon.innerHTML = "file_download";
    download_button.appendChild(download_icon);

    var tooltip_number = "tt" + tooltip_counter;

    download_button.setAttribute("id", tooltip_number);
    var tooltip4 = document.createElement("div");
    tooltip4.setAttribute("class", "mdl-tooltip");
    tooltip4.setAttribute("for", tooltip_number);
    tooltip4.innerHTML = "Download File";
    footer_div.appendChild(tooltip4);
    download_button.addEventListener("click", openDownloadTab.bind(null, download_url));
    footer_div.appendChild(download_button);
    tooltip_counter += 1;

  }

  footer_div.appendChild(no_of_citations_div);
  // var indiv_block = document.getElementsByClassName("gs_ri");
  // indiv_block[i].insertBefore(footer_div, null);
  var indiv_title = document.getElementsByClassName("gs_ri");
  indiv_title[i].insertAdjacentElement("afterend", footer_div);
  // indiv_title[i].insertBefore(footer_div, null);
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
