// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Number.isInteger()` determines if a value is an integer', function(){
    it('`isInteger` is a static function on `Number`', function() {
      //it's a function not a method...
      const whatType = 'function';
      assert.equal(typeof Number.isInteger, whatType);
    });
    describe('zero in different ways', function() {
      it('0 is an integer', function() {
        //changed from null to 0
        const zero = 0;
        assert(Number.isInteger(zero));
      });
      it('0.000', function() {
        //still and int
        const veryZero = 0.00000;
        assert(Number.isInteger(veryZero));
      });
      it('the string "0" is NOT an integer', function() {
        // that's a string
        const stringZero = '0';
        assert(Number.isInteger(stringZero) === false);
      });
    });
    describe('one in different ways', function() {
      it('0.111 + 0.889', function() {
        //adding them up to 1
        const rest = 0.889;
        assert(Number.isInteger(0.111 + rest));
      });
      it('0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?', function() {
        //add it all up to 1
        const oneOrNot = 0.5 + 0.2 + 0.3 + 0.1 + 0.2;
        assert(Number.isInteger(oneOrNot) === false);
      });
      it('parseInt`ed "1" is an integer', function() {
        // they forgot the last part of their function Int on the end of parse
        const convertedToInt = Number.parseInt('1.01');
        assert(Number.isInteger(convertedToInt));
      });
    });
    describe('what is not an integer', function() {
      it('`Number()` is an integer', function() {
        //even though there isn't a number passed through it's still a number
        const numberOne = Number();
        assert(Number.isInteger(numberOne));
      });
      it('`{}` is NOT an integer', function() {
        //put in the funciton isInteger
        const isit = Number.isInteger({});
        assert(isit === false);
      });
      it('`0.1` is not an integer', function() {
        // added the isInteger
        const isit = Number.isInteger(0.1);
        assert(isit === false);
      });
      it('`Number.Infinity` is not an integer', function() {
        // changed the max value to Infinity it's not a real number. 
        const isit = Number.isInteger(Number.Infinity);
        assert(isit === false);
      });
      it('`NaN` is not an integer', function() {
        //was testing if it was a float, changed it to Integer
        const isit = Number.isInteger(NaN);
        assert(isit === false);
      });
    });
  });
  