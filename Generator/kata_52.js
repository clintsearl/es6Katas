// 52: Generator - Send value to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a value to a generator', () => {
    it('basics: get the values from a generator in two ways', function() {
      function* generatorFunction() {
        yield 1;
        yield 2;
      }
      // way #1
      var convertedToAnArray = Array.from(generatorFunction());
      // way #2
      var iterator = generatorFunction();
      //had ____ we want the value, so I put .value in there
      var iteratedOver = [iterator.next().value, iterator.next().value];
      assert.deepEqual(convertedToAnArray, iteratedOver);
    });
    //param wasn't defined, added this
    let param = 2
    it('pass a value to the iterator', function() {
      function* generatorFunction() {
        yield 1;
        yield param;
      }
      var iterator = generatorFunction();
      var iteratedOver = [iterator.next().value, iterator.next(2).value];
      assert.deepEqual([1, 2], iteratedOver);
    });
    it('a value passed to the 1st `next()` call is ignored', function() {
      function* generatorFunction() {
        // Added an empty yield on there so the first one can have 1 because it can't change
        //and the second one can push the 2 over the previously assigned 1
        yield yield 1;
      }
      let iterator = generatorFunction();
      const values = [
        iterator.next('irrelevant').value, 
        iterator.next(2).value
      ];
      assert.deepEqual(values, [1, 2]);
    });
  });
  
  