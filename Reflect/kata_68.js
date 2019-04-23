// 68: Reflect - construct 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.construct` is the `new` operator as a function', function() {
    describe('the function itself', function() {
      it('is static on the `Reflect` object', function() {
        //constructor was spelled with a k
        const name = 'constructor';
        assert.equal(name in Reflect, true);
      });
      it('is of type `function`', function() {
        //expected type is a function it was ???
        const expectedType = 'function';
        assert.equal(typeof Reflect.construct, expectedType)
      });
    });
    
    describe('the 1st parameter is the constructor to be invoked', function() {
      it('fails when given a number as constructor', function() {
        // was a class, gave it a number to fail instead
        let aNumber = 6;
        assert.throws(() => { Reflect.construct(aNumber, []) }, TypeError);
      });
      it('works given a function that can be instanciated', function() {
        //wrote the little function
        let aFunction= ()=>{};
        assert.doesNotThrow(() => { Reflect.construct(aFunction, []) });
      });
      it('works given a class', function() {
        //works with classes wrote class in there
        const aClass = class {};
        assert.doesNotThrow(() => { Reflect.construct(aClass, []) });
      });
    });
  
    describe('the 2nd parameter is a list of arguments, that will be passed to the constructor', function() {
      
      const aClass = class {};
      it('fails when it`s not an array(-like), e.g. a number', function() {
        //example a number. needs to be an array
        let aNumber = 5;
        assert.throws(() => { Reflect.construct(aClass, aNumber) }, TypeError);
      });
      it('works with an array-like object (the `length` property look up should not throw)', function() {
        //I put the whole thing in an array but that doesn't seem to follow what it wants.
        //remove the throw error and get the length of {} or something
        let arrayLike = {get length(){}};
        assert.doesNotThrow(() => { Reflect.construct(aClass, arrayLike) });
      });
      it('works with a real array', function() {
        //a real array it did have a string
        let realArray = [];
        assert.doesNotThrow(() => { Reflect.construct(aClass, realArray) });
      });
    });
  
    describe('in use', function() {
      it('giving it a class it returns an instance of this class', function() {
        class Constructable {}
        //passed in a class and an array because it needs both a function and an argument
        let instance = Reflect.construct(Constructable, []); // use Reflect.construct here!!!
        assert.equal(instance instanceof Constructable, true);
      });
      describe('the list of arguments are passed to the constructor as given', function() {
        class Constructable {
          constructor(...args) { this.args = args; }
        }
        it('if none given, nothing is passed', function() {
          // took the 1 out of the array, it wants nothing passed in
          let instance = Reflect.construct(Constructable,[] );
          assert.deepEqual(instance.args, []);
        });
        it('passing an array, all args of any type are passed', function() {
          const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
          // used the class Constructable from above, and passed in the arguments assigned to show it can
          //be an array of anything
          let instance = Reflect.construct(Constructable, argumentsList);
          assert.deepEqual(instance.args, argumentsList);
        });
      });
    });
  
    describe('the length property', function() {
      it('of `Reflect.construct` is 2', function() {
        // It tells me the length is 2 maybe because that's the number of params in needs or something
        let expected = 2;
        assert.equal(Reflect.construct.length, expected);
      });
    });
  });
  