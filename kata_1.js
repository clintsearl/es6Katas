// 1: template strings - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('A template string, is wrapped in ` (backticks) instead of \' or "', function() {
    describe('by default, behaves like a normal string', function() {
      it('just surrounded by backticks', function() {
        // just threw the string in the back ticks
        var str = `like a string`;
        assert.equal(str, 'like a string');
      });
    });
  
    var x = 42;
    var y = 23;
    
    describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
      it('e.g. a simple variable "${x}" just gets evaluated', function() {
        //there was a # infront of the second x to say it's the one they want to stay a number
     //  the firststays a string the second is treated as a number
        var evaluated = `x=${x}`;
        assert.equal(evaluated, 'x=' + x);
      });
    //   There were '' instead of `` and I changed the spacing so they matched the error notes
      it('multiple variables get evaluated too', function() {
        var evaluated = `${x}+${y}`;
        assert.equal(evaluated, x + '+' + y);
      });
    });
  
    describe('can evaluate any expression, wrapped inside "${...}"', function() {
      it('all inside "${...}" gets evaluated', function() {
        // changed from `${x}+${y}`
        var evaluated = `${ x +  y }`;
        assert.equal(evaluated, x+y);
      });
      it('inside "${...}" can also be a function call', function() {
        function getDomain(){ 
          return document.domain; 
        }
        //stick the () behind the name so it recognizes it as a function
        var evaluated = `${ getDomain() }`;
        assert.equal(evaluated, 'tddbin.com');
      });
    });
  });