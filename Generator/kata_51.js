// 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generator - `yield` is used to pause and resume a generator function', () => {
    function* generatorFunction() {
      yield 'hello';
      yield 'world';
    }
    let generator ;
  
    beforeEach(function() {
      generator = generatorFunction();
    });
    it('converting a generator to an array (using `Array.from`) resumes the generator until all values are received', () => {
      //added the () after genfunction
      let values = Array.from(generatorFunction());
      assert.deepEqual(values, ['hello', 'world']);
    });
    describe('after the first `generator.next()` call', function() {
      it('the value is "hello"', function() {
        //added () for a function
        const {value} = generator.next();
        assert.equal(value, 'hello');
      });
      it('and `done` is false', function() {
        //added .next() to generator
        const {done} = generator.next();
        assert.equal(done, false);
      });
    });
    describe('after the second `next()` call', function() {
      let secondItem;
      beforeEach(function() {
        
        secondItem = generator.next();
      });
      it('`value` is "world"', function() {
        //replaced secondItem with generator.next()
        let {value} = generator.next();
        assert.equal(value, 'world');
      });
      it('and `done` is still false', function() {
        //added .done to get it's value
        const {done} = secondItem;
        assert.equal(done, false);
      });
    });
    describe('after stepping past the last element, calling `next()` that often', function() {
      it('`done` property equals true, since there is nothing more to iterator over', function() {
        generator.next();
        generator.next();
        //put done in {} to get the value of that key, and changed it to .next() instead, 
        // I thought puting generator.next() above would work but for some reason it doesnt
        let {done} = generator.next();
        assert.equal(done, true);
      });
    });
  });
  
  