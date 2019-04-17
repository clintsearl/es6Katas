// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
    it('by surrounding the left-hand variable with `{}`', () => {
      //Added the {} just like it says, that removes it from the object
      const {x} = {x: 1};
      assert.equal(x, 1);
    });
    describe('nested', () => {
      it('multiple objects', () => {
        //Had to add the array to the 1st magic [{}] and the {} to the 2nd magic: [{}]
        const magic = [{first: 23, second: 42}];
        const {magic: [{second}]} = {magic};
        assert.equal(second, 42);
      });
      it('object and array', () => {
        //added y in there, there are 2 items in the array, need a key for both
        const {z:[y, x]} = {z: [23, 42]};
        assert.equal(x, 42);
      });
      it('array and object', () => {
        //matched up the {}[] so that it cancels out those in the assignment after =
        const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
        assert.equal(lang, 'ES6');
      });
    });
    describe('interesting', () => {
      it('missing refs become undefined', () => {
        //took out the ref so it shows it will be undefined
        const {z} = {x: 1, };
        assert.equal(z, void 0);
      });
      it('destructure from builtins (string)', () => {
        // This also
        const {substr} ='1';
        assert.equal(substr, String.prototype.substr);
      });
    });
  });
  