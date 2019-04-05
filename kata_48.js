// 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`add()` appends a new element to the end of a Set object.', function(){
    let set;
    beforeEach(() => set = new Set());
    it('adds every value, of any type, only once', function() {
      const fn = () => {};
      set.add(1);
      set.add(1);
      set.add(fn);
      //removed the {} below, so it wasn't passing in an object fn but the same function
      set.add(fn);
      assert.equal(set.size, 2);
    });
    it('is chainable', function() {
      //put different numbers in and the () so it's adding them
      set.add(3).add(2);
      assert.equal(set.has(2), true);
    });
    it('call without params adds undefined', function() {
      //added the () to add undefined
      set.add()
      assert.equal(set.has(void 0), true);
    });
    it('0, -0 and +0 are equal', function() {
      //put 0 and negative 0 in there they 
      set.add(0);
      set.add(-0);
      assert.equal(set.has(+0), true);
    });
  });
  