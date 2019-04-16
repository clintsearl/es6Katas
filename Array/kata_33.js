// 33: array - `Array.prototype.findIndex` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {
  it('takes a compare function, returns the index where it returned true', function() {
    //Threw a function in so it's looking for true
    const foundAt = [false, true].findIndex(item => item=== true);
    assert.equal(foundAt, 1);
  });
  it('returns the first position it was found at', function() {
    const foundAt = [0, 1, 1, 1].findIndex(item => item === 1);
    assert.equal(foundAt, 1);
  });
  it('returns `-1` when nothing was found', function() {
    //Changed the 1 to 4 that it searchs for so it wasn't found
    const foundAt = [1, 2, 3].findIndex(item => item > 4);
    assert.equal(foundAt, -1);
  });
  it('the findIndex callback gets the item, index and array as arguments', function() {
    const three = 3;
    const containsThree = arr => arr.indexOf(three) > -1;
    //Threw item in there so it's passing throught too
    function theSecondThree(item, index, arr) {
      const preceedingItems = arr.slice(0, index);
      return containsThree(preceedingItems);
    }
    const foundAt = [1, 1, 2, 3, 3, 3].findIndex(theSecondThree);
    assert.equal(foundAt, 4);
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const foundAt = [bob, alice].findIndex((
    //got rid of the :l next to the {length} 
      {name:{length}}) => length > 3);
    assert.equal(foundAt, 1);
  });
});
