
// ji's implementation of the sidebar
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

// div for row 1
var row_div1 = document.createElement("div");
row_div1.setAttribute('class', 'sort-row');

var relevance_button = document.createElement("button");
relevance_button.innerHTML = "Relevance";
row_div1.appendChild(relevance_button);
sort_div.appendChild(row_div1);

// div for row 2
var row_div2 = document.createElement("div");
row_div2.setAttribute('class', 'sort-row');
var date_button = document.createElement("button");
date_button.innerHTML = "Date";
row_div2.appendChild(date_button);
sort_div.appendChild(row_div2);

// horizontal lines as separators
var hr = document.createElement("hr");
hr.style.height = '100%';
hr.style.width = '100%';
var hr2 = document.createElement("hr");
hr2.style.height = '100%';
hr2.style.width = '100%';

// append all child into sidebar_div parent div
var sidebar_div = document.createElement("div");
sidebar_div.appendChild(adv_search_div);
sidebar_div.appendChild(hr);
sidebar_div.appendChild(sort_div)
sidebar_div.appendChild(hr2);
sidebar_div.setAttribute('class', 'sidebar-container');

var link = document.createElement("link");
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

// append to the google scholar sidebar
var advSearch = document.getElementById("gs_bdy_sb");
advSearch.insertBefore(sidebar_div, advSearch.childNodes[0]);

function popupAdvancedSearch() {
  // TODO: to code popup
  console.log('not done yet');
}