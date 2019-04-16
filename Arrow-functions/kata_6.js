// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

class LexicallyBound {
    getFunction() {
      //removed the function and made it return this 
      // just like it talks about in line 19 it has a this and will return a new get function...
      return () => {
        return this;
      }
    }
    getArgumentsFunction() {
      //made it an arrow function. solved last assert. can't use arguments in them.
      return ()=> {return arguments}
    }
  }
  
  describe('Arrow functions have lexical `this`, no dynamic `this`', () => {
    it('bound at definition time, use `=>`', function() {
      var bound = new LexicallyBound();
      var fn = bound.getFunction();
      assert.strictEqual(fn(), bound);
    });
    it('can NOT bind a different context', function() {
      var bound = new LexicallyBound();
      var fn = bound.getFunction();
      var anotherObj = {};
      //changed this from expecting an object to expecting bound to make it false and show it
      //can't be bound like that. it is just an {} but it wanted it to be false
      var expected = bound;
      assert.strictEqual(fn.call(anotherObj), expected);
    });
    it('`arguments` does NOT work inside arrow functions', function() {
      var bound = new LexicallyBound();
      var fn = bound.getArgumentsFunction();
      assert.equal(fn(1, 2).length, 0);
    });
  });
  