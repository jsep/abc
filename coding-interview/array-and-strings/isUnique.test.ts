/**
 */

/**
 * Is unique, implement an algorithm to determine if the string has all unique charters.
 * What if you cannot use additional data structures?
 *
 * Depending on the character set we could check the length of the string,
 * if is more thant the character set, then is not unique.
 * i.e. ASCII is 128 charts,
 *
 * Time : O(n)
 * Space: O(n)
 */
function isUnique(str: string) {
  const charts = new Map<string, number>();
  for (const chart of str) {
    if (charts.has(chart)) {
      return false;
    }
    charts.set(chart, 1);
  }
  return true;
}

describe('isUnique', () => {
  it('should be unique', () => {
    expect(isUnique('abc')).toBe(true);
    expect(isUnique('abcsdf')).toBe(true);
  });
  it('should not be unique', () => {
    expect(isUnique('abca')).toBe(false);
    expect(isUnique('abcfsdf')).toBe(false);
  });
});
