// 64: Set - delete
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`set.delete()` deletes an element from a set', function(){
    let set;
    beforeEach(() => set = new Set());
    describe('use `delete(<value>)` to delete an element', function() {
      beforeEach(function() {
        set.add('one').add('two').add('three');
        
      });
      it('`delete()` returns `true` when the element was found', function() {
        //it was set.remove changed it to delete and added a value in for it to delete
        const returns = set.delete('two');
        assert.strictEqual(returns, true);
      });
      it('and the size decreases', function() {
        set.delete('one')
        assert.equal(set.size, 2);
      });
    });
    describe('if nothing was deleted (no element with the given value was found)', function() {
      it('returns `false`', function() {
        set.add('one');
        set.delete('one')
        //I deleted it here so the next one returns false cause it can't find it
        const returns = set.delete('one');
        assert.equal(returns, false);
      });
    });
    describe('`undefined` is a valid value in a set', function() {
      it('deleting it, when it is not in the set, returns `false` too', function() {
        //I defined whatToDelete as something random that isn't in the set
        let whatToDelete= 56
        assert.equal(set.delete(whatToDelete), false);
      });
      it('`delete()` removes it, when its in the set', function() {
        //added the set.add() with nothing in it so the delete would see the set with nothing in it
        set.add()
        assert.equal(set.delete(), true);
      });
    });
    describe('the value does NOT get casted', function() {
      it('number 1 is different to string "1"', function() {
        set.add(1);
        // set.add('1'); commented this out. it tries and deletes string '1' but it isn't there
        assert.equal(set.delete('1'), false);
      });
    });
  });
  