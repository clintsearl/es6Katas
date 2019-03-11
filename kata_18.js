// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('Rest parameters in functions', () => {
    it('must be the last parameter', () => {
      // removed the parameter, veryLast that was last in the()
      const fn = (...rest) => {
        assert.deepEqual([1, 2], rest);
      };
      fn(1, 2);
    });
    it('can be used to get all other parameters', () => {
      // it was missing the ... before rest, it maybe comes from line 17? 
      const fn = (firstParam, secondParam, ...rest) => {
        assert.deepEqual([3,4], rest);
      };
      fn(null, 2, 3, 4);
    });
    it('makes `arguments` obsolete', () => {
      //put ...args in there works like ...rest
      const fn = (...args) => {
        assert.deepEqual([42, 'twenty three', 'win'], args);
      };
      fn(42, 'twenty three', 'win');
    });
    it('eliminate `arguments`!!!', () => {
      const fn = () => [1, 2, 3];
      //dont need the args down in the fn() below they can be passed from above
      const [firstArg, ...rest] = fn();
      assert.deepEqual([2, 3], rest);
    });
  });
  
  