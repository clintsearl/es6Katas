// 35: Symbol.for - retrieves or creates a runtime-wide symbol
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Symbol.for` for registering Symbols globally', function() {
    it('creates a new symbol (check via `typeof`)', function() {
      // put the typeof in there how it's used
      const symbolType = typeof Symbol.for('symbol name');
      assert.equal(symbolType, 'symbol');
    });
    it('stores the symbol in a runtime-wide registry and retrieves it from there', function() {
      //removed the 1 after the second new symbol 
      const sym = Symbol.for('new symbol');
      const sym1 = Symbol.for('new symbol');
      assert.equal(sym, sym1);
    });
    it('is different to `Symbol()` which creates a symbol every time and does not store it', function() {
      var globalSymbol = Symbol.for('new symbol');
      //first is global so they can't be the same
      var localSymbol = Symbol.for('new symbol1');
      assert.notEqual(globalSymbol, localSymbol);
    });
    describe('`.toString()` on a Symbol', function() {
      it('also contains the key given to `Symbol.for()`', function() {
        //put new symbol in so it had that key
        const description = Symbol('new symbol').toString();
        assert.equal(description, 'Symbol(new symbol)');
      });
      describe('NOTE: the description of two different symbols', function() {
        it('might be the same', function() {
          //made them the same adding 1 to it
          const symbol1AsString = Symbol.for('new symbol 1').toString();
          const symbol2AsString = Symbol.for('new symbol 1').toString();
          assert.equal(symbol1AsString, symbol2AsString);
        });
        it('but the symbols are not the same!', function() {
          const symbol1 = Symbol.for('new symbol');
          const symbol2 = Symbol.for('new symbol 1');
          // added 1 so they aren't the same
          assert.notEqual(symbol1, symbol2);
        });
      });    
    });
  });
  