/* eslint-disable no-useless-constructor */
import Box from './Box';

/**
 * [EmptyBox]
 * @extends Box
 */
class EmptyBox extends Box {
  constructor(props) {
    super(props);
  }

  /**
   * [setSideLength]
   * @param {[Number]} length
   */
  setSideLength(length) {
    this.width = length;
    this.height = length;
    this.length = length;
  }

  /**
   * [splitOnXAxis receives the length of x from a box.
   * The length of the EmptyBox is safed in an variable (oldLength) and the
   * length of the EmptyBox object itself is changed to x.
   * this (EmptyBox object) is deep copied and asigned to the variable rest.
   * The length of rest is then asigned the difference of oldLength and x.
   * xPos gets incremented by x.
   * rest (EmptyBox object) is returned.]
   * @param  {[Number]}  x [Length of x.]
   * @return {Object}   [EmptyBox object.]
   */
  splitOnXAxis(x) {
    const oldLength = this.length;
    this.length = x;
    const rest = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    rest.length = oldLength - x;
    rest.xPos += x;
    return rest;
  }

  /**
   * [splitOnYAxis receives the length of y from a box.
   * The length of the EmptyBox is safed in an variable (oldLength) and the
   * length of the EmptyBox object itself is changed to y.
   * this (EmptyBox object) is deep copied and asigned to the variable rest.
   * The length of rest is then asigned the difference of oldLength and y.
   * yPos gets incremented by y.
   * rest (EmptyBox object) is returned.]
   * @param  {[Number]}  y [Length of y.]
   * @return {Object}   [EmptyBox object.]
   */
  splitOnYAxis(y) {
    const oldHeight = this.height;
    this.height = y;
    const rest = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    rest.height = oldHeight - y;
    rest.yPos += y;
    return rest;
  }

  /**
   * [splitOnZAxis receives the length of z from a box.
   * The length of the EmptyBox is safed in an variable (oldLength) and the
   * length of the EmptyBox object itself is changed to z.
   * this (EmptyBox object) is deep copied and asigned to the variable rest.
   * The length of rest is then asigned the difference of oldLength and z.
   * zPos gets incremented by z.
   * rest (EmptyBox object) is returned.]
   * @param  {[Number]}  z [Length of z.]
   * @return {Object}   [EmptyBox object.]
   */
  splitOnZAxis(z) {
    const oldWidth = this.width;
    this.width = z;
    const rest = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    rest.width = oldWidth - z;
    rest.zPos += z;
    return rest;
  }

  /**
   * [putAndSplit calls the splitOn?Axis methods and returns the new
   * EmptyBoxes/spaces in an array.]
   * @param  {[Object]} box [description]
   * @return {[Array]}     [Array of EmptyBoxes.]
   */
  putAndSplit(box) {
    const xSplit = this.splitOnXAxis(box.length);
    const ySplit = this.splitOnYAxis(box.height);
    const zSplit = this.splitOnZAxis(box.width);
    return [xSplit, ySplit, zSplit];
  }
}

export default EmptyBox;
