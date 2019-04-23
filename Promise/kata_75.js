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
      //made an arrow function for the param
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
        //added the 42 value it wanted in the resolve
        resolve(42);
      });
      promise
        .then(value => {assert.equal(value, 42); done(); })
        .catch(() => done(new Error('The promise is expected to resolve with 42!')));
    });
    it('rejecting a promise is done by calling the callback given as 2nd parameter', function(done) {
      //added in the params, reject HAS to be the second one
      let promise = new Promise((resolve, reject) => {
        reject();
      });
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
  });
  describe('an asynchronous promise', function() {
    it('can resolve later, also by calling the first callback', function(done) {
      // just threw the resolve, reject params in. this one had a delay time
        let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 100);
      });
      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });
    it('reject it at some later point in time, calling the 2nd callback', function(done) {
      // same as above, just had to make sure the params are going in
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(), 100);
      });
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
  });
  describe('test library (mocha here) support for promises', function() {
    it('just returning the promise makes the test library check that the promise resolves', function() {
      //resolve and reject were in the wrong order
      let promise = new Promise((resolve, reject) => {
        resolve();
      });
      // return the promise to mocha, it has the checking for promise resolving built in, when it receives a promise
      return promise;
    });
  });
});
