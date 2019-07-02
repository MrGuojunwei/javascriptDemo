// 在计算机科学中，柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
function carry() {
  let [fn, ...agrs] = [...arguments];
  if (agrs.length < fn.length) {
    return (...arguments) => carry(fn, ...agrs, ...arguments);
  } else {
    return fn(...agrs);
  }
}

function add(a, b, c, d) {
  return a + b + c + d;
}

let addCarry = carry(add, 1, 2);

console.log(addCarry(3, 4)); // 10
console.log(addCarry(3)(4)); // 10