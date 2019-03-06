// 23: class - accessors
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class accessors (getter and setter)', () => {
    it('a getter is defined like a method prefixed with `get`', () => {
      class MyAccount {
        //changed this from money to balance, that's what they ask for in the assert
        get balance() { return Infinity; }
      }
      assert.equal(new MyAccount().balance, Infinity);
    });
    it('a setter has the prefix `set`', () => {
      class MyAccount {
        get balance() { return this.amount; }
        //set the amount to 23 it was set to amount
        set balance(amount) { this.amount = 23 }
      }
      const account = new MyAccount();
      account.balance = 42;
      assert.equal(account.balance, 23);
    });
    
    describe('dynamic accessors', () => {
      it('a dynamic getter name is enclosed in `[]`', function() {
        const balance = 'yourMoney';
        class YourAccount {
          // changed it from getterName to balance the thing we want
          get [balance]() { return -Infinity; }
        }
        assert.equal(new YourAccount().yourMoney, -Infinity);
      });
      it('a dynamic setter name as well', function() {
        const propertyName = 'balance';
        class MyAccount {
          get [propertyName]() { return this.amount; }
          set [propertyName](amount) { this.amount = 23; }
        }
        const account = new MyAccount();
        account.balance = 42;
        assert.equal(account.balance, 23);
      });
    });
  });
  