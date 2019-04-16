// 37: iterator/iterable - array. 
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The native array is a built-in iterable object', function() {
    const arr = ['a', 'B', 'see'];
    describe('the iterator', function() {
      it('an array has an iterator, which is a function', function() {
        const iterator = arr[Symbol.iterator];
        const theType = typeof iterator;
        // changed from iterator to function because that's what it is
        const expected = 'function';
        assert.equal(theType, expected);
      });
      it('can be looped with `for-of`, which expects an iterable', function() {
        //changed teh 0 to a 6... Not sure why... from the assert error it said -3!==3
        //when I put 3 it said 0!==3  so 6 made it to 3
        //The arr is looking at the arr in the top! 
        let count = 6;
        for (let value of arr) {
          count--;
        }
        assert.equal(count, arr.length);
      });
    });
    describe('the iterator protocol', function() {
      it('calling `next()` on an iterator returns an object according to the iterator protocol', function() {
        const iterator = arr[Symbol.iterator]();
        // added next in there so it will iterate through the thing
        const firstItem = iterator.next();
        assert.deepEqual(firstItem, {done: false, value: 'a'});
      });
      it('the after-last element has done=true', function() {
        const arr = [];
        const iterator = arr[Symbol.iterator]();
        //Put () after the next
        const afterLast = iterator.next();
        assert.deepEqual(afterLast, {done: true, value: void 0});
      });
    });
  });
  
  