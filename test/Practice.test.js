const { sum, Multiply, Nalla } = require("../src/Practice");

describe("Add test", () => {
  test("Add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("My Arthematic Tests", () => {
  /*
  -- Describe is used to create/bundle test under a single heading or we can say set.
  -- We can also define tests outside describe.
  -- It is just for convention and developer ease to identify different set of tests under same suite.
  **/

  beforeEach(() => {
    console.log("this is test");
  }); // This runs before each test. When we are testing a database we can use it to initialize the DB.

  afterEach(() => {
    console.log("Test ended");
  }); // same as beforeEach it runs after each test so we can use it to destory or revert any changes done to the DB we did earlier while testing it.

  beforeAll(() => {
    console.log("Before Everythin");
  });
  /* 
  -- similar to all before and after function this runs exactly the same but only once and also before all the test 
  -- It's counterpart is `afterAll()` that runs after all the tests are done testing the code.
  */
  test("Multiply 3*4 to equal 12", () => {
    expect(Multiply(3, 4)).toBe(12); // Here `toBe` is a matcher.
  });

  test.todo("Subtract 3-2 to equal 1"); // `todo` is used to mark a test tobe implemented in future, so it neither passes nor fails just shows `✎ todo`.

  test("Nalla function", () => {
    // expect(Nalla()).toBe({}); // the `{}` in `toBe` is different from the one returned by Nalla() since they share different address or reference.
    expect(Nalla()).toEqual({}); // toBe is a referential comparision whereas toEqual only checks the value even if the objects reference from different memory address.
  });
});

/*
-- Note: When we run the code all the describe blocks are executed in top - bottom sequence and all the 
         tests are collected as they are encountered then after all the describe block is done executing
         tests are executed in the sequence they were encountered and collected.
*/
