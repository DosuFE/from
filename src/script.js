const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[6%]");
}

var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
  for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener("click", toggleItem, false);
  }
  function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
      accItem[i].className = "accordionItem close";
    }
    if (itemClass == "accordionItem close") {
      this.parentNode.className = "accordionItem open";
    }
}

function openTab(evt, tabName) {
  var i, tabcontent, tabbuttons;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}