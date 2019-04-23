// 78: Promise - API overview
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Promise` API overview', function() {
    it('`new Promise()` requires a function as param', () => {
      //added an arrow function for the param
      const param = ()=>{};
      assert.doesNotThrow(() => { new Promise(param); });
    });
    describe('resolving a promise', () => {
      // reminder: the test passes when a fulfilled promise is returned
      it('via constructor parameter `new Promise((resolve) => { resolve(); })`', () => {
        //added the resolve into the passing in params
        const param = (resolve) => { resolve(); };
        return new Promise(param);
      });
      it('using `Promise.resolve()`', () => {
        //changed from .reject to .resolve
        return Promise.resolve('all fine');
      });
    });
    describe('a rejected promise', () => {
      it('using the constructor parameter', (done) => {
        //resolve has to be the second param
        const promise = new Promise((resolve, reject) => { reject(); });
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
      it('via `Promise.reject()`', (done) => {
        //changed from reject to resolve
        const promise = Promise.reject();
        promise
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done());
      });
    });
    describe('`Promise.all()`', () => {
      it('`Promise.all([p1, p2])` resolves when all promises resolve', () => {
        //all promises resolve
        return Promise.all([Promise.resolve(), Promise.resolve()])
      });
      it('`Promise.all([p1, p2])` rejects when a promise is rejected', (done) => {
        //at least one promise rejects
        Promise.all([Promise.resolve(), Promise.reject()])
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done())
      });
    });
    describe('`Promise.race()`', () => {
      it('`Promise.race([p1, p2])` resolves/reject when one of the promises resolves/rejects', () => {
        //changed the FIRST one to resolve it's a race
        return Promise.race([Promise.resolve(), Promise.reject()])
      });
      it('`Promise.race([p1, p2])` rejects when one of the promises rejects', (done) => {
        //It's a race! first one is reject
        Promise.race([Promise.reject(), Promise.resolve()])
          .then(() => done(new Error('The promise is expected to be rejected.')))
          .catch(() => done())
      });
      it('`Promise.race([p1, p2])` order matters (and timing)', () => {
        //just changed the first one to resolve
        return Promise.race([Promise.resolve(), Promise.resolve()])
      });
    });
  });
  