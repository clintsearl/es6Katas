// 45: Map.prototype.get()
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map.prototype.get` returns the element from the map for a key', function(){
    it('`get(key)` returns the value stored for this key', function() {
      let map = new Map();
      map.set('key', 'value');
      //stuck in the name of the key we wanted to get the value of
      const value = map.get('key');
      assert.equal(value, 'value');
    });
    it('multiple calls still return the same value', function() {
      let map = new Map();
      map.set('value', 'value');
      //the key is called value and the value is called value. 
      var value = map.get(map.get(map.get('value')));
      assert.equal(value, 'value');
    });
    it('requires exactly the value as passed to `set()`', function() {
      let map = new Map();
      const obj = {};
      map.set(obj, 'object is key');
      assert.equal(map.get(obj), 'object is key');
    });
    it('leave out the key, and you get the value set for the key `undefined` (void 0)', function() {
      let map = new Map();
      //put a value in there for the key so it wasn't undefined anymore
      map.set('key', 'yo');
      const value = map.get('key');
      assert.equal(value, 'yo');
    });
    it('returns undefined for an unknown key', function() {
      let map = new Map();
      map.set(void 0, 1);
      //Asked for a key that isnt there
      const value = map.get("key that isnt there");
      assert.equal(value, void 0);
    });
  });
  