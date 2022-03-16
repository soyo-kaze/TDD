const { sum, Multiply } = require("../src/Practice");

describe("Add test", () => {
  test("Add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("My Arthematic Tests", () => {
  /*
  -- Describe is used to create/bundle test under a single heading or we can say set.
  -- We can also define tests outside describe.
  -- It is just for convention and developer ease to identify different set of tests under same suite
  **/

  test("Multiply 3*4 to equal 12", () => {
    expect(Multiply(3, 4)).toBe(12); // Here toBe is a matcher
  });

  test.todo("Subtract 3-2 to equal 1");
});
