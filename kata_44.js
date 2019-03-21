// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value map', function(){
    it('`Map` is a new global constructor function', function() {
      //changed it from ??? to function which is what map is
      const typeOfMap = "function";
      assert.equal(typeof Map, typeOfMap);
    });
    it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
      let map = new Map();
      map.set('key', 'value');
      // changed null to 'value'and put key in get so it knows what value of which key to get.
      const value = map.get('key');
      assert.equal(value, 'value');
    });
    it('`has()` tells if map has the given key', function() {
      let map = new Map();
      map.set('key', 'value');
      //fixed spelling of hazz and put the key in for it to see if it has a value
      const hasIt = map.has("key");
      assert.equal(hasIt, true);
    });
    it('a map is iterable', function() {
      let map = new Map();
      map.set('1', 'one');
      map.set('2', 'two');
      //Thanks for the hint, made it an array
      const mapAsArray = Array.from(map); // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
      assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
    });
    it('complex types can be keys', function() {
      const obj = {x: 1};
      const otherObj = {x: 1};
      let map = new Map();
      map.set(obj, '');
      // map.set(otherObj, ''); commented this out so it's not a key value pair
      assert.equal(map.has(otherObj), false);
    });
  });
  