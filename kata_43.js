// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {
    it('`values()` returns an iterator', function() {
      //emptied the array so index 0 is void and its' done
      const arr = [];
      const iterator = arr.values();
      assert.deepEqual(iterator.next(), {value: void 0, done: true});
    });
    it('use `iterator.next()` to drop first value', function() {
      const arr = ['keys', 'values', 'entries'];
      const iterator = arr.values();
      //did have a ___ put next in so it would give the assert
      iterator.next();
      assert.deepEqual([...iterator], ['values', 'entries']);
    });
    it('empty array contains no values', function() {
      // removed the 1 so it came back as 0 not undefined
      const arr = [...[...[...[...'']]]];
      const values = [...arr.values()];
      assert.equal(values.length, 0);
    });
    it('a sparse array without real values has values though', function() {
      // took out the value and added a , matches assert, two void
      const arr = [, ,];
      const keys = [...arr.values()];
      assert.deepEqual(keys, [void 0, void 0]);
    });
    it('also includes holes in sparse arrays', function() {
      //added , , "c"
      const arr = ['a', ,'c'];
      assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
    });
  });
  