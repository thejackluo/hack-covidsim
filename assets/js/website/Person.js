export class Person {
  constructor(isEducated, isInfected, isWealthy, incubation) {
    this.isEducated = isEducated;
    this.isInfected = isInfected;
    this.isWealthy = isWealthy;
    this.incubation = incubation;
  }

  incubation = () => (infect = () => (this.isInfected = true));
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
