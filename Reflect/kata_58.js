// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
    describe('Reflect is special, it is different to e.g. `Object`', function() {
      it('it`s of type object', function() {
        //changed this to an object becaues that's what it is.
        const expectedType = 'object';
        assert.equal(typeof Reflect, expectedType);
      });
      it('it can not be instantiated (`new Reflect()`)', function() {
        //this doesn't create a new one... assert proves TypeError
        const tryToConstruct = () => { new Reflect(); };
        assert.throws(tryToConstruct, TypeError);
      });
      it('has no `call` method (as opposed to e.g. Object)', function() {
        //reflect cannot be called like a finction or an object so it doesn't have a call
        const expected = "undefined";
        assert.equal(typeof Reflect.call, expected);
      });
    });
    
    describe('some `Reflect` usages', function() {
      it('`Reflect.construct()` is like `new ClassName`', function() {
        //made a new class called Class and it is similar to reflect  in that they are consturctors
        let Class = class {}
        assert.equal(Reflect.construct(Class, []) instanceof Class, true);
      });
      it('`Reflect.get()` returns a property`s value', function() {
          //change the object so it was what it's looking for, 
        let obj = {x: 23};
        assert.equal(Reflect.get(obj, 'x'), 23);
      });
      it('`Reflect.has()` is like `in` just as a function', function() {
          //added the key and value into the object so it can see if it's there it looks for the key:
        let obj = {x: 'y'};
        assert.equal(Reflect.has(obj, 'x'), true);
      });
    });
  });