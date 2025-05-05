/* Module Pattern: Encapsulation

Use Cases: Library encapsulation, avoiding global pollution, protecting sensitive data.

*/

const Counter = (function () {
    let count = 0; // Private variable

    // Public API
    return {
      increment() {
        count++;
      },
      getCount() {
        return count;
      },
    };
})();

Counter.increment();

console.log(Counter.getCount());  // 1