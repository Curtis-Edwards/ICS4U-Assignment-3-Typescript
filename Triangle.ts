/*
 * Triangle class.
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-21
 */

export default class Triangle {
  // variables
  private sideA: number
  private sideB: number
  private sideC: number

  /*
  * Constructor.
  */
  constructor(side1: number, side2: number, side3: number) {
    this.sideA = side1
    this.sideB = side2
    this.sideC = side3
  }

  /*
  * Getter for sideA
  */
  public get sideA() {
    return this.sideA
  }

  /*
  * Getter for sideB
  */
  public get sideB() {
    return this.sideB
  }

  /*
  * Getter for sideC
  */
  public get sideC() {
    return this.sideC
  }

  /*
  * Checks if the triangle has valid dimensions
  */
  public isValid(): boolean {
  let isValid: boolean = true
    if ((this.sideA + this.sideB) < this.sideC) {
      isValid = false
    } else if ((this.sideB + this.sideC) < this.sideA) {
      isValid = false
    } else if ((this.sideC + this.sideA) < this.sideB) {
      isValid = false
    }
    return isValid
  }

  /*
  * Calculates the semi-perimeter
  */
  public semiPerimeter(): number {
    return (this.sideA + this.sideB + this.sideC) / 2
  }

  /*
  * Calculates the area
  */
  public area(): number {
    return Math.sqrt(semiPerimeter()
      * (semiPerimeter() - this.sideA)
      * (semiPerimeter() - this.sideB)
      * (semiPerimeter() - this.sideC)
    )
  }

  /*
  * Finds the type of triangle
  */
  /*public getType(): string {

  }

  /*
  * Calculates each angle of the triangle
  */
  /*public angle(angleNumber: number): number {

  }

  /*
  * Calculates each height of the triangle
  */
  /*public height(sideNumber: number): number {

  }

  /*
  * Calculates the inner circle radius
  */
  /*public innerCircleRadius(): number {

  }

  /*
  * Calculates the circumsicle radius
  */
  /*public circumsicleRadius(): number {

  }*/
}
