export class CustomArray<T> {
  length = 0;

  push(item: T) {
    this[this.length] = item;
    this.length += 1;
  }

  /**
   * The at() method takes an integer value and returns the item at that index,
   * allowing for positive and negative integers. Negative integers count back from the last item
   * in the array.
   *
   * This is not to suggest there is anything wrong with using the square bracket notation.
   * For example array[0] would return the first item. However instead of using array.length
   * for latter items; e.g. array[array.length-1] for the last item, you can call array.at(-1).
   * @external https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
   * */
  at(index: number) {
    return index >= 0 ? this[index] : this[this.length + index];
  }

  /**
   * The forEach() method executes a provided function once for each array element.
   * */
  forEach(cb: (element?: T, index?: number, array?: CustomArray<T>) => void) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  }

  /**
   * The concat() method is used to merge two or more arrays. This method does not change the
   * existing arrays, but instead returns a new array.
   * */
  concat(...arrays: CustomArray<unknown>[]) {
    arrays.unshift(this);
    const result = new CustomArray<unknown>();
    arrays.forEach((arr) => {
      arr.forEach((item) => {
        result.push(item);
      });
    });
    return result;
  }
}
