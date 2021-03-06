// 39: iterator - custom. Iterable is a protocol, when implemented allows objects 
// to customize their iteration behavior, such as what values are looped over in a for..of construct.
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A simple iterable without items inside, implementing the right protocol', () => {
  //added all this function except for the first line.
    function iteratorFunction() {
     return {
       next: function(){
         return{done: true}
       }
     }
      
    }
  
    describe('the `iteratorFunction` needs to comply to the iterator protocol', function() {
      it('must return an object', function() {
        assert.equal(typeof iteratorFunction(), 'object');
      });
      it('the object must have a function assigned to a key `next`', function() {
        assert.equal(typeof iteratorFunction().next, 'function');
      });
      it('calling `next()` must return an object with `{done: true}`', function() {
        assert.deepEqual(iteratorFunction().next(), {done: true});
      });
    });
  
    let iterable;
    beforeEach(function() {
      //made iterable = {} an object
      iterable = {
        // added in the symbol iterator
        [Symbol.iterator]: iteratorFunction
      };
    });
  
    describe('the iterable', function() {
      it('must be an object', function() {
        assert.equal(typeof iterable, 'object');
      });
      it('must have the iterator function assigned to the key `Symbol.iterator`', function() {
        assert.equal(iterable[Symbol.iterator], iteratorFunction);
      });
    });
    describe('using the iterable', function() {
      it('it contains no values', function() {
        //define as a string so then it goes through the for loop and the value adds
        // up to the same empty string
        let values='';
        for (let value of iterable) {
          values += value;
        }
        assert.equal(values, '');
      });
      it('has no `.length` property', function() {
        //add in the !! to say it is false that it does not have one
        const hasLengthProperty = !!iterable.length;
        assert.equal(hasLengthProperty, false);
      });
      describe('can be converted to an array', function() {
        it('using `Array.from()`', function() {
          //just added Array.from()
          const arr = Array.from(iterable);
          assert.equal(Array.isArray(arr), true);
        });
        it('where `.length` is still 0', function() {
          //Once again added Array.from
          const arr = Array.from(iterable);
          const length = arr.length;
          assert.equal(length, 0);
        });
      });
    });
  });
  
  