import MathHelper from './helper/MathHelper';

/**
 * [Box]
 */
class Box {
  /**
   * [constructor initialises the dimensions and position with default values.]
   */
  constructor() {
    this.height = 30;
    this.width = 30;
    this.length = 30;
    this.xPos = 0;
    this.yPos = 0;
    this.zPos = 0;
  }
  // not in use yet
  // /**
  //  * [moveTo ]
  //  * @param  {[Number]} x
  //  * @param  {[Number]} y
  //  * @param  {[Number]} z
  //  */
  // moveTo(x, y, z) {
  //   this.xPos = x;
  //   this.yPos = y;
  //   this.zPos = z;
  // }
  // console.log(Object.prototype.toString.call());

  /**
  * [getVolume]
  * @return {[Number]}
  */
  getVolume() {
    return this.width * this.height * this.length;
  }

  /**
   * [setDimensions]
   * @param {[Number]} width
   * @param {[Number]} height
   * @param {[Number]} length
   */
  setDimensions(width, height, length) {
    this.height = height;
    this.width = width;
    this.length = length;
  }

  /**
   * [getRotations]
   * @return {[Array]} [Returns the an array of Objects of the 3 different
   * rotations.]
   */
  getRotations() {
    const dimensions = [this.width, this.height, this.length];
    const permutations = MathHelper.permutateArray(dimensions);
    const rotations = [];
    permutations.forEach((permutation) => {
      const box = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
      box.setDimensions(permutation[0], permutation[1], permutation[2]);
      rotations.push(box);
    });
    return rotations;
  }

  /**
   * [getFittingRotations description]
   * @param  {[Object]} box
   * @return {[Array]}  [Returns an array of the fitting rotations of a box.]
   */
  getFittingRotations(box) {
    const rotations = box.getRotations();
    const fittingRotations = rotations.filter(rotatedBox => this.canFit(rotatedBox));
    return fittingRotations;
  }

  /**
   * [canFitSomeRotations]
   * @param  {[Object]} box
   * @return {[Boolean]} [True if the returned array of getFittingRotations
   * has at least one boc(object).]
   */
  canFitSomeRotations(box) {
    return this.getFittingRotations(box).length > 0;
  }

  /**
   * [canFit checks if a box fits into the dimensions.]
   * @param  {[Object]} box
   * @return {[Boolean]}
   */
  canFit(box) {
    return box.width <= this.width && box.height <= this.height && box.length <= this.length;
  }
}
export default Box;
