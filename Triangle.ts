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
    return Math.sqrt(this.semiPerimeter()
      * (this.semiPerimeter() - this.sideA)
      * (this.semiPerimeter() - this.sideB)
      * (this.semiPerimeter() - this.sideC)
    )
  }

  /*
  * Calculates each angle of the triangle
  */
  public angle(angleNumber: number): number {
  let angleInDegrees: number
  let angleInRadians: number
    if (angleNumber === 1) {
      angleInDegrees = Math.acos(
        ((this.sideB ** 2) + (this.sideC ** 2) - (this.sideA ** 2))
        / (2 * this.sideB * this.sideC)
      )
      //angleInRadians = angleInDegrees * (Math.PI / 180)
    } else if (angleNumber === 2) {
      angleInDegrees = Math.acos(
        ((this.sideC ** 2) + (this.sideA ** 2) - (this.sideB ** 2))
        / (2 * this.sideC * this.sideA)
      )
      //angleInRadians = angleInDegrees * (Math.PI / 180)
    } else if (angleNumber === 3) {
      angleInDegrees = Math.acos(
        ((this.sideA ** 2) + (this.sideB ** 2) - (this.sideC ** 2))
        / (2 * this.sideA * this.sideB)
      )
      //angleInRadians = angleInDegrees * (Math.PI / 180)
    }
    return angleInDegrees
  }

  /*
  * Finds the type of triangle
  */
  public getType(): string {
    let triangleType: string
    if (this.sideA === this.sideB === this.sideC) {
      triangleType = "equilateral triangle"
    } else if (
      this.angle(1) === (Math.PI / 2) ||
      this.angle(2) === (Math.PI / 2) ||
      this.angle(3) === (Math.PI / 2)
    ) {
      triangleType = "right angle triangle"
    } else if (
      this.sideA === this.sideB ||
      this.sideB === this.sideC ||
      this.sideC === this.sideA
    ) {
      triangleType = "isosceles triangle"
    } else if (this.sideA != this.sideB != this.sideC) {
      triangleType = "scalene triangle"
    }
    return triangleType
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
