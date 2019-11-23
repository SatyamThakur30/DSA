// Given a 32-bit signed integer, reverse digits of an integer.
const x = 1534236469;

const rev = x => {
  let result = 0;
  while (x != 0) {
    let ele = x % 10;
    result = result * 10 + ele;
    console.log(result);
    x = parseInt(x / 10);
    console.log(x);
  }
  if (result >= 2147483648 || result <= -2147483648) {
    return 0;
  }

  return result;
};

console.log(rev(x));
