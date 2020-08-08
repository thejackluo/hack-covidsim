export class Person {
  public constructor(
    private isEducated: boolean,
    private isInfected: boolean,
    private isWealthy: boolean,
    private daysLeft: number
  ) {}

  public getInfected(): boolean {
    return this.isInfected;
    // returns if is infected
  }

  public getEducated(): boolean {
    return;

    // returns if is educated
  }

  public incrementDay(): void {
    // decrease day, infectedToday = false
  }

  public remainingDays(): number {
    return;

    // returns remaining days
  }

  public survives(): boolean {
    return;

    // return true if RNG give number < chanceOf survival
  }

  public infection(): void {
    // sets days to a range between 6 and 21, setsisInfected to true, infectedToday to true
  }

  public update(): void {
    return;
  }
}
