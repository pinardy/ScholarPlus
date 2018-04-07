var individual_results_body = document.getElementsByClassName("gs_r gs_or gs_scl");
var tooltip_counter = 1;

for (var i = 0; i < individual_results_body.length; i++) {
  // create footer div
  var footer_div = document.createElement("div");
  footer_div.setAttribute("class", "footer-container");
  footer_button_div = document.createElement("div");
  footer_button_div.setAttribute("class", "footer-button-container");

  // create number of citations span
  var all_anchors = individual_results_body[i].getElementsByTagName("a");
  for (let j = 0; j < all_anchors.length; j++) {

    // create save to lib button
    var save_to_library_button = document.createElement("button");
    var library_icon = document.createElement("i");
    library_icon.setAttribute("class", "material-icons");
    // console.log(save_to_library_button.getAttribute("data-lid"))
    if (individual_results_body[i].getAttribute("data-lid").length > 0) {
      library_icon.innerHTML = "star";
    } else {
      library_icon.innerHTML = "star_border";
    }
    save_to_library_button.appendChild(library_icon);
    save_to_library_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon save-to-library gs_or_sav");

    if (all_anchors[j].className == "gs_or_sav") {
      // reading the href of save to lib
      var tooltip_number = "tt" + tooltip_counter;
      save_to_library_button.setAttribute("id", tooltip_number);
      var tooltip1 = document.createElement("div");
      tooltip1.setAttribute("class", "mdl-tooltip");
      tooltip1.setAttribute("for", tooltip_number);
      tooltip1.innerHTML = "Save to Library";
      footer_button_div.appendChild(tooltip1);
      tooltip_counter += 1;
      
      //TODO: the button display should be dependent on whether the article is saved in the library
      save_to_library_button.addEventListener("click", saveToLibrary.bind(null, library_icon, save_to_library_button));
      footer_button_div.appendChild(save_to_library_button);
    } else {
      save_to_library_button.disabled = true;
    }
    // create generate cit button
    var generate_citation_button = document.createElement("button");
    var quote_icon = document.createElement("i");
    quote_icon.setAttribute("class", "material-icons")
    quote_icon.innerHTML = "format_quote";
    generate_citation_button.appendChild(quote_icon);
    generate_citation_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon generate-citation gs_or_cit gs_nph");
    generate_citation_button.id = i;
    

    if (all_anchors[j].className == "gs_or_cit gs_nph") {
      // reading the href of generating citations
      var tooltip_number = "tt" + tooltip_counter;
      generate_citation_button.setAttribute("id", tooltip_number);
      var tooltip2 = document.createElement("div");
      tooltip2.setAttribute("class", "mdl-tooltip");
      tooltip2.setAttribute("for", tooltip_number);
      tooltip2.innerHTML = "Generate Citations";
      footer_button_div.appendChild(tooltip2);
      tooltip_counter += 1;

      footer_button_div.appendChild(generate_citation_button);
    } else {
      // create disabled generate citation button
      generate_citation_button.disabled = true;
    }
    // reading the number of citations
    if (all_anchors[j].innerHTML.match(/Cited/g)) {

      var no_of_citations_div = document.createElement("div");
      var no_of_citations = document.createElement("span");
      no_of_citations_div.setAttribute("class", "citations-container");
      no_of_citations.innerHTML = all_anchors[j].innerHTML;
      no_of_citations_div.appendChild(no_of_citations);
    } 
    // create versions button
    var versions_button = document.createElement("button");
    var versions_icon = document.createElement("i");
    versions_icon.setAttribute("class", "material-icons")
    versions_icon.innerHTML = "list";
    versions_button.appendChild(versions_icon);
    versions_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon versions");

    if (all_anchors[j].className == "gs_nph") {
      // reading the number of versions
      var tooltip_number = "tt" + tooltip_counter;

      versions_button.setAttribute("id", tooltip_number);
      var tooltip3 = document.createElement("div");
      tooltip3.setAttribute("class", "mdl-tooltip");
      tooltip3.setAttribute("for", tooltip_number);
      tooltip3.innerHTML = all_anchors[j].innerHTML;
      footer_button_div.appendChild(tooltip3);

      versions_button.addEventListener("click", readOtherVersions.bind(null, all_anchors[j].href));
      tooltip_counter += 1;
      footer_button_div.appendChild(versions_button);
    } else {
      // create disabled versions  button
      versions_button.disabled = true;
    }
  }

  var current_download_buttons = individual_results_body[i].getElementsByClassName("gs_or_ggsm");
  // create download button
  var download_button = document.createElement("button");
  download_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon download");
  var download_icon = document.createElement("i");
  download_icon.setAttribute("class", "material-icons")
  download_icon.innerHTML = "file_download";
  download_button.appendChild(download_icon);
  if (current_download_buttons.length > 0) {
    var anchor = current_download_buttons[0].getElementsByTagName("a");
    download_url = anchor[0].href;
    var tooltip_number = "tt" + tooltip_counter;

    download_button.setAttribute("id", tooltip_number);
    var tooltip4 = document.createElement("div");
    tooltip4.setAttribute("class", "mdl-tooltip");
    tooltip4.setAttribute("for", tooltip_number);
    tooltip4.innerHTML = "Download File";
    footer_button_div.appendChild(tooltip4);
    download_button.addEventListener("click", openDownloadTab.bind(null, download_url));
    tooltip_counter += 1;
  } else {
    // make download button disabled
    download_button.disabled = true;
  }
  footer_button_div.appendChild(download_button);

  // attempting to add disabled buttons in
  var buttons_in_footer = footer_button_div.getElementsByTagName("button");
  if (buttons_in_footer.length != 4) {
    var button_class_names = [];
    for (let i = 0; i < buttons_in_footer.length; i++) {
      button_class_names.push(buttons_in_footer[i].className);
    }
    if (!button_class_names.includes("mdl-button mdl-js-button mdl-button--icon save-to-library")) {
      // create save to library button
      var save_to_library_button = document.createElement("button");
      var library_icon = document.createElement("i");
      library_icon.setAttribute("class", "material-icons");
      library_icon.innerHTML = "star_border";
      save_to_library_button.appendChild(library_icon);
      save_to_library_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon save-to-library gs_or_sav");
      save_to_library_button.disabled = true;
      buttons_in_footer[0].insertAdjacentElement("beforebegin", save_to_library_button);
    }
    if (!button_class_names.includes("mdl-button mdl-js-button mdl-button--icon generate-citation")) {
      // create generate citation button
      var generate_citation_button = document.createElement("button");
      var quote_icon = document.createElement("i");
      quote_icon.setAttribute("class", "material-icons")
      quote_icon.innerHTML = "format_quote";
      generate_citation_button.appendChild(quote_icon);
      generate_citation_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon generate-citation");
      generate_citation_button.disabled = true;
      buttons_in_footer[0].insertAdjacentElement("afterend", generate_citation_button);
    }
    if (!button_class_names.includes("mdl-button mdl-js-button mdl-button--icon versions")) {
      // create versions button
      var versions_button = document.createElement("button");
      var versions_icon = document.createElement("i");
      versions_icon.setAttribute("class", "material-icons")
      versions_icon.innerHTML = "list";
      versions_button.appendChild(versions_icon);
      versions_button.setAttribute("class", "mdl-button mdl-js-button mdl-button--icon versions");
      versions_button.disabled = true;
      buttons_in_footer[1].insertAdjacentElement("afterend", versions_button);
    }
  }
  if (!no_of_citations_div) {
    // no citations ...?
    var no_of_citations_div = document.createElement("div");
    var no_of_citations = document.createElement("span");
    no_of_citations_div.setAttribute("class", "citations-container");
    no_of_citations.innerHTML = "Cited by 0";
    no_of_citations_div.appendChild(no_of_citations);
  }
  footer_div.appendChild(no_of_citations_div);
  footer_div.appendChild(footer_button_div);
  var indiv_title = document.getElementsByClassName("gs_ri");
  indiv_title[i].insertAdjacentElement("afterend", footer_div);
}

function saveToLibrary(library_icon, save_to_library_button) {
  if ((save_to_library_button.getAttribute("data-lid") == "") || (save_to_library_button.getAttribute("data-lid") == null)){
    save_to_library_button.setAttribute("data-lid", "saved");
    library_icon.innerHTML = "star";
    console.log("STARRING")
    console.log(library_icon)
  } else {
    save_to_library_button.setAttribute("data-lid", "");
    library_icon.innerHTML = "star_border";
    console.log("UNSTARRING")
    console.log(library_icon)
  }
}


function openDownloadTab(url) {
  window.open(url);
}

function readOtherVersions(url) {
  window.location.replace(url);
}
