// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      //made the let and array
      let [a, b, c] = 'abc';
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    it('missing characters are undefined', () => {
      //added the , so there wasn't a third value for c to equal
      const [a, ,c] = 'ab';
      assert.equal(c, void 0);
    });
    it('unicode character work too', () => {
      //had to remove a space so it was only 2 characters and they line up with the array
      const [space, coffee] = ' ☕';
      assert.equal(coffee, '\u{2615}');
    });
  });
  