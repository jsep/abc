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
      arr = range({ start: 1, end: 2 });
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
      arr = range({ start: 1, end: 3 });
      const cb = jest.fn();
      arr.forEach(cb);

      expect(cb).toHaveBeenCalledTimes(arr.length);
      expect(cb).toBeCalledWith(1, 0, arr);
      expect(cb).toBeCalledWith(2, 1, arr);
      expect(cb).toBeCalledWith(3, 2, arr);
    });
  });

  describe('contact()', () => {
    beforeEach(() => {
      arr = range({ start: 1, end: 4 });
    });

    it('should concat arrays', () => {
      const arr2 = range({ start: 5, end: 10 });
      const newArray = arr.concat(arr2);
      expect(newArray).toHaveLength(arr.length + arr2.length);
      expect(JSON.stringify(newArray)).toEqual('');
    });
  });
});

// Utils functions
function range({
  end,
  start = 0,
  step = 1,
}: {
  start?: number;
  end: number;
  step?: number;
}): CustomArray<number> {
  const arr = new CustomArray<number>();
  for (let j = start; j <= end; j += step) {
    arr.push(j);
  }
  return arr;
}
