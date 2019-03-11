// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {
    it('takes a compare function', function() {
      // put an arrow function in there to find item equal to true
      const found = [true].find(item => item === true);
      assert.equal(found, true);
    });
    it('returns the first value found', function() {
      //threw a number in that is > 1 for it to find
      const found = [0, 1, 2].find(item => item > 1);
      assert.equal(found, 2);
    });
    it('returns `undefined` when nothing was found', function() {
      //removed 2 so it couldn't find it and returns undefined
      const found = [1, 4, 3].find(item => item === 2);
      assert.equal(found, void 0);
    });
    it('combined with destructuring complex compares become short', function() {
      const bob = {name: 'Bob'};
      const alice = {name: 'Alice'};
      // set up function to find string 'Alice'
      const found = [bob, alice].find(({name}) =>name === 'Alice');
      assert.equal(found, alice);
    });
  });
  