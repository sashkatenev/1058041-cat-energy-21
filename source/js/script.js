var siteNavigation = document.querySelector(".site-navigation");
var siteNavigationToggleButton = document.querySelector(".site-navigation__toggler");
var demoSlider = document.querySelector(".demo__slider");
var formLabels = document.querySelectorAll(".selectable-label");

if (siteNavigation) {
  siteNavigation.classList.add("site-navigation--closed");
  siteNavigation.classList.remove("site-navigation--no-js");

  if (siteNavigationToggleButton) {
    siteNavigationToggleButton.addEventListener("click", function (evt) {
      if (siteNavigation.classList.contains("site-navigation--closed")) {
        siteNavigation.classList.remove("site-navigation--closed");
      }
      else {
        siteNavigation.classList.add("site-navigation--closed");
      }
    });
  }
}

if (formLabels) {
  for (var i = 0; i < formLabels.length; i++) {
    formLabels[i].addEventListener("keydown", function (evt) {
      if (evt.keyCode === 13 || evt.keyCode === 32) {
        evt.preventDefault();
        this.click();
      }
    });
  }
}
