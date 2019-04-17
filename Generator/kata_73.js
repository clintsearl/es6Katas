// 73: Generator - `return` inside a generator is special
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`return` in a generator function is special', function() {
    describe('the returned value is an IteratorResult (just like any value returned via `yield`)', function() {
      it('returns an IteratorResult (an object with the properties `value` and `done`)', function() {
        function* generatorFunction() { return 1; }
        const returned = generatorFunction().next();
        //agreed that the return has the same properties, added them in the array below
        const propertyNames = ["value", 'done'];
        assert.deepEqual(Object.keys(returned), propertyNames);
      });
      it('the property `value` is the returned value', function() {
        //assert wanted it to return 23
        function* generatorFunction() { return 23; }
        const {value} = generatorFunction().next();
        assert.equal(value, 23);
      });
      it('the property `done` is true', function() {
        //changed it from yield to return with yield it would have to be iterated with next() one more time.
        function* generatorFunction() {return 42; }
        let {done} = generatorFunction().next();
        assert.equal(done, true);
      });
      it('NOTE: `yield` does not return `done=true` but `done=false`!', function() {
        //proving my previous comment
        function* generatorFunction() { yield 1; }
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: 1, done: false});
      });
      it('a missing `return` returns `{value: undefined, done: true}`', function() {
        //if you don't return or yield anything the value is undefined or void. I removed the yield.
        function* generatorFunction() {; }	
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: void 0, done: true});
      });
    });
  
    describe('mixing `return` and `yield`', function() {
      function* generatorFunctionWithYieldAndReturn() {
        yield 1;
        // added the return 2 showing it can use both
        return 2
        //adding yield 2 passes the next assert
        yield 2
        
      }
      it('is possible', function() {
        const iterator = generatorFunctionWithYieldAndReturn();
        const values = [
          iterator.next(),
          iterator.next()
        ];
        assert.deepEqual(values, [{value: 1, done: false}, {value: 2, done: true}]);
      });
      it('the mix behaves different to two `yield`s', function() {
        const iterator = generatorFunctionWithYieldAndReturn();
        //see the above function switching the return and yield passes each one.
        const values = [1, 2];
        assert.deepEqual(Array.from(iterator), values);
      });
      it('two `yield`s returning values', function() {
        // put two yields in there
        function* generatorFunctionWithTwoYields() {
          yield 1
          yield 2
        }
        assert.deepEqual(Array.from(generatorFunctionWithTwoYields()), [1, 2]);
      });
      it('return a yielded value by "chaining" `return` and `yield`', function() {
        function* generatorFunction() {
          // added the yield 1 and changed return to 2. return has to come last
          yield 1
          return 2;
        }
        const iterator = generatorFunction();
        const values = [
          iterator.next().value,
          iterator.next(2).value
        ];
        assert.deepEqual(values, [1, 2]);
      });
    });
  });
  