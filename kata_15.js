// 15: destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Assign object property values to new variables while destructuring', () => {
    describe('for simple objects', function() {
      it('use a colon after the property name, like so `propertyName: newName`', () => {
        //changed the object {x: newName} = {x: 1} we wanted y not x
        const {y} = {y: 1};
        assert.equal(y, 1);
      });
      it('assign a new name and give it a default value using `= <default value>`', () => {
        //changed the default value from 2 to 42. x is the object, y=42 is x's value.
        const {x: y=42} = {y: 23};
        assert.equal(y, 42);
      });
    });
    describe('for function parameter names', function() {
      it('do it the same way, with a colon behind it', () => {
        // Made the value of x: y=1 it was jsut {x}
        const fn = ({x: y=1}) => {
          assert.equal(y, 1);
        };
        fn({x: 1});
      });
      it('giving it a default value is possible too, like above', () => {
        //Changed z=3 to y=3 
        const fn = ({x: y=3}) => {
          assert.equal(y, 3);
        };
        fn({});
      });
    });
  });
  