// 26: class - more-extends
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Classes can inherit from another', () => {
  it('extend an `old style` "class", a function, still works', () => {
    // made A a function
    let A = () =>{}
    class B extends A {}
    assert.equal(new B() instanceof A, true);
  });
  
  describe('prototypes are as you know them', () => {
    class A {}
    class B extends A {}
    it('A is the prototype of B', () => {
      //removed null from () and put B there
      const isIt = A.isPrototypeOf(B);
      assert.equal(isIt, true);
    });
    it('A`s prototype is also B`s prototype', () => {
      //added .prototype
      const proto = B.prototype;
      // Remember: don't touch the assert!!! :)
      assert.equal(A.prototype.isPrototypeOf(proto), true);
    });
  });

  describe('`extends` using an expression', () => {
    it('e.g. the inline assignment of the parent class', () => {
    let A
    // Throw class in there so it is defined as a class
    class B extends (A =class{}) {}
      assert.equal(new B() instanceof A, true);
    });
    it('or calling a function that returns the parent class', () => {
      //put A into the () to pass it in replaced beNull with null and Object
      const returnParent = (A ) => Object ? null : class {};
      //returnParent is a function so it needs ()
      class B extends returnParent() {}
      assert.equal(Object.getPrototypeOf(B.prototype), null);
    });
  });
});
