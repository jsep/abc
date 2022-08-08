/*
* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
* */


import { twoSum } from './one';

describe("Two Sum", () => {

  it("return false on empty array", () => {
    expect(twoSum([], 0)).toBeFalsy();
  })

  it("find sum", () => {
    expect(twoSum([10, 15, 3, 7], 17)).toBeTruthy();
    expect(twoSum([10, -15, 3, 7], -8)).toBeTruthy();
    expect(twoSum([10, 15, 3, 7, 19, 6, 48], 54)).toBeTruthy();
    expect(twoSum([10, 15, 3, 7], 10)).toBeTruthy();
  })

  it("does not find sum", () => {
    expect(twoSum([10, 15, 3, 7], -17)).toBeFalsy();
  })
})
