import Box from './Box';

/**
 * [SmallBox]
 * @extends Box
 */
class SmallBox extends Box {
  /**
   * [constructor Sets the dimensions for the SmallBox.]
   */
  constructor(props) {
    super(props);
    this.width = 16;
    this.height = 23;
    this.length = 2;
  }
}

export default SmallBox;
