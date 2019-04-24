// 63: String - `includes()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`string.includes()` determines if a string can be found inside another one', function() {
    describe('finding a single character', function() {
      it('can be done (a character is also a string, in JS)', function() {
        //searched for something that is in the string
        const searchString = 'y';
        assert.equal('xyz'.includes(searchString), true);
      });
      it('reports false if character was not found', function() {
        //comes back false if it isn't found
        const expected = false;
        assert.equal('xyz'.includes('abc'), expected);
      });
    });
    describe('find a string', function() {
      it('that matches exactly', function() {
        //put the ('xyz') on the end to tell it to look for that exactly
        const findSome = findMe => 'xyz'.includes('xyz');
        assert.equal(findSome('xyz'), true);
      });
    });
    describe('search for an empty string, is always true', function() {
      it('in an empty string', function() {
        //was a space in the string
        const emptyString = '';
        assert.equal(''.includes(emptyString), true);
      });
      it('in `abc`', function() {
        //removed the ___ and put the string
        const actual = 'abc'.includes('');
        assert.equal(actual, true);
      });
    });
    describe('special/corner cases', function() {
      it('search for `undefined` in a string fails', function() {
        //searched for undefined like it said
        const findInAbc = (what) => 'abc'.includes(undefined);
        assert.equal(findInAbc(undefined), false);
      });
      it('searches are case-sensitive', function() {
        //they spelled includes wrong
        const findInAbc = (what) => 'abc'.includes(what);
        assert.equal(findInAbc('A'), false);
      });
      it('must NOT be a regular expression', function() {
        //RegEx does not work in there
        const regExp = /ab*c/;
        assert.throws(() => {''.includes(regExp)});
      });
      describe('coerces the searched "thing" into a string', function() {
        it('e.g. from a number', function() {
          //added a 4 in there
          const actual = '1234'.includes(4);
          assert.equal(actual, true);
        });
        it('e.g. from an array', function() {
          // added some , so it will match the string from the array
          const actual = '1,2,3'.includes([1,2,3]);
          assert.equal(actual, true);
        });
        it('e.g. from an object, with a `toString()` method', function() {
          const objWithToString = {toString: ()=>1};
          assert.equal('123'.includes(objWithToString), true);
        });
      });
    });
    describe('takes a position from where to start searching', function() {
      it('does not find `a` after position 1 in `abc`', function() {
        //changed it from 0 to 1
        const position = 1;
        assert.equal('abc'.includes('a', position), false);
      });
      it('even the position gets coerced', function() {
        //changed the param passed in to pos not postision
        const findAtPosition = pos => 'xyz'.includes('x', pos);
        assert.equal(findAtPosition('2'), false);
      });
      describe('invalid positions get converted to 0', function() {
        it('e.g. `undefined`', function() {
          //made the pos undefined
          const findAtPosition = (pos) => 'xyz'.includes('x', pos);
          assert.equal(findAtPosition(undefined), true);
        });
        it('negative numbers', function() {
          const findAtPosition = (pos) => 'xyz'.includes('x', -2);
          assert.equal(findAtPosition(-2), true);
        });
        it('NaN', function() {
          const findAtPosition = (pos) => 'xyz'.includes('x', 0);
          assert.equal(findAtPosition(NaN), true);
        });
      });
    });
  });
  