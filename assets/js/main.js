class Game {
  constructor(
    totalPeople,
    numPeopleInfected,
    infectionRate,
    maxNumOfContacts,
    action
  ) {
    // Custom Variables
    // Can set doing start time
    this.totalPeople = totalPeople;
    this.numPeopleInfected = numPeopleInfected;
    this.infectionRate = infectionRate;
    this.maxNumOfContacts = maxNumOfContacts;

    // People Data
    this.numPeopleDead = 0;
    this.numPeopleRecovered = 0;
    this.numPeopleHealthy = totalPeople - numPeopleInfected;

    // City Data
    this.publicOpinion = 50;
    this.corporateOpinion = 50;
    this.freedom = 50;

    // Variable Data
    this.action = action;
    this.maxNumOfContacts = maxNumOfContacts;
    this.infectionRate = infectionRate;

    // Array data
    this.personArray;
    for (let i = 0; i < totalPeople; i++) {
      let person = this.createPerson(35, 1, 50);
      this.personArray.push(person);
    }

    this.policyArray;
    policyArray.push(
      this.createPolicy(
        "Universal Masks",
        "Fund the production of masks and make them free for citizens",
        3,
        0,
        10,
        -5
      )
    );
    policyArray.push(
      this.createPolicy(
        "N-95 Mask Mandate",
        "Ask population to purchase N-95 masks to slow spread",
        1,
        0,
        5,
        10
      )
    );
    // this.allPolicies = [
    //   [
    //     "Universal Masks",
    //     "Fund the production of masks and make them free for citizens",
    //     3,
    //     10,
    //     -5,
    //     0,
    //   ],
    //   [
    //     "N-95 Mask Mandate",
    //     "Ask population to purchase N-95 masks to slow spread",
    //     1,
    //     0,
    //     5,
    //     10,
    //   ],
    //   [
    //     "Defence Production Act",
    //     "Yell at mask production team to speed up mask production rate",
    //     2,
    //     0,
    //     10,
    //     -10,
    //   ],
    // ];
  }

  // Game starting

  startGame() {
    this.createPeople(1000);
    this.createAllPolicy();
  }

  gameOver() {
    alert("You lose!");
  }

  incrementTime(time) {
    for (let i = 0; i < time; i++) {
      for (let j = 0; j < this.personArray.length; j++) {
        // This determines the person
        let person = populationArray[j].getPerson();
        for (let k = 0; k < person.contactsPerDay; k++) {
          // This determines who the person he is going to Contact
          let contactedPerson =
            populationArray[Math.floor(Math.random() * populationArray.length)];
          if (person.isInfected) person.infection();
        }
      }
    }
  }

  // Creations

  createPerson(educationPercentage, infectionPercentage, wealthyPercentage) {
    // False is default
    let isEducated, isInfected, isWealthy, incubation;
    isEducated = isInfected = isWealthy = incubation = false;

    // Determine person classification
    if (this.probabilityCalculator(educationPercentage)) isEducated = true;
    if (this.probabilityCalculator(infectionPercentage)) isInfected = true;
    if (this.probabilityCalculator(wealthyPercentage)) isWealthy = true;

    // Add person to person Array
    let person = new Person(isEducated, isInfected, isWealthy, incubation);
    this.personArray.push(person);
  }
  // Create an Array of people
  // Go through a for loop
  // Use a random number generator

  createPolicy(
    name,
    description,
    cost,
    publicOpinion,
    corporateOpinion,
    freedom
  ) {
    return new Policy(
      name,
      description,
      cost,
      publicOpinion,
      corporateOpinion,
      freedom
    );
  }

  createAllPolicy() {
    // create all policies here
    this.policyArray.push(
      new Policy(
        "Universal Masks",
        "Fund the production of masks and make them free for citizens",
        3,
        10,
        -5,
        0
      )
    );
    this.policyArray.push(
      new Policy(
        "N-95 Mask Mandate",
        "Ask population to purchase N-95 masks to slow spread",
        1,
        0,
        5,
        10
      )
    );
    this.policyArray.push(
      new Policy(
        "Defence Production Act",
        "Yell at mask production team to speed up mask production rate",
        2,
        0,
        10,
        -10
      )
    );
  }

  // Implementation of Policies

  implementPolicy(person, policyObject) {
    // Get all the policy variables
    // Adds it to the person
  }

  removePolicy(policyObject) {
    // Find policy in implemeted policies
  }

  // If public opinion goes 20%
  riot() {
    gameOver();
  }

  infection(personToInfect) {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < this.infectionRate) {
      personToInfect.infect();
    }
  }

  // Getter Method
  getPolicyArray() {
    return this.policyArray;
  }

  // Setter Method

  // Helper Methods
  randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  probabilityCalculator(percentage) {
    if (this.randomNumber(percentage) <= 100) return true;
    return false;
  }
}

class Person {
  constructor(isEducated, isInfected, isWealthy, isIncubated) {
    this.isEducated = isEducated;
    this.isInfected = isInfected;
    this.isWealthy = isWealthy;
    this.isIncubated = isIncubated;
  }

  incubation = () => (this.isIncubated = true);
  recover = () => (this.isInfected = false);
  rich = () => (this.isWealthy = true);
  poor = () => (this.isWealthy = false);
}

// getInfected() {
//   return this.isInfected;
//
// returns if is infected
// }

// getEducated() {
//   return;

//   // returns if is educated
// }

// incrementDay() {
//   // decrease day, infectedToday = false
// }

// remainingDays() {
//   return;

//   // returns remaining days
// }

// survives() {
//   return;

//   // return true if RNG give
// }

// infection() {
//   // sets days to a range between 6 and 21, setsisInfected to true, infectedToday to true
// }

// update() {
//   return;
// }

class Policy {
  constructor(
    name,
    description,
    cost,
    publicOpinion,
    corporateOpinion,
    freedom
  ) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.publicOpinion = publicOpinion;
    this.corporateOpinion = corporateOpinion;
    this.freedom = freedom;
  }

  getName() {
    return this.name;
  }

  getPublicOpinion() {
    return this.publicOpinion;
  }

  getCorporateOpinion() {
    return this.corporateOpinion;
  }

  getFreedom() {
    return this.freedom;
  }

  getCost() {
    return this.cost;
  }

  getDescription() {
    return this.description;
  }
}

//Regular Functions
// import { Game } from "website/Game";

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
console.log(policyArray);

for (var i = 0; i < policyArray.length; i++) {
  var obj = document.createElement("DIV");
  obj.className = "policyItem";
  obj.innerHTML = policyArray[i].name;
  obj.title = policyArray[i].description;
  $("#policyHolder").appendChild(obj);
}
