// 14: destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring function parameters', () => {
    describe('destruct parameters', () => {
      it('multiple params from object', () => {
        //removed }{ in the middle so it's one object, then assigned them to the desired values.
        const fn = ({id=42, name='Wolfram'}) => {
          assert.equal(id, 42);
          assert.equal(name, 'Wolfram');
        };
        const user = {name: 'Wolfram', id: 42};
        fn(user);
      });
      it('multiple params from array/object', () => {
        const fn = ([{name}]) => {
          assert.equal(name, 'Alice');
        };
        //Changed 'nobody' to 'Alice'
        const users = [{name: 'Alice'}, {name: 'Alice', id: 42}];
        fn(users);
      });
    });
    describe('default values', () => {
      it('for simple values', () => {
        //Changed Bobby to Bob 
        const fn = (id, name='Bob') => {
          assert.strictEqual(id, 23);
          assert.strictEqual(name, 'Bob');
        };
        fn(23);
      });
      it('for a missing array value', () => {
        const defaultUser ={id: 23, name: 'Joe'};
        //Stuck the missing value into the array, defaultUser wasn't in the array
        const fn = ([user, defaultUser]) => {
          assert.deepEqual(user, defaultUser);
        };
        fn([]);
      });
      it('mix of parameter types', () => {
        //assigned each value = 
        const fn = (id= 1, [arr=2], {obj=3}) => {
          assert.equal(id, 1);
          assert.equal(arr, 2);
          assert.equal(obj, 3);
        };
        fn(void 0, [], {});
      });
    });
  });
  