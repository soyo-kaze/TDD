function sum(a, b) {
  return a + b;
}

function Multiply(a, b) {
  return a * b;
}

function Nalla() {
  return {};
}

function Er() {
  try {
    let obj = { name: "sameer", age: 23 };
    obj.map((a) => console.log(a));
  } catch (e) {
    throw e;
  }
}
module.exports = { sum, Multiply, Nalla, Er };
