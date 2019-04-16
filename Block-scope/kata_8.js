// 8: block scope - const
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('`const` is like `let` plus read-only', () => {
  describe('scalar values are read-only', () => {
    it('e.g. a number', () => {
      
      const constNum = 0;
     //they tried to reasign it here, constNum =1 I deleted that
      assert.equal(constNum, 0);
    });
    it('or a string', () => {
      const constString = 'I am a const';
      //constString = 'Cant change you?'; commented this out....
      assert.equal(constString, 'I am a const');
    });
  });
  const notChangeable = 23;
  it('const scope leaks too', () => {
    assert.equal(notChangeable, 23);
  });
  describe('complex types are NOT fully read-only', () => {
    it('array`s items can be changed', () => {
      const arr = [];
      //Assigned the array to 42 instead of 0
      arr[0] = 42;
      assert.equal(arr[0], 42);
    });
    it('object`s can be modified', () => {
      const obj = {x: 1};
      //assigned the obj.x to 3 it is declaired as 1 then changed to 2 now I did 3
      obj.x = 3;
      assert.equal(obj.x, 3);
    });
  });
});
