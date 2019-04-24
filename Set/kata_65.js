// 65: Set - API overview
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Set` API overview', function(){
    const api = ['size', 'add', 'clear', 'delete', 'entries', 'forEach', 'has', 'keys', 'values'];
    let set;
    beforeEach(function() {
      set = new Set(api);
    });
    it('a Set can be created from an array', function() {
      // made the set from the variable api it's already an array
      let set = new Set(api);
      assert.deepEqual(Array.from(set), api);
    });
    it('`size` is the number of values', function() {
      // .size is how you find the lengh
      const theSize = set.size;
      assert.equal(theSize, api.length);
    });
    it('`add()` appends the given value', function() {
      // Hint: To make the content of `api` and `set` consistent you can add the
      // `Symbol.iterator` to the `set`. Strongly speaking it is missing in the API.
      set.add('clint')
      //added my name to the set it wasn't there before so it made it one longer
      assert.equal(set.size, api.length + 1);
    });
    it('`clear()` removes all elements', function() {
      set.clear()
      // wiped out the set usefull, when reusing a function
      assert.equal(set.size, 0);
    });
    it('`delete()` removes the given value', function() {
      set.delete('has')
      //removed has from the set
      assert.equal(set.size, api.length - 1);
    });
    it('`entries()` returns an iterator for all values', function() {
      const expectedEntries = api.map(entry => [entry, entry]);
      //the function is .entries() they had .entry
      const actualEntries = set.entries();
      assert.deepEqual([...actualEntries], expectedEntries);
    });
    it('`forEach()` calls a callback for each value', function() {
      let values = [];
      //It was trying to map the set!! that's not a thing we need to use forEach
      //and it will pull out the values
      set.forEach(value => { values.push(value); });
      assert.deepEqual(values, api);
    });
    it('`has()` returns true if the given value is in the set', function() {
      const propertyName = 'size';
      //put in a name that it has
      assert.equal(set.has(propertyName), true);
    });
    describe('returns an iterator that contains all values', function() {
      // In order to be alike to `Map`, `keys()` and `values()` are essentially the same thing for a `Set`.
      it('`keys()`', function() {
        //had Object instead of set infront of keys
        const allKeys = set.keys(set);
        assert.deepEqual([...allKeys], api);
      });
      it('`values()`', function() {
        //there just wasn't an s on values
        const allValues = set.values();
        assert.deepEqual([...allValues], api);
      });
      it('`[Symbol.iterator]()`', function() {
        //use without the [] i'm not sure why maybe we don't want to destructure it...
        const iteratorKey = Symbol.iterator;
        assert.deepEqual([...set[iteratorKey]()], api);
      });
    });
  });
  