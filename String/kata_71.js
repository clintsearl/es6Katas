// 71: String - `repeat()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.repeat(x)` concatenates `x` copies of `str` and returns it', function() {
  describe('the 1st parameter the count', function() {
    it('if missing, returns an empty string', function() {
      //removed the number so it doesn't repeat
      const what = 'one'.repeat();
      assert.equal(what, '');
    });
    it('when `1`, the string stays the same', function() {
      //added 1 so it repeats once
      const what = 'one'.repeat(1);
      assert.equal(what, 'one');
    });
    it('for `3` the string `x` becomes `xxx`', function() {
      // repeat was ALL CAPS added the 3
      const actual = 'x'.repeat(3);
      assert.equal(actual, 'xxx');
    });
    it('for `0` an empty string is returned', function() {
      //changed it to 0 so it doesn't appear
      const repeatCount = 0;
      assert.equal('shrink'.repeat(repeatCount), '');
    });
    describe('the count is not a number', () => {
      it('such as a string "3", it gets converted to an int', function() {
        //changed it to repeat 3 times
        const repeated = 'three'.repeat('3');
        assert.equal(repeated, 'threethreethree');
      });
      it('a hex looking number as a string "0xA", it gets converted to an int', function() {
        const repeated = 'x'.repeat('0xA');
        assert.equal('xxxxxxxxxx', repeated);
      });
      it('and does not look like a number, it behaves like 0', function() {
        //
        const repeated = 'x'.repeat('');
        assert.equal('', repeated);
      });
    });
  });
  describe('throws an error for', function() {
    it('a count of <0', function() {
      //how am I going to repete negative times
      const belowZero = -1;
      assert.throws(() => { ''.repeat(belowZero); }, RangeError);
    });
    it('a count of +Infinty', function() {
      //yeah I don't know why someone would want to try this
      let infinity = '+Infinity';
      assert.throws(() => { ''.repeat(infinity); }, RangeError);
    });
  });
  describe('accepts everything that can be coerced to a string', function() {
    it('e.g. a boolean', function() {
      //changed it from true to false
      let aBool = false;
      assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
    });
    it('e.g. a number', function() {
      //It can repeat numbers too
      let aNumber= 1;
      assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
    });
  });
  describe('for my own (string) class', function() {
    it('calls `toString()` to make it a string', function() {
      class MyString { toString() { return 'my string'; } }
      // added in the string so it had something to repeat 
      const expectedString = 'my string';
      assert.equal(String(new MyString()).repeat(1), expectedString);
    });
    it('`toString()` is only called once', function() {
      let counter = 1;
      class X {
        toString() {
          return counter++;
        }
      }//turned the expresion into a string
      let repeated = String(new X()).repeat(2);
      assert.equal(repeated, '11');
    });
  });
});
