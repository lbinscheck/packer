import EmptyBox from './EmptyBox';
import SmallBox from './SmallBox';
import MediumBox from './MediumBox';
import LargeBox from './LargeBox';
import BoxChecker from './helper/BoxChecker';


/**
 * [Packer description]
 */
class Packer {
  /**
   * [constructor initialises an new Instance of the different boxes
   * according to their count, which is received as an argument.
   * The intances are then pushed into an array.]
   * @param {[Number]} smallCount         [Number of small Boxes]
   * @param {[Number]} mediumCount        [Number of medium Boxes]
   * @param {[Number]} largeCount         [Number of large Boxes]
   * @param {Number} [boxSideLength=30]
   */
  constructor(smallCount, mediumCount, largeCount, boxSideLength = 30) {
    this.boxSideLength = boxSideLength;
    this.smallBoxes = [];
    this.mediumBoxes = [];
    this.largeBoxes = [];
    this.emptySpaces = [];
    this.packedBoxesContent = [];
    this.packedBoxes = 0;
    for (let i = 0; i < smallCount; i += 1) {
      this.smallBoxes.push(new SmallBox());
    }
    for (let i = 0; i < mediumCount; i += 1) {
      this.mediumBoxes.push(new MediumBox());
    }
    for (let i = 0; i < largeCount; i += 1) {
      this.largeBoxes.push(new LargeBox());
    }
  }

  /**
   * [packBoxes The array(emptySpaces), which holds the current EmptyBox
   * objects, is asigned to a new variable.
   * Inside the for loop: the array is sorted and the last element with the
   * biggest volume is popped of and asigned to a new variable. If the current
   * box can fit into largestEmptySpace the last element is removed from boxes
   * array, which holds the box objects.
   * On the largestEmptySpace variable the method putAndSplit is called, which
   * returns an array of new EmptyBoxes, and the returned array is asigned the
   * variable newEmptySpaces. largestEmptySpace has now the dimensions of the
   * box. According to that the object can be used to fill the
   * packedBoxesContent array.
   * Afterwards, the newEmptySpaces are merged with the already existing empty
   * spaces(EmptyBox). This array (empty) is then sorted and emptySpaces with
   * zero volume are removed.
   * Outside the for loop the empty spaces array (empty) is asigned to the
   * global array emptySpaces.
   * If the box cannot fit, the loop is stopped.]
   * @param  {[Array]} boxes [Holds box objects.]
   */
  packBoxes(boxes) {
    let empty = this.emptySpaces;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, box] of Object.entries(boxes)) {
      BoxChecker.sortBoxesByVolume(empty);
      const largestEmptySpace = empty.pop();
      if (largestEmptySpace.canFitSomeRotations(box)) {
        boxes.pop();
        console.log(box, key, ' fits into ', largestEmptySpace);
        const newEmptySpaces = largestEmptySpace.putAndSplit(box);
        this.packedBoxesContent[this.packedBoxes] = largestEmptySpace;
        empty = empty.concat(newEmptySpaces);
        empty = BoxChecker.sortBoxesByVolume(empty);
        empty = BoxChecker.removeBoxesWithZeroVolume(empty);
        console.log('new empty spaces ', empty, '\n');
      } else {
        console.log(`cannot fit... ${boxes.length} left`);
        break;
      }
    }
    this.emptySpaces = empty;
  }

  /**
   * [packAllPackages The method runs as long as there are boxes left.
   * The number of packed boxes gets incremented, a new EmptyBox is
   * declared and its side length is set. The EmptyBox is then inserted to the
   * global emptySpaces array.
   * Afterwards, large boxes are packed first with the packBoxes method. Inside
   * the method the number of boxes is decremented. When the method stops
   * running the same method will be called with medium boxes as a parameter.
   * If the remaining number of boxes is still bigger than zero, the while loop
   * runs again.]
   * @return {[Number]}
   */
  packAllPackages() {
    while (this.smallBoxes.length + this.mediumBoxes.length + this.largeBoxes.length > 0) {
      this.packedBoxes += 1;
      const emptyBox = new EmptyBox();
      emptyBox.setSideLength(this.boxSideLength);
      this.emptySpaces = [emptyBox];

      this.packBoxes(this.largeBoxes);
      this.packBoxes(this.mediumBoxes);
      this.packBoxes(this.smallBoxes);
    }
    console.log(this.packedBoxes);
    return this.packedBoxes;
  }
}
export default Packer;
