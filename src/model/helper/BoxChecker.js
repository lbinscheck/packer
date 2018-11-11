/**
 * [BoxChecker description]
 */
class BoxChecker {
  /**
   * [sortBoxesByVolume]
   * @param  {[Array]} boxes [description]
   * @return {[Array]} [Sorted descending.]
   */
  static sortBoxesByVolume(boxes) {
    return boxes.sort((boxA, boxB) => boxA.getVolume() - boxB.getVolume());
  }

  /**
   * [removeBoxesWithZeroVolume]
   * @param  {[Array]} boxes
   * @return {[Array]} [without empty volumes]
   */
  static removeBoxesWithZeroVolume(boxes) {
    return boxes.filter(box => box.getVolume() > 0);
  }
}
export default BoxChecker;
