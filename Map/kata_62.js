// 62: Map - `has()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`map.has()` indicates whether an element with a key exists', function() {
    it('finds nothing in an empty map', function() {
      let map = new Map();
      //Removed the double z hazz is not a function. 
      const hasKey = map.has(void 0);
      assert.equal(hasKey, false);
    });
    it('finds an element by it`s key', function() {
      let map = new Map([['key', 'VALUE']]);
      //put in the key so it had somehting to look for
      const hasKey = map.has("key");
      assert.equal(hasKey, true);
    });
    it('finds `undefined` as key too', function() {
      let map = new Map([[void 0, 'not defined key']]);
      // put in the function .has() looks for undefined because there isn't something specific in the () to look for
      const hasUndefinedAsKey = map.has();
      assert.equal(hasUndefinedAsKey, true);
    });
    it('does not coerce keys', function() {
      //Added '' to the 1 as the key. 1 !='1'
      let map = new Map([['1', 'one']]);
      const findsStringOne = true;
      assert.equal(map.has('1'), findsStringOne);
    });
    it('after removal (using `map.delete(<key>)`) it doesnt find the element anymore', function() {
      let map = new Map([[1, 'one']]);
      //added this function in just as it says to delete the key
      map.delete(1)
      assert.equal(map.has(1), false);
    });
    it('adding an item (using `map.set(key, value)`) later will make `has()` return true', function() {
      let map = new Map();
      //added an item to the map with a key thats void or undefined
      map.set()
      assert.equal(map.has(void 0), true);
    });
  });
  