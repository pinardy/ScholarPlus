var individual_results_body = document.getElementsByClassName("gs_r gs_or gs_scl");
for (let i = 0; i < individual_results_body.length; i++) {
    var btn_div = document.createElement("div");
    var open_toolbar = document.createElement("i");
    var local_most = document.createElement("i");
    var local_def = document.createElement("i");
    var local_least = document.createElement("i");
    // var local_most = document.createElement("a");
    // var local_def = document.createElement("a");
    // var local_least = document.createElement("a");

    btn_div.setAttribute('id', 'btn-div');
    open_toolbar.setAttribute('id', 'open-toolbar');
    local_most.setAttribute('id', 'local-most');
    local_def.setAttribute('id', 'local-def');
    local_least.setAttribute('id', 'local-least');
    
    btn_div.setAttribute('reference', i);
    open_toolbar.setAttribute('reference', i);
    local_most.setAttribute('reference', i);
    local_def.setAttribute('reference', i);
    local_least.setAttribute('reference', i);
    
    btn_div.setAttribute('class', 'btn');
    open_toolbar.setAttribute('class', 'material-icons open-toolbar');
    local_most.setAttribute('class', 'sec material-icons local-most');
    local_def.setAttribute('class', 'sec material-icons local-def');
    local_least.setAttribute('class', 'sec material-icons local-least');
    // local_most.setAttribute('class', 'sec local-most');
    // local_def.setAttribute('class', 'sec local-def');
    // local_least.setAttribute('class', 'sec local-least');
    // local_most.setAttribute('style', 'font-size:30px;');
    // local_def.setAttribute('style', 'font-size:30px;');
    // local_least.setAttribute('style', 'font-size:30px;');

    open_toolbar.innerHTML = "add";
    var extension_id = 'chrome-extension://__MSG_@@extension_id__/'
    local_most.innerHTML = "radio_button_unchecked";
    local_def.innerHTML = "radio_button_unchecked";
    local_least.innerHTML = "radio_button_unchecked";
    // local_most.innerHTML = " ";
    // local_def.innerHTML = " ";
    // local_least.innerHTML = " ";
    // local_most.setAttribute('background-image', 'url("' + extension_id + 'view_most_small.svg' + '")');
    // local_def.setAttribute('background-image', 'url("' + extension_id + 'view_def_small.svg' + '")')
    // local_least.setAttribute('background-image', 'url("' + extension_id + 'view_least_small.svg' + '")')
    
    local_most.addEventListener("click", toggleMostVisible.bind(null, i));
    local_def.addEventListener("click", toggleDefault.bind(null, i));
    local_least.addEventListener("click", toggleLeastVisible.bind(null, i));

    btn_div.append(open_toolbar);
    btn_div.append(local_most);
    btn_div.append(local_def);
    btn_div.append(local_least);

    //document.body.append(btn_div);
    individual_results_body[i].insertBefore(btn_div, null);
    
    
}

var animation = [];
var openState = [];

for (let i = 0; i < individual_results_body.length; i++){
    var showItem = new TimelineLite({paused: true}); isOpen = false;
    showItem.to(".btn[reference="+i+"]", .05, {
        // x:"+=140", 
        // y:"-=130", 
        // borderWidth:90, 
        overflow:"visible", 
        backgroundColor: "#db6237",
        
        ease: Power0.easeInOut})
    .staggerFrom(".btn .sec[reference="+i+"]", .1, {
        alpha: 0, 
        top:0, 
        left:0, 
        ease: Power0.easeInOut
        }, .1, .3)
    // .to(".open-toolbar[reference="+i+"]", .5, {
        // rotation:360, 
        // // className: "+=fa-minus",
        // ease:Power3.easeInOut
        // }, 0);
    animation.push(showItem);
    openState.push(isOpen);
}

function toggle_options(reference){
    currAnimation = animation[reference];
    currState = openState[reference];
    if(currAnimation.progress() === 1) {
        currAnimation.reverse();
        currState = false;
    } else {
        currAnimation.play();
        currState = true;
    }
}

$(".open-toolbar").click(function(e) {
      e.preventDefault();
      var ref = $(this).attr("reference");
      toggle_options(ref);
});





// var addItemTl = new TimelineLite({paused: true}),
    // isOPen = false;
// addItemTl.to(".btn", .5, {
  // x:"+=140", 
  // y:"-=130", 
  // borderWidth:90, 
  // overflow:"visible", 
  // backgroundColor: "#FFA000",
  // ease: Power4.easeInOut})

// .staggerFrom(".btn .sec", .4, {
  // alpha: 0, 
  // top:0, 
  // left:0, 
  // ease: Power3.easeInOut
// }, .1, .3)

// .to("#open-toolbar", .5, {
  // rotation:360, 
  // // className: "+=fa-minus",
  // ease:Power3.easeInOut
// }, 0);

// $("#open-toolbar").click(function(e) {
  // e.preventDefault();
  // if(addItemTl.progress() === 1) {
    // addItemTl.reverse();
    // isOPen = false;
    // alert("not open");
  // }
  // else {
    // addItemTl.play();
    // isOPen = true;
    // alert("open");
  // }
// });


// $('.sec').mouseenter(function(){
  // TweenMax.to($(this), 1, {scale:1.2, ease:Power3.easeOut});
// });
// $('.sec').mouseout(function(){
  // TweenMax.to($(this), 1, {scale:1, ease:Power3.easeOut});
// });
