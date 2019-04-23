// 59: Reflect - apply 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.apply` calls a target function', function() {
  it('it is a static method', function() {
    //typeof returns a function because it is a function it had ??? in the ''
    const expectedType = 'function';
    assert.equal(typeof Reflect.apply, expectedType)
  });

  describe('the 1st parameter', () => {
    it('is a callable, e.g. a function', () => {
      //wrote a function to return 42, it commpared the reflect to it...
        let fn = ()=> 42 ;
      assert.equal(Reflect.apply(fn, void 0, []), 42);
    });
    it('passing it a non-callable throws a TypeError', function() {
      //passed in a built in function, or reserved word and that threw the error
      const applyOnUncallable = (Math) =>
        Reflect.apply(Math, void 0, []);
      assert.throws(applyOnUncallable, TypeError);
    });
  });

  describe('the 2nd parameter', () => {
    it('is the scope (or the `this`)', function() {
      class FourtyTwo {
        constructor() { this.value = 42}
        fn() {return this.value}
      }
      //Added the this.value for the new FourtyTwo()
      let instance = new FourtyTwo();
      //I felt like that was getting around the scope so this is another way it works to call it again.
      const fourtyTwo = Reflect.apply(instance.fn, instance, instance);
      assert.deepEqual(fourtyTwo, 42);
    });
  });

  describe('the 3rd parameter', () => {
    it('must be an array (or array-like)', () => {
      //took out the 'string' and put an array. I thought strings were 'array-like' but maybe it's 
      // because they aren't coming back null like it want's
      const thirdParam = [];
      assert.doesNotThrow(() => Reflect.apply(() => void 0, null, thirdParam));
    });
    it('is an array of parameters passed to the call', function() {
      //Added all the parameters for the Reflect.apply
      // Array because we want to make it an array that can do .fill with the the number of places
      //to fill them with 42
      let emptyArrayWithFiveElements = Reflect.apply(Array, void 0, [5]);
      assert.deepEqual(emptyArrayWithFiveElements.fill(42), [42, 42, 42, 42, 42]);
    });
  });

  describe('example usages', () => {
    it('simple function call', () => {
      const fn = () => 'the return value';
      assert.equal(Reflect.apply(fn, void 0, []), 'the return value');
    });
    it('call a function on an array', () => {
      //this is more learning about arrays. .slice pulled off the numbers they were looking for
      const fn = [].slice;
      assert.deepEqual(Reflect.apply(fn, [0, 23, 42], [1]), [23, 42]);
    });
    it('pass in the `this` that the function to call needs', () => {
      class Bob {
        constructor() { this._name = 'Bob'; }
        name() { return this._name; }
      }
      const bob = new Bob();
      // Yeah not sure about this one, the scope was Bob and not bob so I switched it
      const scope = bob;
      assert.equal(Reflect.apply(bob.name, scope, []), 'Bob');
    });
  });
});
