const { mergeCustomerData } = require("../src/mergeCustomerData");

describe("mergeCustomerData", () => {
  // ---------- Normal cases ----------
  test("normal: merges two equal-size lists", () => {
    const a = [101, 104, 107, 0, 0, 0];
    const b = [102, 105, 108];
    expect(mergeCustomerData(a, 3, b, 3)).toEqual([101, 102, 104, 105, 107, 108]);
  });

  test("normal: customerData2 values all smaller", () => {
    const a = [10, 20, 30, 0, 0];
    const b = [1, 2];
    expect(mergeCustomerData(a, 3, b, 2)).toEqual([1, 2, 10, 20, 30]);
  });

  test("normal: customerData2 values all larger", () => {
    const a = [1, 2, 3, 0, 0];
    const b = [10, 11];
    expect(mergeCustomerData(a, 3, b, 2)).toEqual([1, 2, 3, 10, 11]);
  });

  // ---------- Edge cases ----------
  test("edge: n = 0 (second array empty)", () => {
    const a = [103];
    const b = [];
    expect(mergeCustomerData(a, 1, b, 0)).toEqual([103]);
  });

  test("edge: m = 0 (first has no valid items)", () => {
    const a = [0, 0, 0];
    const b = [5, 6, 7];
    expect(mergeCustomerData(a, 0, b, 3)).toEqual([5, 6, 7]);
  });

  test("edge: handles duplicates", () => {
    const a = [2, 2, 3, 0, 0, 0];
    const b = [2, 2, 4];
    expect(mergeCustomerData(a, 3, b, 3)).toEqual([2, 2, 2, 2, 3, 4]);
  });
});
