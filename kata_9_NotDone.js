// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The object literal allows for new shorthands', () => {
    const x = 1;
    const y = 2;
    describe('with variables', () => {
      it('the short version for `{x: x}` is {x}', () => {
       //changed this from a x to y
        const short = {y};
        assert.deepEqual(short, {y: y});
      });
      it('works with multiple variables too', () => {
        //removed a z and the , from the object
        const short = {x, y};
        assert.deepEqual(short, {x: x, y: y});
      });
    });
    describe('with methods', () => {
      const func = () => func;
      it('using the name only uses it as key', () => {
        //removed it from the object and put {func} there
        const short = {func};
        assert.deepEqual(short, {func: func});
      });
      it('a different key must be given explicitly, just like before ES6', () => {
        //Added the key they wanted, otherKey
        const short = {otherKey: func};
        assert.deepEqual(short, {otherKey: func});
      });
      //MISSING THE LAST TEST!!!