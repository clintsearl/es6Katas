// 34: symbol - basics
// A symbol is a unique and immutable data type and may be used as an identifier for object properties
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Symbol', function() {
    it('`Symbol` lives in the global scope', function(){
      //got rit of someNameSpace infront of Symbol
      const expected = Symbol;
      assert.equal(Symbol, expected);
    });
    it('every `Symbol()` is unique', function(){
      const sym1 = Symbol();
      //changed it so they are both equaling Symbol() so they are unique, one can't be reasigned
      const sym2 = Symbol();
      assert.notEqual(sym1, sym2);
    });
    it('every `Symbol()` is unique, also with the same parameter', function(){
      //changed the second sym1 to sym2 they are the same param but still not the same
      var sym1 = Symbol('foo');
      var sym2 = Symbol('foo');
      assert.notEqual(sym1, sym2);
    });
    it('`typeof Symbol()` returns "symbol"', function(){
      //Threw in () so it was a function like it says
      const theType = typeof Symbol();
      assert.equal(theType, 'symbol');
    });
    it('`new Symbol()` throws an exception, to prevent creation of Symbol wrapper objects', function(){
      function fn() {
        //put new in there before Symbol()
        new Symbol();
      }
      assert.throws(fn);
    });
  });
  