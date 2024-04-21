/*
 * Triangle class.
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-21
 */

export class Triangle {
  // variables
  private sideA: number
  private sideB: number
  private sideC: number

  /*
  * Constructor.
  */
  constructor(sideA: number, sideC: number, sideC: number) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  /*
  * getter for sideA
  */
  public get sideA() {
    return this.sideA
  }

  /*
  * getter for sideB
  */
  public get sideB() {
    return this.sideB
  }

  /*
  * getter for sideC
  */
  public get sideC() {
    return this.sideC
  }
}
