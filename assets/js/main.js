let allPolicies = {
  0: {
    Name: "Universal Masks",
    Description:
      "Fund the production of masks and make them free for all citizens lowering the transmtion rate between citizens. Improves public opinion signficantly and lowers corprate approval slightly",
    Price: 3,
    Freedom: 0,
    "Public Opinion": 10,
    "Corperate Opinion": -5,
  },
  1: {
    Name: "N-95 Mask Mandate",
    Description:
      "Ask population to purchase N-95 masks to slow spread. Effects only the rich as N-95 masks are difficult to come by, skyrocketing its price. Significantly lowers transmition rates of the rich.",
    Price: 1,
    Freedom: 0,
    "Public Opinion": 5,
    "Corperate Opinion": 0,
  },
  2: {
    Name: "Defence Production Act",
    Description:
      "Invoke the Defence and Production Act to speed up clinical good production utilising corprate supply lines. Lowers transmition rates, significantly increases public approval, and significantly lowers corprate approval",
    Price: 2,
    Freedom: 0,
    "Public Opinion": 10,
    "Corperate Opinion": -20,
  },
  3: {
    Name: "Botched Presidential Speech",
    Description:
      "Encourage Social Gatherings among constituents. Has a high chance to increase contacts per day among un educated citizens.",
    Price: 1,
    Freedom: 20,
    "Public Opinion": 5,
    "Corperate Opinion": 0,
  },
  4: {
    Name: "Means Tested UBI",
    Description:
      "Give a universal basic income to low income families. Increases freedom and lowers contacts per day among low income families.",
    Price: 3,
    Freedom: 10,
    "Public Opinion": 10,
    "Corperate Opinion": -5,
  },
  5: {
    Name: "UBI",
    Description:
      "Give a high universal basic income to all families. Increases freedom and lowers contacts per day among all income families.",
    Price: 4,
    Freedom: 25,
    "Public Opinion": 20,
    "Corperate Opinion": -10,
  },
  6: {
    Name: "Furlough Workers",
    Description:
      "Workers cannot be fired, but rather they can be suspended from work without pay while still keeping their job. Increases public approval significantly. Lowers corprate approval significantly.",
    Price: 2,
    Freedom: 10,
    "Public Opinion": 15,
    "Corperate Opinion": -15,
  },
  7: {
    Name: "Unemployment Benefits",
    Description:
      "Government pays for worker’s salary who have been fired. Slightly increases freedom and fairly increases corprate / public opinion.",
    Price: 5,
    Freedom: 10,
    "Public Opinion": 10,
    "Corperate Opinion": 10,
  },
  8: {
    Name: "Close Borders",
    Description:
      "Ban all immigration, emmigration, and tourism. Significantly reduces contacts per day; however, it drastically lowers freedom, corprate opinion, and public opinion.",
    Price: 4,
    Freedom: -15,
    "Public Opinion": -20,
    "Corperate Opinion": -10,
  },

  9: {
    Name: "Halt eviction and foreclosure",
    Description:
      "Prevents all families from being evicted from their homes. Increases public opinion and lowers corprate opinion. Slightly lowers contacts per day.",
    Price: 2,
    Freedom: 0,
    "Public Opinion": 15,
    "Corperate Opinion": -15,
  },
  10: {
    Name: "Covid Testing Kets",
    Description:
      "Gift covid test kits to hospitals. Lowers contacts per day of those infected. Increases public / corprate opinion",
    Price: 2,
    Freedom: 0,
    "Public Opinion": 15,
    "Corperate Opinion": 0,
  },
  11: {
    Name: "Covid Health Insurance",
    Description:
      "Provide free covid healthcare! Lowers contacts per day, and transmisions and survial rates of everyone,  especially low income. Increases freedom and public opinion but drastically lowers corprate opinion.",
    Price: 5,
    Freedom: 20,
    "Public Opinion": 20,
    "Corperate Opinion": -20,
  },

  12: {
    Name: "Corporate Welfare",
    Description:
      "Give free money to coperation. Increases corprate approval significantly and slightly lowers public opinion.",
    Price: 2,
    Freedom: 0,
    "Public Opinion": -5,
    "Corperate Opinion": 15,
  },
  13: {
    Name: "Mass Ventilator Production",
    Description:
      "Funds production of ventiators for hospitals. Significantly increases survival rates of citizens and increases freedom / public opinion.",
    Price: 3,
    Freedom: 10,
    "Public Opinion": 10,
    "Corperate Opinion": 10,
  },
  14: {
    Name: "Covid Tracing",
    Description:
      "Contact familty members and contacted people of infected indivisuals to prevent community outbreaks of covid. Lowers freedom but increases public opinion.",
    Price: 1,
    Freedom: -10,
    "Public Opinion": 10,
    "Corperate Opinion": 0,
  },
};

class Game {
  constructor(
    totalPeople,
    numPeopleInfected,
    infectionRate,
    maxNumOfContacts,
    action,
    turns
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
    this.freedomOpinion = 50;

    // Variable Data
    this.action = action;
    this.maxNumOfContacts = maxNumOfContacts;
    this.infectionRate = infectionRate;
    this.turns = turns;

    // Array data
    this.personArray = [];
    for (let i = 0; i < totalPeople; i++) {
      let person = this.createPerson(35, 1, 50);
      this.personArray.push(person);
    }
    console.log(this.personArray);

    this.policyArray = [];
    this.curedArray = [];
  }

  // Game starting

  startGame() {
    this.createAllPolicy();
  }

  gameOver() {
    alert("You lose!");
  }

  incrementTime() {
    this.publicOpinion = 50;
    this.corporateOpinion = 50;
    this.freedomOpinion = 50;

    for (let i = 0; i < this.policyArray.length; i++) {
      if (this.policyArray[i].getImplementation()) {
        this.publicOpinion += policyArray[i].getPublicOpinion();
        this.corporateOpinion += policyArray[i].getCorporateOpinion();
        this.freedomOpinion += policyArray[i].getFreedomOpinion();
      }
    }
    // Change the progress bars
    $(".public-progress").attr("style", `width: ${this.publicOpinion}%`);
    $(".freedom-progress").attr("style", `width: ${this.freedomOpinion}%`);
    $(".corporate-progress").attr("style", `width: ${this.corporateOpinion}%`);
    if (this.freedomOpinion < 20) {
      this.gameOver();
    }
    // Have each person contact another person
    for (let i = 0; i < this.personArray.length; i++) {
      // This determines the person in the population
      let person = this.personArray[i];
      if (person.getIsIncubated()) {
        person.infect();
        person.isIncubated = false;
      }
      if (person.getIsInfected()) {
        person.updateSurvivalRate();
        person.incrementInfect();
      }
      for (let j = 0; j < this.randomNumber(this.maxNumOfContacts); j++) {
        // This determines who the person he is going to Contact
        let contactedPerson = this.personArray[
          this.randomNumber(this.personArray.length) - 1
        ];
        if (
          person.getIsInfected() &&
          !(
            contactedPerson.getIsInfected() ||
            contactedPerson.getIsDead() ||
            contactedPerson.getIsCured()
          )
        ) {
          contactedPerson.isIncubated = true;
        }
      }
      //Nishio's op code use it or bad jack
      // if (person.getIsInfected()) {
      //   person.numInfectedDays()++;
      // }
      // //After two weeks, person will either die or get cured
      // if (person.numInfectedDays > 2) {
      //   let randomNumber = Math.floor(Math.random() * 100 + 1);
      //   if (randomNumber <= 5) {
      //     person.isDead = true;
      //   }else{
      //     person.isCured = true;
      //   }
      //   person.cured();
      // }
    }
    let infectionCount = this.checkInfectionCount();
    $("#infectedCount").text(infectionCount);
    let deathCount = this.checkDeathCount();
    $("#deathCount").text(deathCount);
  }

  checkInfectionCount() {
    let count = 0;
    for (let i = 0; i < this.personArray.length; i++) {
      if (this.personArray[i].getIsInfected()) {
        count++;
      }
    }
    return count;
  }
  checkDeathCount() {
    let count = 0;
    for (let i = 0; i < this.personArray.length; i++) {
      if (this.personArray[i].getIsDead()) {
        count++;
      }
    }
    return count;
  }

  // Creations

  createPerson(educationPercentage, infectionPercentage, wealthyPercentage) {
    // False is default
    let isEducated, isInfected, isWealthy, isIncubated;
    isEducated = isInfected = isWealthy = isIncubated = false;

    // Determine person classification
    if (this.probabilityCalculator(educationPercentage)) isEducated = true;
    if (this.probabilityCalculator(infectionPercentage)) isInfected = true;
    if (this.probabilityCalculator(wealthyPercentage)) isWealthy = true;

    // Add person to person Array
    return new Person(isEducated, isInfected, isWealthy, isIncubated);
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
    freedomOpinion
  ) {
    return new Policy(
      name,
      description,
      cost,
      publicOpinion,
      corporateOpinion,
      freedomOpinion
    );
  }

  createAllPolicy() {
    for (let i = 0; i < Object.keys(allPolicies).length; i++) {
      let policy = this.createPolicy(
        allPolicies[i].Name,
        allPolicies[i].Description,
        allPolicies[i].Price,
        allPolicies[i]["Public Opinion"],
        allPolicies[i]["Corperate Opinion"],
        allPolicies[i].Freedom
      );
      this.policyArray.push(policy);
    }

    // create all policies here
    console.log(policyArray);
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

  getPersonArray() {
    console.log(this.personArray);
    return this.personArray;
  }

  // Setter Method

  // Helper Methods
  randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  probabilityCalculator(percentage) {
    if (this.randomNumber(100) <= percentage) return true;
    return false;
  }
}

class Person {
  //
  constructor(isEducated, isInfected, isWealthy, isIncubated) {
    this.isEducated = isEducated;
    this.isInfected = isInfected;
    this.isWealthy = isWealthy;
    this.isIncubated = isIncubated;
    this.survivalRate = 95;
    this.numInfectedDays = 0;
    this.isDead = false;
    this.isCured = false;
  }

  incubate() {
    this.isIncubated = true;
  }

  incrementInfect() {
    if (!(Math.floor(Math.random() * 100) + 1 <= this.survivalRate)) {
      this.isDead = true;
      this.isInfected = false;
    }
    if (this.numInfectedDays > 7) {
      this.isCured = true;
      this.isInfected = false;
    }
    this.numInfectedDays++;
  }

  updateSurvivalRate() {
    if (this.isWealthy) {
      this.survivalRate = 95 - 5 * this.numInfectedDays;
    } else {
      this.survivalRate = 95 - 10 * this.numInfectedDays;
    }
  }

  infect() {
    this.isInfected = true;
  }

  recover() {
    // How to determine recovery
    this.isInfected = false;
  }

  // Optional
  rich() {
    this.isWealthy = true;
  }

  poor() {
    this.isWealthy = false;
  }

  educated() {
    this.isEducated = true;
  }

  // Getter
  getIsIncubated() {
    return this.isIncubated;
  }

  getIsInfected() {
    return this.isInfected;
  }

  getIsDead() {
    return this.isDead;
  }

  getIsCured() {
    return this.isCured;
  }

  getNumDays() {
    return this.numInfectedDays;
  }

  getSurvivalRate() {
    return this.survivalRate;
  }

  educated() {
    this.isEducated = true;
  }

  getNumDays() {
    return this.numInfectedDays;
  }

  getSurvivalRate() {
    return this.survivalRate;
  }
}

class Policy {
  constructor(
    name,
    description,
    cost,
    publicOpinion,
    corporateOpinion,
    freedomOpinion
  ) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.publicOpinion = publicOpinion;
    this.corporateOpinion = corporateOpinion;
    this.freedomOpinion = freedomOpinion;
    this.implementation = false;
  }

  getImplementation() {
    return this.implementation;
  }

  toggleImplementation() {
    if (this.getImplementation()) {
      this.implementation = false;
    } else {
      this.implementation = true;
    }
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

  getFreedomOpinion() {
    return this.freedomOpinion;
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

const game = new Game(2000, 50, 0.005, 1, 50, 5);

$(document).ready(function () {
  create();
  hide();
  let infectionCount = game.checkInfectionCount();
  $("#infectedCount").text(infectionCount);
  $("#alertMessageSuccess").hide();
  $("#alertMessageFailure").hide();
  $("#progressBarAnimation").click(function () {
    // $(".progress-bar").addClass("progress-bar-animation");
    let width = prompt("What percentage do you change the progress bar to");
    $(".progress-bar").attr("style", `width: ${width}%`);
  });

  // let deathCount = new CountUp($("#deathCount"), 22, 99.99);

  $("#changeDeathCount").click(function () {
    let changedNumber = prompt("What do you want to change the death count to");
    $("#deathCount").text(changedNumber);
  });

  $("#endTurn").click(function () {
    game.incrementTime();
  });
});

// Website Functions
let hide = () => {
  $("#blackBox").hide();
};

let show = () => $("#blackBox").show();

// totalPeople, numPeopleInfected, infectionRate, maxNumOfContacts, action;
let policyArray = game.getPolicyArray();
game.createAllPolicy();
console.log(policyArray);

create = () => {
  for (let i = 0; i < policyArray.length; i++) {
    let obj = document.createElement("DIV");
    obj.className = "policyItem";
    obj.innerHTML = policyArray[i].name;
    obj.description = policyArray[i].description;
    obj.cost = policyArray[i].cost;
    obj.policy = policyArray[i];

    obj.onclick = function (e) {
      show();
      console.log(e);
      let tempObj = e.path[0];
      document.getElementById("popUpDesc").innerHTML = tempObj.description;
      document.getElementById("popUpDesc").policy = tempObj.policy;
      document.getElementById("popUpDesc").a = tempObj;
      document.getElementById("popUpCost").innerHTML = tempObj.cost;
    };
    document.getElementById("policyHolder").appendChild(obj);
  }
};
let confirm = () => {
  let temp = document.getElementById("popUpDesc").policy;
  let ser = document.getElementById("popUpDesc").a;
  console.log(ser);
  console.log(temp);

  // if (temp.getImplementation()) {
  //   temp.setAttribute("style", "background-color: var(--green);");
  // } else {
  //   temp.setAttribute("style", "background-color: var(--red);");
  // }
  // update();
  let action = document.getElementById("actionCurrency");
  if (Number.parseInt(action.textContent) - temp.cost >= 0) {
    action.textContent = Number.parseInt(action.textContent) - temp.cost;
    temp.toggleImplementation();

    $("#alertMessageSuccess").html(
      `<strong>Success!</strong> You have purchased ${ser.innerHTML} for ${temp.cost} actions.`
    );
    $("#alertMessageSuccess").slideDown();
    setTimeout(function () {
      $("#alertMessageSuccess").slideUp();
    }, 3000);
    hide();
    document.getElementById("policyHolder").removeChild(ser);

    let list = document.getElementsByClassName("policyItem");
    console.log(list);

    for (let i = 0; i < list.length; i++) {
      if (list[i].cost > Number.parseInt(action.textContent))
        list[i].style.backgroundColor = "#dc3545";
    }
  } else {
    $("#alertMessageFailure").slideDown();
    setTimeout(function () {
      $("#alertMessageFailure").slideUp();
    }, 3000);
    hide();
  }
};

function stats() {
  let list = game.getPersonArray();
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    let obj = document.createElement("DIV");
    obj.innerHTML =
      i +
      ": isEducated, " +
      list[i].educated() +
      ": isWealthy, " +
      list[i].isRich() +
      ": isInfected, " +
      list[i].getIsInfected() +
      ": days, " +
      list[i].getNumDays() +
      ": survivalRate, " +
      list[i].getSurvivalRate();
    console.log(obj);
    document.getElementById("stats").appendChild(obj);
  }
}

// update = () => {
//   let policyContainer = document.getElementById("policyHolder");
//   policyContainer.innerHTML = "";
//   for (let i = 0; i < policyArray.length; i++) {
//     let obj = document.createElement("DIV");
//     obj.className = "policyItem";
//     obj.innerHTML = policyArray[i].name;
//     obj.description = policyArray[i].description;
//     obj.cost = policyArray[i].cost;
//     obj.policy = policyArray[i];

//     obj.onclick = function (e) {
//       show();
//       console.log(e);
//       let tempObj = e.path[0];
//       document.getElementById("popUpDesc").innerHTML = tempObj.description;
//       document.getElementById("popUpDesc").policy = tempObj.policy;
//       document.getElementById("popUpCost").innerHTML = tempObj.cost;
//     };
//     document.getElementById("policyHolder").appendChild(obj);
//   }
// };
