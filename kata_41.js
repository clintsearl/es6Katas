// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', function() {
  it('returns key+value for each element', function() {
    const arr = ['a', 'b', 'c'];
    // Added entries in there
    const entriesAsArray = Array.from(arr.entries());
    assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
  });
  it('empty elements contain the value `undefined`', function() {
    const arr = ['one'];
    arr[2] = 'three';
    //matt put in entries.next().value as const firstValue and secondValue
    // I put in the Array.from in there and the[1] which refers to the index position
    const secondValue = Array.from(arr.entries())[1];
    assert.deepEqual(secondValue, [1, void 0]);
  });
  describe('returns an iterable', function() {
    it('has `next()` to iterate', function() {
      const arr = ['one'];
      //entries() to return the interator, next to start going through the array and value to get the value out.
      const value = arr.entries().next().value;
      assert.deepEqual(value, [0, 'one']);
    });
  });
});
