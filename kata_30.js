// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.of` creates an array with the given arguments as elements', () => {
    it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
      //Added the .of so it is an array with 10
      const arr = Array.of(10);
      assert.deepEqual(arr, [10]);
    });
    it('puts all arguments into array elements', () => {
      //jsut threw 1, 2 in the () so it passes through
      const arr = Array.of(1,2);
      assert.deepEqual(arr, [1, 2]);
    });
    it('takes any kind and number of arguments', () => {
      const starter = [1, 2];
      const end = [3, '4'];
      //stuck ...starter in an array so it was nested
      const arr = Array.of([...starter], ...end);
      assert.deepEqual(arr, [[1, 2], 3, '4']);
    });
  });
  