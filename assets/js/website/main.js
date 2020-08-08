/*
	Jack Luo Website by Jack
	www.jack-luo.com | @thejackluo
*/

$(document).ready(function () {
  $("#test-h1").click(function () {
    $(this).hide();
  });
  $("#test-button-1").click(function () {
    $("#test-h1").fadeToggle();
  });
  $("#test-button-2").click(function () {
    $("#test-p").toggleClass("animate__animated animate__bounce");
  });
});
