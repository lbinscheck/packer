import Box from './Box';

/**
 * [LargeBox]
 * @extends Box
 */
class LargeBox extends Box {
  /**
   * [constructor Sets the dimensions for the LargeBox.]
   */
  constructor(props) {
    super(props);
    this.width = 14;
    this.height = 26;
    this.length = 10;
  }
}

export default LargeBox;
