function _new () {
  // 创建新对象
  let target = {};
  // 抽离构造函数和函数参数
  let [constructor, ...agrs] = [...arguments];
  // 链接新对象的__proto__属性
  target.__proto__ = constructor.prototype;
  // 改变构造函数中的this为新创建的对象
  let result = constructor.apply(target, agrs);

  // 如果构造函数返回值为对象或者函数  则返回返回值，否则返回新创建的对象
  if (result && typeof result == 'function' || typeof result == 'object') {
    return result;
  }
  
  return target;

}