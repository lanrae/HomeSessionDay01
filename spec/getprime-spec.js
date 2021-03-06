var getPrimes = require('../src/library.js').getPrimes

describe("Get array of prime: ", function () {

    describe("Test should check if a number is prime", function () {

      it("should return 'true' for 5 ", function () {
        expect(isPrime(5)).toEqual(true);
      });

      it("should return 'false' for 9", function () {
        expect(isPrime(9)).toEqual(false);
      });

      it("should return 'true' for 89 ", function () {
        expect(isPrime(89)).toEqual(true);
      });

    });

/*//I still need sto learn about this section some more
    describe("Verify that the array of primes is accurate", function () {

     it("should return [2, 3, 5, 7] for 7", function () {
        expect(getPrimes(7)).toEqual([2, 3, 5, 7]);
      });
       it("should return [2, 3, 5, 7, 11, 13, 17] for 17", function () {
        expect(getPrimes(17)).toEqual([2, 3, 5, 7, 11, 13, 17]);
      });
      
     it("should return [2, 3] for 3", function () {
        expect(getPrimes(3)).toEqual([2, 3]);
      });

    });*/

    describe("Test should check for valid inputs", function () {

      it("should return 'Invalid input' for numbers less than 2", function () {
        expect(getPrimes(1)).toEqual('Invalid input');
      });
       it("should return 'Invalid input' for numbers less than 2", function () {
        expect(getPrimes(-1)).toEqual('Invalid input');
      });

      it("should return 'Invalid input' for non-integers", function () {
        expect(getPrimes("a")).toEqual('Invalid input');
      });

    });
  });