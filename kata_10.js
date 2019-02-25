// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring arrays makes shorter code', () => {
    it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
      //put the variable into an array adding []
      let [firstValue] = [1];
      assert.strictEqual(firstValue, 1);
    });
    it('get the last item from array', () => {
      //
      let [, ,lastValue] = [1, 2, 3];
      assert.strictEqual(lastValue, 3);
    });
    it('swap two variables, in one operation', () => {
      let [x, y] = ['ax', 'why'];
      //swapped the second array x and y it was [x, y]
      [x, y] = [y, x];
      assert.deepEqual([x, y], ['why', 'ax']);
    });
    it('leading commas', () => {
      const all = ['ax', 'why', 'zet'];
      //added one more , in so that it was looking at the last in the array. index 2
      const [, ,z] = all;
      assert.equal(z, 'zet');
    });
    it('extract from nested arrays', () => {
      const user = [['Some', 'One'], 23];
      //Nested the firstName, surname in an array. so it matches the variable.
      const [[firstName, surname], age] = user;
      const expected = 'Some One = 23 years';
      assert.equal(`${firstName} ${surname} = ${age} years`, expected);
    });
    it('chained assignments', () => {
      let c, d;
      //put a, b in to an array []
      let [a, b] = [c, d] = [1, 2];
      assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
    });
    it('in for-of loop', () => {
      //change the array from [[0, 1, 2]]
      for (var [a, b] of [[1, 2]]) {}
      assert.deepEqual([a, b], [1, 2]);
    });
  });
  