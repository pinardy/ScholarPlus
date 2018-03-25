var whole_body = document.getElementsByTagName("body");
whole_body[0].style.display = "none";

var spinner_container = document.createElement("div");
var spinner_div = document.createElement("div");
spinner_div.setAttribute("class", "mdl-spinner mdl-js-spinner is-active");

spinner_container.setAttribute("class", "spinner-container");
spinner_container.appendChild(spinner_div);
whole_body[0].insertAdjacentElement("afterend", spinner_container);

whole_body[0].onload = function () {
  spinner_container.style.display = "none";
  whole_body[0].style.display = "block";
}
