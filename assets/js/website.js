$("#progressBarAnimation").click(function () {
  // $(".progress-bar").addClass("progress-bar-animation");
  let width = prompt("What percentage do you change he progress bar to");
  $(".progress-bar").attr("style", `width: ${width}%`);
});
a;
