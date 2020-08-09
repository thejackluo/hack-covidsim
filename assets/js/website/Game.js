import { Person } from "./Person";
import { Policy } from "./Policy";

export class Game {
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
      let person = createPerson(35, 1, 50);
      personArray.push(person);
    }

    this.policyArray;
    policyArray.push(
      createPolicy(
        "Universal Masks",
        "Fund the production of masks and make them free for citizens",
        3,
        0,
        10,
        -5
      )
    );
    policyArray.push(
      createPolicy(
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
    if (probabilityCalculator(educationPercentage)) isEducated = true;
    if (probabilityCalculator(infectionPercentage)) isInfected = true;
    if (probabilityCalculator(wealthyPercentage)) isWealthy = true;

    // Add person to person Array
    let person = new Person(isEducated, isInfected, isWealthy, incubation);
    personArray.push(person);
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
    policyArray.push(
      new Policy(
        "Universal Masks",
        "Fund the production of masks and make them free for citizens",
        3,
        10,
        -5,
        0
      )
    );
    policyArray.push(
      new Policy(
        "N-95 Mask Mandate",
        "Ask population to purchase N-95 masks to slow spread",
        1,
        0,
        5,
        10
      )
    );
    policyArray.push(
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
    if (randomNumber(percentage) <= 100) return true;
    return false;
  }
}
