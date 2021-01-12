var siteNavigation = document.querySelector(".site-navigation");
var siteNavigationToggleButton = document.querySelector(".site-navigation__toggler");
var demoSlider = document.querySelector(".demo__slider");

if (siteNavigation) {
  siteNavigation.classList.add("site-navigation--closed");

  if (siteNavigationToggleButton) {
    siteNavigationToggleButton.removeAttribute("disabled");

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

if (demoSlider) {
  var sliderBar = demoSlider.querySelector(".slider__bar");
  var sliderPin = demoSlider.querySelector(".slider__pin");
  var catsBefore = document.querySelector(".demo__image-box--before");
  var catsAfter = document.querySelector(".demo__image-box--after");
  var sliderCurrentPosition = 0;

  function isAllowedMoving(elem, shift) {
    var allow = true;
    // var leftMargin = getComputedStyle(elem, null).getPropertyValue("margin-left");
    // if (Math.abs(shift - 0.0) < 1e-6 || Math.abs(shift - 100.0) > 1e-6) {
    if (elem.offsetLeft - 6 + shift < elem.minPosition || elem.offsetLeft - 6 + shift > elem.maxPosition) {
      allow = false;
    }
    return allow;
  }

  function setCatsOpacity(opacity) {
    catsBefore.style.opacity = 1 - opacity;
    catsAfter.style.opacity = opacity;
  }

  sliderPin.addEventListener("keydown", function (evt) {
    var pinWidth = this.offsetWidth + 12;
    var sliderBarWidth = sliderBar.offsetWidth;
    // var pathLength = sliderBarWidth - pinWidth - 2;
    var pathLength = 100;
    this.minPosition = 0;
    this.maxPosition = sliderBarWidth - pinWidth - 2;
    // var leftMargin = getComputedStyle(this, null).getPropertyValue("margin-left");
    if (evt.keyCode === 37) {
      evt.preventDefault();
      if (isAllowedMoving(this, -1)) {
        // this.style.left = this.offsetLeft - 6 - 1 + "px";
        sliderCurrentPosition -= 1 / pathLength;
        // this.style.left = sliderCurrentPosition - 1 / this.maxPosition + "%";
      }
    }
    if (evt.keyCode === 39) {
      evt.preventDefault();
      if (isAllowedMoving(this, 1)) {
        // this.style.left = this.offsetLeft - 6 + 1 + "px";
        sliderCurrentPosition += 1 / pathLength;
      }
    }
    this.style.left = sliderCurrentPosition * 100 + "%";
    setCatsOpacity((this.offsetLeft - 6) / this.maxPosition);
  });
}
