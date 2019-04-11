// 75: Promise - basics 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {
    it('`Promise` is a global function', function() {
      //It's a function it was ???
      const expectedType = 'function';
      assert.equal(typeof Promise, expectedType);
    });
    describe('the constructor', function() {
      it('instantiating it without params throws', function() {
        //Promise with nothing passed in, added the ()
        const fn = () => { Promise() }
        assert.throws(fn);
      });  
      it('expects a function as parameter', function() {
        //made param an arrow function
        const param = ()=>{};
        assert.doesNotThrow(() => { new Promise(param); });
      });  
    });
    describe('simplest promises', function() {
      it('resolve a promise by calling the `resolve` function given as first parameter', function(done) {
        let promise = new Promise((resolve) => {
          //Called the resolve function()
          resolve()
        });
        promise
          .then(() => done())
          .catch(() => done(new Error('The promise is expected to resolve.')));
      });
      it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', function(done) {
        let promise = new Promise((resolve) => {
          //returns 42 for the value to be used in the next one
          resolve(42);
        });
        promise
          .then(value => {assert.equal(value, 42); done(); })
          .catch(() => done(new Error('The promise is expected to resolve with 42!')));
      });
      it('rejecting a promise is done by calling the callback given as 2nd parameter', function(done) {
        let promise = new Promise(() => {
          reject();
        });
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
    });
    describe('an asynchronous promise', function() {
      it('can resolve later, also by calling the first callback', function(done) {
          let promise = new Promise(() => {
          setTimeout(() => resolve(), 100);
        });
        promise
          .then(() => done())
          .catch(() => done(new Error('The promise is expected to resolve.')));
      });
      it('reject it at some later point in time, calling the 2nd callback', function(done) {
        let promise = new Promise((reject) => {
          setTimeout(() => reject(), 100);
        });
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
    });
    describe('test library (mocha here) support for promises', function() {
      it('just returning the promise makes the test library check that the promise resolves', function() {
        let promise = new Promise((reject, resolve) => {
          resolve();
        });
        // return the promise to mocha, it has the checking for promise resolving built in, when it receives a promise
        return promise;
      });
    });
  });
  