// 24: class - static keyword
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class you can use the `static` keyword', () => {
    describe('for methods', () => {
      class UnitTest {}
      it('a static method just has the prefix `static`', () => {
        class TestFactory {
          //typed static
          static makeTest() { return new UnitTest(); }
        }
        assert.ok(TestFactory.makeTest() instanceof UnitTest);
      });
      it('the method name can be dynamic/computed at runtime', () => {
        //changed the '' to createTest as in assertion
        const methodName = 'createTest';
        class TestFactory {
          static [methodName]() { return new UnitTest(); }
        }
        assert.ok(TestFactory.createTest() instanceof UnitTest);
      });
    });
    describe('for accessors', () => {
      it('a getter name can be static, just prefix it with `static`', () => {
        class UnitTest {
          //typed static
          static get testType() { return 'unit'; }
        }
        assert.equal(UnitTest.testType, 'unit');
      });
      it('even a static getter name can be dynamic/computed at runtime', () => {
        const type = 'test' + 'Type';
        class IntegrationTest {
          //put static and type in the []
          static get [type]() { return 'integration'; }
        }
        assert.ok('testType' in IntegrationTest);
        assert.equal(IntegrationTest.testType, 'integration');
      });
    });
  });
  


//   class thing{
//     static name= "something"
        // thing.name returns "something"

// }