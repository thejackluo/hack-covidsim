import { Person } from "./Person";
import { Policy } from "./Policy";

export class Game {
  private numPeopleRecovered: number;
  private numPeopleDead: number;
  private time: number;

  public constructor(
    private totalPeople: number,
    private numPeopleInfected: number,
    private populationArray: string[]
  ) {}

  public incrementTime(time: number): void {
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
