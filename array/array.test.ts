import { CustomArray } from './array';

describe('Array', () => {
  let arr: CustomArray;
  beforeEach(() => {
    arr = new CustomArray();
  });

  it('should create array', () => {
    arr = new CustomArray();
    expect(arr).toBeInstanceOf(CustomArray);
  });

  it('should push elements', () => {
    arr.push(1);
  });

  xit('should get element at position', () => {});
});
