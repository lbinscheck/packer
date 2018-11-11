/**
 * [MathHelper description]
 */
class MathHelper {
  /**
 * [permutateArray]
 * @param  {[Array]} [Inserted array.]
 * @return {[Array]} [All possible permutations of the inserted array.]
 */
  static permutateArray(inputArray) {
    const result = [];
    /**
     * [permute]
     * @param  {[Array]} array
     * @param  {Array}  [mutations=[]]
     */
    const permute = (array, mutations = []) => {
      if (array.length === 0) {
        result.push(mutations);
      } else {
        for (let i = 0; i < array.length; i += 1) {
          const current = array.slice();
          const next = current.splice(i, 1);
          permute(current.slice(), mutations.concat(next));
        }
      }
    };
    permute(inputArray);
    return result;
  }
}

export default MathHelper;
