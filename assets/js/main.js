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
    Name: "Furlough workers",
    Description:
      "Workers cannot be fired, but rather they can be suspended from work without pay while still keeping their job. Increases public approval significantly. Lowers corprate approval significantly.",
    Price: 2,
    Freedom: 10,
    "Public Opinion": 15,
    "Corperate Opinion": -15,
  },
  7: {
    Name: "Unemployment Benifits",
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
    Description: "Stop government from deporting people",
    Price: 2,
    Freedom: 10,
    "Public Opinion": 15,
    "Corperate Opinion": -15,
  },
  10: {
    Name: "I love getting vaccinated!",
    Description: "Gift covid test kits to hospitals",
    Price: 2,
    Freedom: 0,
    "Public Opinion": 15,
    "Corperate Opinion": -10,
  },
  11: {
    Name: "Health Insurance but better!",
    Description: "Provide free covid healthcare",
    Price: 3,
    Freedom: 0,
    "Public Opinion": 20,
    "Corperate Opinion": -10,
  },
  12: {
    Name: "Halt eviction and foreclosure",
    Description: "Stop government from deporting people",
    Price: 2,
    Freedom: 10,
    "Public Opinion": 15,
    "Corperate Opinion": -15,
  },
  13: {
    Name: "Corporate Welfare",
    Description: "Give free money to coperation",
    Price: 2,
    Freedom: 0,
    "Public Opinion": 0,
    "Corperate Opinion": 15,
  },
  14: {
    Name: "Mass Ventilator Production",
    Description: "Make corporates pay for overpriced ventilators",
    Price: 2,
    Freedom: 10,
    "Public Opinion": 10,
    "Corperate Opinion": -20,
  },
  15: {
    Name: "What’s Privacy?",
    Description: "Send a text to each family member about their temperature",
    Price: 1,
    Freedom: -5,
    "Public Opinion": 0,
    "Corperate Opinion": 10,
  },
};

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
    this.freedomOpinion = 50;

    // Variable Data
    this.action = action;
    this.maxNumOfContacts = maxNumOfContacts;
    this.infectionRate = infectionRate;

    // Array data
    this.personArray = [];
    for (let i = 0; i < totalPeople; i++) {
      let person = this.createPerson(35, 1, 50);
      this.personArray.push(person);
    }
    console.log(this.personArray);

    this.policyArray = [];
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
    this.policyArray[2].toggleImplementation();

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
    // Have each person contact another person
    for (let i = 0; i < this.personArray.length; i++) {
      // This determines the person in the population
      let person = this.personArray[i];
      if (person.getIsIncubated()) {
        person.infect();
      }
      for (let j = 0; j < person.contactsPerDay; j++) {
        // This determines who the person he is going to Contact
        let contactedPerson = this.personArray[
          this.randomNumber(personArray.length)
        ];
        if (person.getIsInfected() && !contactedPerson.getIsInfected()) {
          contactedPerson.incubation();
        } else if (contactedPerson.getIsInfected() && !person.getIsInfected()) {
          person.infect();
        }
      }
    }
    let infectionCount = this.checkInfectionCount();
    $("infectedCount").text(infectionCount);
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
  }

  updateSurvivalRate() {}

  getIsIncubated() {
    return this.isInfected;
  }

  getIsInfected() {
    return this.isInfected;
  }

  infect = () => {
    this.isInfected = true;
  };

  recover = () => {
    this.isInfected = false;
  };

  rich = () => {
    this.isWealthy = true;
  };

  poor = () => {
    this.isWealthy = false;
  };

  incubation = () => {
    this.incubation = true;
  };
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

const game = new Game(500, 100, 0.2, 5, 50);

$(document).ready(function () {
  $("#alertMessage").hide();

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

  $("#endTurn").click(function () {
    game.incrementTime();
  });
});

// Website Functions
function hide(e) {
  console.log(e);
  $("#blackBox").hide();
}

function show() {
  $("#blackBox").show();
}

// totalPeople, numPeopleInfected, infectionRate, maxNumOfContacts, action;
hide();
let policyArray = game.getPolicyArray();
game.createAllPolicy();
console.log(policyArray);

for (var i = 0; i < policyArray.length; i++) {
  var obj = document.createElement("DIV");
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
    document.getElementById("popUpCost").innerHTML = tempObj.cost;
  };
  document.getElementById("policyHolder").appendChild(obj);
}

function confirm() {
  let temp = document.getElementById("popUpDesc").policy;
  console.log(temp);
  // if (temp.getImplementation()) {
  //   temp.setAttribute("style", "background-color: var(--green);");
  // } else {
  //   temp.setAttribute("style", "background-color: var(--red);");
  // }
  let action = document.getElementById("actionCurrency");
  if (Number.parseInt(action.textContent) - temp.cost > 0) {
    action.textContent = Number.parseInt(action.textContent) - temp.cost;
    temp.toggleImplementation();
    hide();
  } else {
    $("#alertMessage").slideDown();
    setTimeout(function () {
      $("#alertMessage").slideUp();
    }, 2000);
    hide();
  }
}
