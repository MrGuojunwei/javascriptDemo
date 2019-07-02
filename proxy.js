let a = new Proxy({}, {
  i: 1,
  get: function () {
    return () => this.i++
  }
})

console.log(a == 1 && a == 2 && a == 3); // true