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

// Website Functions
function hide(e) {
  console.log(e);
  $("#blackBox").hide();
  $("#blackBoxContainer").hide();
}

// totalPeople, numPeopleInfected, infectionRate, maxNumOfContacts, action;
const game = new Game(5000, 100, 0.2, 5, 50);
let policyArray = game.getPolicyArray();
