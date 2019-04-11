// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Default parameters make function parameters more flexible', () => {
  it('define it using an assignment to the parameter `function(param=1){}`', function() {
    //Assigned the int when passing it in the function
    let number = (int=0) => int;
    assert.equal(number(), 0);
  });
  it('it is used when `undefined` is passed', function() {
    let number = (int = 23) => int;
    const param= undefined;
    // let param this works too, it uses the default that is assigned in the function
    assert.equal(number(param), 23);
  });
  it('it is not used when a value is given', function() {
    // Called the param being passed in method, so it could return it.
    function xhr(method) {
      return method;  
    }
    assert.equal(xhr('POST'), 'POST');
  });
  it('it is evaluated at run time', function() {
    //had to define the defaultValue asert wanted 42
    let defaultValue= 42;
    function xhr(method = `value: ${defaultValue}`) {
      return method;  
    }
    assert.equal(xhr(), 'value: 42');
  });
  it('it can also be a function', function() {
    //turned it into a function returning the string it wanted.
    const defaultValue = () =>{return 'defaultValue'};
    function fn(value = defaultValue()) {
      return value;  
    }
    assert.equal(fn(), 'defaultValue');
  });
});
