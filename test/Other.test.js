/*
-- Different files resembles different `suites` and every suite has their own sets of `tests` under different `describes`
*/

const { Er } = require("../src/Practice");

test("Other Tests", () => {}); // By default a test always passes

describe("Tests that are beyond!!", () => {
  test("Arrays and iterable", () => {
    expect([1, 3, 4, 5, 6]).toContain(1); // checks if the toContian(value) exists in the expect(iterable)
  });

  test("Exceptions", () => {
    expect(() => Er()).toThrow();
  });
});
