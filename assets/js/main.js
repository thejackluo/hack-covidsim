//Regular Functions
$("#progressBarAnimation").click(function () {
  // $(".progress-bar").addClass("progress-bar-animation");
  let width = prompt("What percentage do you change he progress bar to");
  $(".progress-bar").attr("style", `width: ${width}%`);
});

// let deathCount = new CountUp($("#deathCount"), 22, 99.99);

$("#changeDeathCount").click(function () {
  let changedNumber = prompt("What do you want to change the death count to");
  $("#deathCount").text(changedNumber);
});

//Website Functions
function hide() {
  console.log("HI");
  $("#blackBox").hide();
  $("#blackBoxContainer").hide();
}
