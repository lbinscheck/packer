import Box from './Box';

/**
 * [MediumBox]
 * @extends Box
 */
class MediumBox extends Box {
  /**
   * [constructor Sets the dimensions for the MediumBox.]
   */
  constructor(props) {
    super(props);
    this.width = 22;
    this.height = 26;
    this.length = 2;
  }
}
export default MediumBox;
