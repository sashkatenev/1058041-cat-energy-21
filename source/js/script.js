var siteNavigation = document.querySelector(".site-navigation");
var siteNavigationToggleButton = document.querySelector(".site-navigation__toggler");
var demoSlider = document.querySelector(".demo__slider");

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
