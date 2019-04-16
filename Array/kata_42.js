// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {
    it('`keys()` returns an iterator', function() {
      //Removed the ,'b' so that the .next() would be 0 and then done and void
      const arr = ['a'];
      const iterator = arr.keys()
      assert.deepEqual(iterator.next(), {value: 0, done: false});
      assert.deepEqual(iterator.next(), {value: void 0, done: true});
    });
    it('gets all keys', function() {
      //added 'c' so there was one more key ing the array
      const arr = ['a', 'b', 'c'];
      const keys = Array.from(arr.keys());
      assert.deepEqual(keys, [0, 1, 2]);
    });
    it('empty array contains no keys', function() {
      //emptyed the array => no keys
      const arr = [];
      const keys = [...arr.keys()];
      assert.equal(keys.length, 0);
    });
    it('a sparse array without real values has keys though', function() {
      const arr = [,,];
      // added keys function into below, has positions, keys but no values
      const keys = [...arr.keys()];
      assert.deepEqual(keys, [0, 1]);
    });
    it('also includes holes in sparse arrays', function() {
      const arr = ['a', , 'c'];
      // made the function just like the ones above, [... ()] 
      const keys = [...arr.keys()];
      assert.deepEqual(keys, [0, 1, 2]);
    });
  });
  