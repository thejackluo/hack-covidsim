import { Person } from "./Person";
import { Policy } from "./Policy";

class Game {
  constructor(totalPeople, numPeopleInfected, infectionRate, maxNumOfContacts) {
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
    this.maxNumOfContacts = maxNumOfContacts;
    this.infectionRate = infectionRate;

    // Array data
    this.personArray;
    for (let i = 0; i < totalPeople; i++) {
      let person = createPerson(35, 1, 50);
      personArray.push(person);
    }

    this.policyArray;
    // create all policies here
    policyArray.push(new Policy());
  }

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

  createPolicy(name, publicOpinion, corporateOpinion, freedom) {
    return new Policy(name, publicOpinion, corporateOpinion, freedom);
  }

  implementPolicy(person, policyObject) {
    // Get all the policy variables
    // Adds it to the person
  }

  removePolicy(policyObject) {
    // Find policy in implemeted policies
  }

  startGame() {
    createPeople(1000);
  }

  gameOver() {
    alert("You lose!");
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

  //
  randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  probabilityCalculator(percentage) {
    if (randomNumber(percentage) <= 100) return true;
    return false;
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
}
