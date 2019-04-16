// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class use `super` to access parent methods', () => {
    it('use of `super` without `extends` fails (already when transpiling)', () => {
      //Removed super from the return and put false. can't use super without extends
       class A {hasSuper() { return false  }}
      assert.equal(new A().hasSuper(), false);
    });
    it('`super` with `extends` calls the method of the given name of the parent class', () => {
      class A {hasSuper() { return true; }}
      // hasSuper is a function so added () in return super.hasSuper()
      class B extends A {hasSuper() { return super.hasSuper(); }}
      assert.equal(new B().hasSuper(), true);
    });
    it('when overridden a method does NOT automatically call its super method', () => {
      class A {hasSuper() { return true; }}
      // removed return 'nothing' could have nothing or return or return void 0
      class B extends A {hasSuper(){}}
      assert.equal(new B().hasSuper(), void 0);
    });
    it('`super` works across any number of levels of inheritance', () => {
      class A {iAmSuper() { return true; }}
      class B extends A {}
      //added super. and modified the test and C function to show they don't need to be the same
      class C extends B {iSuper() { return super.iAmSuper(); }}
      assert.equal(new C().iSuper(), true);
    });
    it('accessing an undefined member of the parent class returns `undefined`', () => {
      class A {}
      //changed constructor to A class A is empty
      class B extends A {getMethod() { return super.A; }}
      assert.equal(new B().getMethod(), void 0);
    });
  });
  