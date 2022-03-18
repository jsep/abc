import { CustomArray } from './array';

describe('Array', () => {
  let arr: CustomArray<number>;
  beforeEach(() => {
    arr = new CustomArray();
  });

  it('should create array', () => {
    arr = new CustomArray();
    expect(arr).toBeInstanceOf(CustomArray);
  });

  it('should push elements', () => {
    arr.push(1);
    arr.push(2);
    expect(arr.length).toEqual(2);
  });

  describe('at()', () => {
    beforeEach(() => {
      arr.push(1);
      arr.push(2);
    });
    it('should get element at index', () => {
      expect(arr.at(0)).toEqual(1);
      expect(arr.at(1)).toEqual(2);
      expect(arr.at(2)).toEqual(undefined);
    });
    it('should get element with negative index', () => {
      expect(arr.at(-1)).toEqual(2);
      expect(arr.at(-2)).toEqual(1);
      expect(arr.at(-3)).toEqual(undefined);
    });
  });
});
