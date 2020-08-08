interface GameVariables {

}

public class CovidGame {
  let time = 0
  let numPeopleRecovered = 0;
  let numPeopleDead = 0;

  let R;
  // integer
  const totalPeople;
  let numPeopleInfected;
  // array
  let population;

  public constructor(numPeopleInfected, totalPeople, R) {
    this.numPeopleInfected = numPeopleInfected;
    this.totalPeople = totalPeople;
    this.R = R;
    for (let i = 0; i < totalPeople; i++) {}
  }

  public incrementTime(time) {
    for (let j = 0; j < population.length; j++) {
      let person = population[j].getPerson();
      for (let k = 0; k < person.contactsPerDay; k++) {
        let contactedPerson =
          population[Math.floor(Math.random() * population.length)];
        if (person.isInfected() && !person.infectedToday()) {
          let randomNumber = Math.floor(Math.random() * 100);
          if (randomNumber < person.chanceToSpread() * 100) {
            contactedPerson.infect();
          }
        } else if (
          contactedPerson.isInfected() &&
          !contactedPerson.infectedToday()
        ) {
          let randomNumber = Math.floor(Math.random() * 100);
          if (randomNumber < contactedPerson.chanceToSpread() * 100) {
            person.infect();
          }
        }
      }
    }
  }
}
