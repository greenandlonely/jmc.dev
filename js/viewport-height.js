/**
 * ------------------------------------------------------------------------
 * Function to calculate the height on the screen taking into account
 * the iOS/Android toolbars
 * ------------------------------------------------------------------------
 */

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", vh + "px");

// We listen to the resize event
window.addEventListener(
  "resize",
  function () {
    // We execute the same script as before
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  },
  true
);
