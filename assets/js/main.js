let allPolicies = {
  0: {
    "Name": "Universal Masks",
    "Description": "Fund the production of masks and make them free for citizens",
    "Price": 3,
    "Freedom": 0,
    "Public Opinion": 10,
    "Corperate Opinion": -5
  },
  1: {
    "Name": "N-95 Mask Mandate",
    "Description": "Ask population to purchase N-95 masks to slow spread",
    "Price": 1,
    "Freedom": 0,
    "Public Opinion": 5,
    "Corperate Opinion": 10
  },
  2: {
    "Name": "Defence Production Act",
    "Description": "Yell at mask production team to speed up mask production rate",
    "Price": 2,
    "Freedom": 0,
    "Public Opinion": 10,
    "Corperate Opinion": -10
  },
  3: {
    "Name": "Botched Presidential Speech",
    "Description": "Encourage Social Gatherings",
    "Price": 1,
    "Freedom": 20,
    "Public Opinion": 5,
    "Corperate Opinion": 10
  },
  4: {
    "Name": "Means Tested UBI",
    "Description": "Give a universal basic income to low income families",
    "Price": 3,
    "Freedom": 10,
    "Public Opinion": 10,
    "Corperate Opinion": -15
  },
  5: {
    "Name": "UBI",
    "Description": "Give a high universal basic income to all families",
    "Price": 4,
    "Freedom": 25,
    "Public Opinion": 20,
    "Corperate Opinion": -25
  },
  6: {
    "Name": "Furlough workers",
    "Description": "Workers get vacation days off",
    "Price": 2,
    "Freedom": 10,
    "Public Opinion": 15,
    "Corperate Opinion": -15
  },
  7: {
    "Name": "Money grows on trees",
    "Description": "Government pays for worker’s salary",
    "Price": 1,
    "Freedom": 0,
    "Public Opinion": 10,
    "Corperate Opinion": -15
  },
  8: {
    "Name": "Close Borders",
    "Description": "Ban all travel in and outside",
    "Price": 4,
    "Freedom": -15,
    "Public Opinion": -20,
    "Corperate Opinion": -10
  },
  9: {
    "Name": "Government Unemployment Benefits",
    "Description": "Stop government from deporting people",
    "Price": 2,
    "Freedom": 10,
    "Public Opinion": 15,
    "Corperate Opinion": -15
  },
  10: {
    "Name": "Halt eviction and foreclosure",
    "Description": "Stop government from deporting people",
    "Price": 2,
    "Freedom": 10,
    "Public Opinion": 15,
    "Corperate Opinion": -15
  },
  11: {
    "Name": "I love getting vaccinated!",
    "Description": "Gift covid test kits to hospitals",
    "Price": 2,
    "Freedom": 0,
    "Public Opinion": 15,
    "Corperate Opinion": -10
  },
 12: {
    "Name": "Health Insurance but better!",
    "Description": "Provide free covid healthcare",
    "Price": 3,
    "Freedom": 0,
    "Public Opinion": 20,
    "Corperate Opinion": -10
  },
  13: {
    "Name": "Halt eviction and foreclosure",
    "Description": "Stop government from deporting people",
    "Price": 2,
    "Freedom": 10,
    "Public Opinion": 15,
    "Corperate Opinion": -15
  },
  14: {
    "Name": "Corporate Welfare",
    "Description": "Give free money to coperation",
    "Price": 2,
    "Freedom": 0,
    "Public Opinion": 0,
    "Corperate Opinion": 15
  },
  15: {
    "Name": "Mass Ventilator Production",
    "Description": "Make corporates pay for overpriced ventilators",
    "Price": 2,
    "Freedom": 10,
    "Public Opinion": 10,
    "Corperate Opinion": -20
  },
  16: {
    "Name": "What’s Privacy?",
    "Description": "Send a text to each family member about their temperature",
    "Price": 1,
    "Freedom": -5,
    "Public Opinion": 0,
    "Corperate Opinion": 10
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
    this.freedom = 50;

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
    for (let i = 0; i < policyArray.length; i++) {
      this.publicOpinion = 50;
      this.corporateOpinion = 50;
      this.freedom = 50;
      if (policyArray[i].getImplementation()) {
       this.publicOpinion += policyArray[i].getPublicOpinion;
       this.corporateOpinion  += policyArray[i].getCorporateOpinion;
       this.freedom += policyArray[i].getFreedom;
      }
    }
    // Change the progress bars
    $(".public-progress").attr("style", `width: ${this.publicOpinion}%`);
    $(".freedom-progress").attr("style", `width: ${thiss.freedomOpinion}%`);
    $(".corporate-progress").attr("style", `width: ${this.corporateOpinion}%`);
    // Have each person contact another person
    for (let i = 0; i < this.personArray.length; i++) {
      // This determines the person in the population
      let person = populationArray[j].getPerson();
      if (person.getIsIncubated()) {
        person.infect();
      }
      for (let j = 0; j < person.contactsPerDay; j++) {
        // This determines who the person he is going to Contact
        let contactedPerson = populationArray[this.randomNumber(populationArray.length)];
        if (person.getIsInfected() && !(contactedPerson.getIsInfected())) {
          contactedPerson.incubation();
        } else if (contactedPerson.getIsInfected() && !(person.getIsInfected())) {
          person.infect();
        }
      }
    }
    let infectionCount = checkInfectionCount()
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
    let person = new Person(isEducated, isInfected, isWealthy, isIncubated);
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

  updateSurvivalRate() {
    
  }

  getIsIncubated() {
    return this.isInfected;
  }

  getIsInfected() {
    return this.isInfected;
  }

  recover = () => {
    this.isInfected = false
  };

  rich = () => {
    this.isWealthy = true
  };

  poor = () => {
    this.isWealthy = false
  };

  incubation = () => {
    this.incubation = true;
        
  }
}

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

$(document).ready(function(){
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

  $("")
  
  // Website Functions
  function hide(e) {
    console.log(e);
    $("#blackBox").hide();
  }
  
  function show() {
    $("#blackBox").show();
  }

  
});


// totalPeople, numPeopleInfected, infectionRate, maxNumOfContacts, action;
hide();
const game = new Game(500, 100, 0.2, 5, 50);
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
    var tempObj = e.path[0];
    document.getElementById("popUpDesc").innerHTML = tempObj.description;
    document.getElementById("popUpCost").innerHTML = tempObj.cost;
    document.getElementById("confirm").onclick = "confirm(" + tempObj.policy + ")";
  };
  document.getElementById("policyHolder").appendChild(obj); 
}

function confirm(e)
{
  console.log("HI");
  console.log(e);
}
