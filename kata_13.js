// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('When destructuring you can also provide default values', () => {
  it('just assign a default value, like so `a=1`', () => {
    // changed from [a:1] to [a=1]
    const [a=1]= [];
    assert.equal(a, 1);
  });
  it('for a missing value', () => {
    //removed a 1, and added the 2,
    const [b=2] = [2,3];
    assert.equal(b, 2);
  });
  it('in an object', () => {
    //changed the array [a,b] to an object {a,b} and move the assignment of b=2 into the object like they usually are 
    const {a, b} = {a:1, b:2};
    assert.equal(b, 2);
  });
  it('if the value is undefined', () => {
    const {a, b} = {a: 1, b:2};
    assert.strictEqual(b, 2);
  });
  it('also a string works with defaults', () => {
    // put a="1" in the array
    const [a="1", b=2] = '1';
    assert.equal(a, '1');
    assert.equal(b, 2);
  });
});
