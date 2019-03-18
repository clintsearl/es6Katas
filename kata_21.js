// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Spread syntax with strings', () => {
    it('expands each character of a string by prefixing it with `...`', function() {
      //switched it from ...ab to ...ba so it matched what they wanted it to
      const [b, a] = [...'ba'];
      assert.equal(a, 'a');
      assert.equal(b, 'b');
    });
    it('expands any kind of character', function() {
      // put in the code for the sign
      const arr = [...'1 \u2622 2'];
      assert.deepEqual(arr, ['1', ' ', '☢', ' ', '2']);
    });
    it('works anywhere inside an array (must not be last)', function() {
      // threw the ... in there so it would pull them out
      const letters = ['a', ...'bcd', 'e', 'f'];
      assert.equal(letters.length, 6);
    });
    it('don`t confuse with the rest operator', function() {
      // moved them to where the string was longer.
      const [...rest] = [...'1234','5'];
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
    it('can also be used as function parameter', function() {
      //... threw it in to the function
      const max = Math.max(...'12345');
      assert.deepEqual(max, 5);
    });
  });
  