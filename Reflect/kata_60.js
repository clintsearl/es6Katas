// 60: Reflect - getPrototypeOf 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.getPrototypeOf` returns the prototype', function() {
    it('works like `Object.getPrototypeOf`', function() {
      const viaObject = Object.getPrototypeOf({});
      //added the empty {} so it was looking at an object
      const viaReflect = Reflect.getPrototypeOf({});
      assert.strictEqual(viaObject, viaReflect);
    });
    it('throws a TypeError for a non-object', function() {
      //removed the {} so it's a non object
      let fn = () => { Reflect.getPrototypeOf() };
      assert.throws(fn, TypeError);
    });
    it('a `new Set()` has a prototype', function() {
      //made a new Set()
      const aSet = new Set();
      assert.equal(Reflect.getPrototypeOf(aSet), Set.prototype);
    });
    it('for a class, it is `Klass.prototype`', function() {
      class Klass {}
      //modeled after the previous assert, it's just brought out in the asignment of proto
      const proto = Reflect.getPrototypeOf(new Klass())
      assert.equal(proto, Klass.prototype);
    });
    it('works also for an old-style "class"', function() {
      function Klass() {}
      //Same as the previous one. 
      const proto = Reflect.getPrototypeOf(new Klass());
      assert.equal(proto, Klass.prototype);
    });
    it('an array has a prototype too', function() {
      let arr = [];
      // used same idea as the others using new, and reflect.getPrototypeOf()
      const expectedProto = Reflect.getPrototypeOf(new Array);
      assert.equal(Reflect.getPrototypeOf(arr), expectedProto);
    });
  
    // TODO
    // it('getting the prototype of an "exotic namespace object" returns `null`', function() {
    //   http://www.ecma-international.org/ecma-262/6.0/#sec-module-namespace-exotic-objects-getprototypeof
    //   Don't know how to write a test for this yet, without creating a dep in tddbin hardcoded
    //   PRs welcome
    //   assert.equal(Reflect.getPrototypeOf(namespace exotic object), null);
    // });
  });