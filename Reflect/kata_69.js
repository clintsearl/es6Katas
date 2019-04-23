// 76: Promise - creation 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A promise can be created in multiple ways', function() {
    describe('creating a promise fails when', function() {
      it('using `Promise` as a function', function() {
        function callPromiseAsFunction() { 
          //Well lets just throw some () and it's a function
          Promise();
        }
        assert.throws(callPromiseAsFunction);
      });
      it('no parameter is passed', function() {
        function promiseWithoutParams() {
          new Promise();
        }
        assert.throws(promiseWithoutParams);  
      });
      it('passing a non-callable throws too', function() {
        // made it an object which isn't callable
        const notAFunction = {};
        assert.throws(() => { new Promise(notAFunction); });
      });
    });
    describe('most commonly Promises get created using the constructor', function() {
      it('by passing a resolve function to it', function() {
        // have to pass it in to use it
        const promise = new Promise((resolve) => resolve());
        return promise;
      });
      it('by passing a resolve and a reject function to it', function(done) {
        // did a reject instead of a resolve
        const promise = new Promise((resolve, reject) => reject());
        promise
          .then(() => done(new Error('Expected promise to be rejected.')))
          .catch(done);
      });
    });
    describe('extending a `Promise`', function() {
      it('using `class X extends Promise{}` is possible', function(done) {
        // Unchecked the Transpile to ES5 on the top and added in teh extends promise
        class MyPromise extends Promise{}
        const  promise = new MyPromise(resolve => resolve());
        promise
          .then(() => done())
          .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
      });
      it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', function() {
        class ResolvingPromise extends Promise {
          //added in the constructor and super as well as the extends promis above
          constructor(...args){
            super(...args);
          }
        }
        return new ResolvingPromise(resolve => resolve());
      });
    });
    describe('`Promise.all()` returns a promise that resolves when all given promises resolve', function() {
      it('returns all results', function(done) {
        const promise = Promise.all([
          //the assert only wanted 1,2 so I got rid of 3
          new Promise(resolve => resolve(1)),new Promise(resolve => resolve(2))
        ]);
        promise
          .then(value => { assert.deepEqual(value, [1, 2]); done(); })
          .catch(e => done(new Error(e)));
      });
      it('is rejected if one rejects', function(done) {
        const promise = Promise.all([
          //had to add in the err so it realized it was rejected
          new Promise(reject=> reject(err))
        ]);
        promise
          .then(() => done(new NotRejectedError()))
          .catch((err) => done());
      });
    });
    
    describe('`Promise.race()` returns the first settled promise', function() {
      it('if it resolves first, the promises resolves', function(done) {
        const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
        const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
        //put the early promise into the array for the race
        const promise = Promise.race([lateRejectedPromise, earlyResolvingPromise]);
        promise
          .then(value => { assert.deepEqual(value, '1st :)'); done(); })
          .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
      });
      it('if one of the given promises rejects first, the returned promise is rejected', function(done) {
        //the rejector was in all caps so it didn't match the assertion
        const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a rejector'));
        const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
        const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
        promise
          .then(() => done(new NotRejectedError()))
          .catch(value => { assert.equal(value, 'I am a rejector'); done(); })
          .catch(done);
      });
    });
    describe('`Promise.resolve()` returns a resolving promise', function() {
      it('if no value given, it resolves with `undefined`', function(done) {
        //left the resolve empty so it gave undefined
        const promise = Promise.resolve();
        promise
          .then(value => { assert.deepEqual(value, void 0); done(); })
          .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
      });
      it('resolves with the given value', function(done) {
        // Threw 'quick resolve' in there matched assert
        const promise = Promise.resolve('quick resolve');
        promise
          .then(value => { assert.equal(value, 'quick resolve'); done(); })
          .catch(e => done(e));
      });
    });
    describe('`Promise.reject()` returns a rejecting promise', function() {
      it('if no value given, it rejects with `undefined`', function(done) {
        //changed this from .resolve to .reject so it would reject with undefined
        const promise = Promise.reject();
        promise
          .then(() => done(new NotRejectedError()))
          .catch(value => { assert.deepEqual(value, void 0); done(); })
          .catch(done);
      });
      it('the parameter passed to `reject()` can be used in the `.catch()`', function(done) {
        // passed the param to reject the promise
        const promise = Promise.reject('quick reject');
        promise
          .then(() => done(new NotRejectedError()))
          .catch(value => { assert.deepEqual(value, 'quick reject'); done(); })
          .catch(done);
      });
    });
  });
  
  class NotRejectedError extends Error {
    constructor() {
      super();
      this.message = 'Expected promise to be rejected.';
    }
  }
  