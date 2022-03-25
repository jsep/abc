import { CustomArray } from './array';

describe('Array', () => {
  let arr: CustomArray<number>;
  beforeEach(() => {
    arr = new CustomArray();
  });

  it('should create array', () => {
    expect(arr).toBeInstanceOf(CustomArray);
  });

  it('should push elements', () => {
    arr.push(1);
    arr.push(2);
    expect(arr.length).toEqual(2);
  });

  describe('at()', () => {
    beforeEach(() => {
      arr = arrayWithItems(2);
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

  describe('forEach()', () => {
    it(' should call each time for each item', () => {
      arr = arrayWithItems(3);
      const cb = jest.fn();
      arr.forEach(cb);

      expect(cb).toHaveBeenCalledTimes(arr.length);
      expect(cb).toBeCalledWith(1, 0, arr);
      expect(cb).toBeCalledWith(2, 1, arr);
      expect(cb).toBeCalledWith(3, 2, arr);
    });
  });
});

// Utils functions

function arrayWithItems(num: number): CustomArray<number> {
  let i = 1;
  const arr = new CustomArray<number>();
  while (i <= num) {
    arr.push(i);
    i++;
  }
  return arr;
}
