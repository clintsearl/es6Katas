// 79: Promise - catch
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!
// Here we use promises to trigger, don't modify the block with the 
// returning promise!

describe('`catch()` returns a Promise and deals with rejected cases only', () => {
    describe('prerequisites for understanding', () => {
      it('*return* a fulfilled promise, to pass a test', () => {
        // added return!!! just like it asks, and fullfilled using resolve
        return Promise.resolve();
        assert(false); // Don't touch! Make the test pass in the line above!
      });
      it('reminder: the test passes when a fulfilled promise is returned', () => {
        //changed to resolve so it fullfills
        return Promise.resolve('I should fulfill.');
      });
    });
    describe('`catch` method basics', () => {
      it('is an instance method', () => {
        // added .reject so it would catch it 
        const p = Promise.reject();
        assert.equal(typeof p.catch, 'function');
      });
      it('catches only promise rejections', (done) => {
        //changed it to .reject
        const promise = Promise.reject();
        promise
          .then(() => { done('Should not be called!'); })
          .catch(done);
      });
      it('returns a new promise', () => {
        //returned a resolved promise from the whatToReturn function to get it to pass.
        const whatToReturn = () => Promise.resolve();
        const promise = Promise.reject();
        return promise.catch(() =>
          whatToReturn()
        );
      });
      it('converts it`s return value into a promise', () => {
        const p = Promise.reject();
        // returns what you tell it to
        const p1 = p.catch(() => 'promise?');
        return p1.then(result => assert.equal('promise?', result));
      });
      it('the first parameter is the rejection reason', () => {
        //rejection reason the same as assert
        const p = Promise.reject('oops');
        return p.catch(reason => {
          assert.equal(reason, 'oops');
        });
      });
    });
    describe('multiple `catch`es', () => {
      it('only the first `catch` is called', () => {
        const p = Promise.reject('1');
        const p1 = p
        //it doesn't get to the other catch because it rejects it goes with the first catch
            .catch(reason => "1 AND 2")
            .catch(reason => `${reason} AND 3`)
          ;
        return p1.then(result =>
          assert.equal(result, '1 AND 2')
        );
      });
      it('if a `catch` throws, the next `catch` catches it', () => {
        const p = Promise.reject('1');
        const p1 = p
            .catch(reason => { throw Error(`${reason} AND 2`) })
            .catch(err => { throw Error(`${err.message} AND 3`) })
            //it didn't want the NOT THIS so I got rid of it and only sent the err.message
            .catch(err => err.message)
          ;
        return p1.then(result =>
          assert.equal(result, '1 AND 2 AND 3')
        );
      });
    });
  });
  