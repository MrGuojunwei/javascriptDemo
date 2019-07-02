Function.prototype.call = function () {
  let result;
  let [thisArg, ...args] = [...arguments];

  if (typeof this !== 'function') {
    throw new Error('not Function');
  }

  if (!thisArg) {
    thisArg = typeof window == 'undefined' ? global : window;
  }

  thisArg.fn = this;

  result = thisArg.fn(...args);

  delete thisArg.fn;
  return result;
}

Function.prototype.apply = function (thisArg, args) {
  let result;

  if (typeof this !== 'function') {
    throw new Error('not Function');
  }

  if (!thisArg) {
    thisArg = typeof window == 'undefined' ? global : window;
  }

  thisArg.fn = this;

  if (args) {
    result = thisArg.fn(args);
  } else {
    result = thisArg.fn()
  }

  delete thisArg.fn;

  return result;
}

Function.prototype.bind = function () {
  let [thisArg, ...args] = [...arguments];
  let _this = this;

  if (typeof this !== 'function') {
    throw new Error('not Function');
  }

  if (!thisArg) {
    thisArg = typeof window == 'undefined' ? global : window;
  }

  const bound = function () {
    if (this instanceof bound) {
      _this.call(this, ...args.concat(Array.prototype.slice.apply(arguments)))
    } else {
      _this.call(thisArg, ...args.concat(Array.prototype.slice.apply(arguments)));
    }
  }

  // 维护原型关系
  if (this.prototype) {
    bound.prototype = this.prototype;
  }

  return bound;
}
