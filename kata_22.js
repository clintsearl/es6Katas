// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class creation', () => {
    it('is as simple as `class XXX {}`', function() {
      //made TestClass an object called class XXX
      class TestClass {};
      const instance = new TestClass();
      assert.equal(typeof instance, 'object');
    });
    it('a class is block scoped', () => {
      // class Inside {} commented this out so it shows it's scoped and the next one can't be
      {class Inside {}}
      assert.equal(typeof Inside, 'undefined');
    });
    it('the `constructor` is a special method', function() {
      class User {
        //used this.id to assign the id otherwise it doesn't know what to do with it
        constructor(id) {this.id = id}
      }
      const user = new User(42);
      assert.equal(user.id, 42);
    });
    it('defining a method by writing it inside the class body', function() {
      class User {
        //wrote the function/method to return false
        writesTests()  {return false}
        
      }
      const notATester = new User();
      assert.equal(notATester.writesTests(), false);
    });
    it('multiple methods need no commas (opposed to object notation)', function() {
      class User {
        wroteATest() { this.everWroteATest = true; }
        //told it to return the opposite
        isLazy() {return !this.everWroteATest;  }
      }
      const tester = new User();
      assert.equal(tester.isLazy(), true);
      tester.wroteATest();
      assert.equal(tester.isLazy(), false);
    });
    it('anonymous class', () => {
        //put class in there, so it is seeing it as a function?
      const classType = typeof class{};
      assert.equal(classType, 'function');
    });
  });
  