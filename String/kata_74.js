// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`', function() {
    const s = 'el fin';
    // ALL of them refer to this string
    describe('the 1st parameter the string to search for', function() {
      it('can be a character', function() {
        //made this so it was actually the function .endsWith()
        const doesEndWith = s.endsWith('n');
        assert.equal(doesEndWith, true);
      });
      it('can be a string', function() {
        //changed to true because that's what it's ending with
        const expected = true;
        assert.equal(s.endsWith('fin'), expected);
      });
      it('can contain unicode characters', function() {
        //stuck the sign on the end
        const nuclear = 'NO ☢ Oh NO! ☢';
        assert.equal(nuclear.endsWith('☢'), true);
      });
      it('a regular expression throws a TypeError', function() {
        // removed the '' for the regexp
        const aRegExp = /the/;
        assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
      });
    });
    describe('the 2nd parameter, the position where the search ends (as if the string was only that long)', function() {
      it('find "el" at a substring of the length 2', function() {
        //changed it to 2, finds the string and stops at that point
        
        //the endsWith() doesn't use 0 to start with the positions it starts 1 2 3 4
        const endPos = 2;
        assert.equal(s.endsWith('el', endPos), true);
      });
      it('`undefined` uses the entire string', function() {
        //defined it as undefined leaving blank doesn't work
        const _undefined_ = undefined;
        assert.equal(s.endsWith('fin', _undefined_), true);
      });
      it('the parameter gets coerced to an integer (e.g. "5" becomes 5)', function() {
        //changed it from 'five' to '5'
        const position = '5';
        assert.equal(s.endsWith('fi', position), true);
      });
      describe('value less than 0', function() {
        it('returns `true`, when searching for an empty string', function() {
                  // searching for an empty string
          const emptyString = '';
          assert.equal('1'.endsWith(emptyString, -1), true);
        });
        it('return `false`, when searching for a non-empty string', function() {
          // searching for an  NOT empty string has a space
          const notEmpty = ' ';
          assert.equal('1'.endsWith(notEmpty, -1), false);
        });
      });
    });
    describe('this functionality can be used on non-strings too', function() {
      it('e.g. a boolean', function() {
        //changed it to false it's looking to see if it ends with lse
        // let aBool = 'dasfalse' works too
        let aBool = false
        assert.equal(String.prototype.endsWith.call(aBool, 'lse'), true);
      });
      it('e.g. a number', function() {
        //its looking for 84 in 1984
        let aNumber = 84;
        assert.equal(String.prototype.endsWith.call(aNumber + 1900, 84), true);
      });
      it('also using the position works', function() {
        //
        const position = '3';
        assert.equal(String.prototype.endsWith.call(1994, '99', position), true);
      });
    });
  });
  