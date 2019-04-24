// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {
    const s = 'the string s';
    describe('the 1st parameter, the string to search for', function() {
      it('can be just a character', function() {
        //removed _w and made it the actual name of the function
        const actual = s.startsWith('t');
        assert.equal(actual, true);
      });
      it('can be a string', function() {
        // its true
        const expected = true;
        assert.equal(s.startsWith('the'), expected);
      });
      it('can contain unicode characters', function() {
        //got rid of the first NO so it starts with it.
        const nuclear = '\u2622 NO';
        assert.equal(nuclear.startsWith('☢'), true);
      });
      it('a regular expression throws a TypeError', function() {
        //got to figure out regex more, most reasults explain how to use regex for testing and such
        const aRegExp = /abc/i;
        assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
      });
    });
    describe('the 2nd parameter, the position where to start searching from', function() {
      it('e.g. find "str" at position 4', function() {
        //changed the position to 4 instead of 3
        const position = 4;
        assert.equal(s.startsWith('str', position), true);
      });
      it('for `undefined` is the same as 0', function() {
        // removed it so undefined is only a string
        const _undefined_ = '';
        assert.equal(s.startsWith('the', _undefined_), true);
      });
      it('the parameter gets converted to an int', function() {
        // if it's a number as a string it will convert it changed from 'four'
        const position = '4';
        assert.equal(s.startsWith('str', position), true);
      });
      it('a value larger than the string`s length, returns false', function() {
        //changed from true to false it's longer than the string
        const expected =false;
        assert.equal(s.startsWith(' ', s.length + 1), expected);
      });
    });
    describe('this functionality can be used on non-strings too', function() {
      it('e.g. a boolean', function() {
        //assigned the aBool to false was blank. 
        let aBool= false;
        assert.equal(String.prototype.startsWith.call(aBool, 'false'), true);
      });
      it('e.g. a number', function() {
        //Made the 19 a string
        let aNumber= '19';
        assert.equal(String.prototype.startsWith.call(aNumber + 84, '1984'), true);
      });
      it('also using the position works', function() {
        //changed to the position where 99 is
        const position = 1;
        assert.equal(String.prototype.startsWith.call(1994, '99', position), true);
      });
    });
  });
  