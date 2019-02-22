// 2: template strings - multiline
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Template string, can contain multiline content', function() {
    it('wrap it in backticks (`) and add a newline, to span across two lines', function() {
     //Added \n\n in the middle to make it multiline
      var normalString = `line1\n\nline3`;
  
      assert.equal(normalString, 'line1\n\nline3');
    });
    // Was blank added \n so the assert .length is 4 
    it('even over more than two lines', function() {
      var multiline = `\n\n\n`;
          
        
      assert.equal(multiline.split('\n').length, 4);
    });
    describe('and expressions inside work too', function() {
      var x = 42;
      it('like simple variables', function() {
        //Added the \n\n and counted the spaces. needs to be exact cause its a string
        var multiline = `line 1\n\n      ${x}`;
  
        assert.equal(multiline, 'line 1\n\n      42');
      });
      it('also here spaces matter', function() {
        //No spaces in this one, started with empty ``
        var multiline = `\n\n${x}`;
  
        assert.equal(multiline, '\n\n42');
      });
    });
  });
  