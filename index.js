//js
window.onscroll = function() {moveMenu()};

function moveMenu() {
  if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
    document.getElementById("logo").className = "floater";
  } else {
    document.getElementById("logo").className = "";
  }
}
//adjust term window
function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (15+o.scrollHeight)+"px";
}
//menu opening
function menuOpen(){
  var container = document.getElementById('container');
  var logo = document.getElementById('logo');
  var hamburger = document.getElementById('hamburger');
  if (container.style.marginTop == "150px"){
    container.style.marginTop = "60px";
    hamburger.style.backgroundImage = "url('./img/hamburger.png')";
  } else {
    container.style.marginTop = "150px";
    hamburger.style.backgroundImage = "url('./img/cross.png')";

  }

}
//search
function searchCode() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchbox');
  filter = input.value.toUpperCase();
  ul = document.getElementById("container");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
//term functions
function minTerm(){
  var termsplash = document.getElementById('termsplash');
  var mainwindow = document.getElementById('mainwindow');
  var container = document.getElementById('container');
  var logo = document.getElementById('logo');
  var term = document.getElementById('term');
  if (termsplash.style.position == "fixed"){
    mainwindow.style.display = "block";
    termsplash.style.minHeight = "120px";
    termsplash.style.position ="relative";
    termsplash.style.bottom = "";
    termsplash.style.left = "";
    fullTerm();
  } else {
    mainwindow.style.display = "none";
    mainwindow.style.color = "#1E1E1E !important";
    termsplash.style.minHeight = "0px";
    termsplash.style.position ="fixed";
    termsplash.style.bottom = "0px";
    termsplash.style.left = "0";
  }
}
function closeTerm(){
  var termsplash = document.getElementById('termsplash');
  var mainwindow = document.getElementById('mainwindow');
  var container = document.getElementById('container');
  var logo = document.getElementById('logo');
  var term = document.getElementById('term');
  termsplash.style.display = "none";
  document.body.style.overflow = "scroll";
  container.style.paddingLeft = "10vw";
  container.style.paddingTop = "5vh";
  termsplash.style.marginLeft = "0";
  termsplash.style.marginTop = "0";
  termsplash.style.zIndex = "0";
  logo.style.zIndex = "+2";
  termsplash.style.position = "relative";
  termsplash.style.width = "95%";
  termsplash.style.height = "auto";
  mainwindow.style.height = "95%";
  termsplash.style.maxHeight = "120px";
  mainwindow.style.maxHeight = "120px";
  termsplash.style.overflow = "scroll";
  termsplash.marginLeft ="2.5%";
}
function fullTerm(){
  var termsplash = document.getElementById('termsplash');
  var mainwindow = document.getElementById('mainwindow');
  var container = document.getElementById('container');
  var logo = document.getElementById('logo');
  var term = document.getElementById('term');
  if (document.body.style.overflow == "hidden"){
    document.body.style.overflow = "scroll";
    container.style.paddingLeft = "10vw";
    container.style.paddingTop = "5vh";
    termsplash.style.marginLeft = "2.5%";
    termsplash.style.marginTop = "0";
    termsplash.style.zIndex = "0";
    logo.style.zIndex = "+2";
    termsplash.style.position = "relative";
    termsplash.style.width = "95%";
    termsplash.style.height = "auto";
    mainwindow.style.height = "95%";
    termsplash.style.maxHeight = "120px";
    mainwindow.style.maxHeight = "120px";
    termsplash.style.overflow = "scroll";
    termsplash.marginLeft ="2.5%";
  } else {
    document.body.style.overflow = "hidden";
    container.style.paddingLeft = "0";
    container.style.paddingTop = "0";
    termsplash.style.marginLeft = "0";
    termsplash.style.marginTop = "-61px";
    termsplash.style.zIndex = "+5";
    logo.style.zIndex = "-2";
    termsplash.style.position = "fixed";
    termsplash.style.width = "100vw";
    termsplash.style.height = "100vh";
    mainwindow.style.height = "100%";
    termsplash.style.maxHeight = "100000px";
    mainwindow.style.maxHeight = "100000px";
    term.style.maxHeight = "100000px";
    termsplash.style.overflow = "hidden";
    termsplash.marginLeft ="-5vw !important";
  }
}
//hide conts js
function hide1(){
  var wrap1 = document.getElementById('wrap1');
  var hide1 = document.getElementById('hide1');
  if (wrap1.style.display == "none"){
    wrap1.style.display = "block";
    hide1.style.transform = "rotate(0deg)";
  } else {
    wrap1.style.display = "none";
    hide1.style.transform = "rotate(-90deg)";
  }
}
function hide2(){
  var wrap2 = document.getElementById('wrap2');
  var hide2 = document.getElementById('hide2');
  if (wrap2.style.display == "block"){
    wrap2.style.display = "none";
    hide2.style.transform = "rotate(-90deg)";
  } else {
    wrap2.style.display = "block";
    hide2.style.transform = "rotate(0deg)";
  }
}
function hide3(){
  var wrap3 = document.getElementById('wrap3');
  var hide3 = document.getElementById('hide3');
  if (wrap3.style.display == "block"){
    wrap3.style.display = "none";
    hide3.style.transform = "rotate(-90deg)";
  } else {
    wrap3.style.display = "block";
    hide3.style.transform = "rotate(0deg)";
  }
}
function hide4(){
  var wrap4 = document.getElementById('wrap4');
  var hide4 = document.getElementById('hide4');
  if (wrap4.style.display == "block"){
    wrap4.style.display = "none";
    hide4.style.transform = "rotate(-90deg)";
  } else {
    wrap4.style.display = "block";
    hide4.style.transform = "rotate(0deg)";
  }
}
