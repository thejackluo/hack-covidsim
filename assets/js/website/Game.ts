export class CovidGame {
  constructor(
    private totalPeople: number,
    private numPeopleRecovered: number,
    private numPeopleDead: number,
    private numPeopleInfected: number,
    private time: number,
    private populationArray: number[]
  ) {}

  // public constructor(numPeopleInfected, totalPeople, R) {
  //   this.numPeopleInfected = numPeopleInfected;
  //   this.totalPeople = totalPeople;
  //   this.R = R;
  //   for (let i = 0; i < totalPeople; i++) {}
  // }

  public incrementTime(time): void {
    // for (let j = 0; j < this.populationArray.length; j++) {
    //   let person = populationArray[j].getPerson();
    //   for (let k = 0; k < person.contactsPerDay; k++) {
    //     let contactedPerson =
    //       populationArray[Math.floor(Math.random() * populationArray.length)];
    //     if (person.isInfected() && !person.infectedToday()) {
    //       let randomNumber = Math.floor(Math.random() * 100);
    //       if (randomNumber < person.chanceToSpread() * 100) {
    //         contactedPerson.infect();
    //       }
    //     } else if (
    //       contactedPerson.isInfected() &&
    //       !contactedPerson.infectedToday()
    //     ) {
    //       let randomNumber = Math.floor(Math.random() * 100);
    //       if (randomNumber < contactedPerson.chanceToSpread() * 100) {
    //         person.infect();
    //       }
    //     }
    //   }
    // }
  }
}
