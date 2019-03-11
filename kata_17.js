// 17: unicode - in strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Unicode in strings', () => {
    it('are prefixed with `\\u` (one backslash and u)', () => {
      //added in the `\u ` so it was recognized as a symbol thing
      const nuclear = `\u2622`;
      assert.equal(nuclear, '☢');
    });
    it('value is 4 bytes/digits', () => {
      // they are only 4 long, removed the extra 2
      const nuclear = '\u2622';
      assert.equal(`no more ${nuclear}`, 'no more ☢');
    });
    it('even "normal" character`s values can be written as hexadecimal unicode', () => {
      //looked up the unicode values for n and o 
      const nuclear = `\u006E\u006F more \u2622`;
      assert.equal(nuclear, 'no more ☢');
    });
    it('curly braces may surround the value', () => {
      //removed the extra 0's, the {} make it more readable....
      const nuclear = `\u{006E}\u006F more \u2622`;
      assert.equal(nuclear, 'no more ☢');
    });
  });
  