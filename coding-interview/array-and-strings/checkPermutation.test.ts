/**
 * Check Permutation: Given two strings, write a method to decide if one is the permutation of the other:
 *
 * Constraints:
 *
 * What is the chartset? unicode, ASCII, ASCII extended?
 * Is case-sensitive? God == dog?
 * Does whitespace count? "god  " == "dog"
 *
 *
 * Idea 1:
 * If the length are different, then they are not permutations
 * sort a and b
 * check if they are the same
 * Time : O(n log n )
 * Space: O(1)
 *
 * Idea 2:
 * If the length are different, then they are not permutations
 * Use a hash table to count each chart in a
 * Then for every character in b, rest in the hash table
 *  if the count is less than 0 then they are not permutations
 * Time : O(n)
 * Space: O(1)
 */
function checkPermutations1(a: string, b: string) {
  a = a.split('').sort().join();
  b = b.split('').sort().join();
  return a === b;
}
function checkPermutations2(a: string, b: string) {
  const count = [];

  for (const c of a) {
    const index = c.charCodeAt(0);
    count[index] = (count[index] || 0) + 1;
  }

  for (const c of b) {
    const index = c.charCodeAt(0);
    count[index] = (count[index] || 0) - 1;
    if (count[index] < 0) {
      return false;
    }
  }
  return true;
}

describe('checkPermutations', () => {
  it('should be permutations', () => {
    expect(checkPermutations1('abc', 'bca')).toBe(true);
    expect(checkPermutations2('abc', 'bca')).toBe(true);

    expect(checkPermutations1('dog', 'god')).toBe(true);
    expect(checkPermutations2('dog', 'god')).toBe(true);
  });
  it('should not be unique', () => {
    expect(checkPermutations1('abca', 'afd')).toBe(false);
    expect(checkPermutations1('abcfsdf', 'dfaq')).toBe(false);

    expect(checkPermutations2('abca', 'afd')).toBe(false);
    expect(checkPermutations2('abcfsdf', 'dfaq')).toBe(false);
  });
});
