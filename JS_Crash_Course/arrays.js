/**
 * @file Contains array related exercises
 * @author Robert Kuropkat <robert.kuropkat@gmail.com>
 * 
 * Demonstrate creation and manipulation of arrays.  Items demonstrated
 * <ul>
 *   <li> Creation of Array
 *   <li> Remove and add a the last member of the array (pop/push)
 *   <li> Remove and add the first member of the array (shift/unshift)
 *   <li> Builtin array methods and properties such as isArray(), length 
 *   <li>    and indexOf().
 * </ul>
 */

console.log('\nArray Properties and Methods...');

/**
 * @const {array}
 */
const fruits = ['strawberries', 'apples', 'pears'];
/**
 * @type {string}
 */
let fruit;

console.log("\nRemove last value in array, then put it back (pop/push)");
fruit = fruits.pop();
fruits.push(fruit);
console.log (fruit, fruits);
console.log("\nRemove first value in array, then put it back (shift/unshift)");
fruit = fruits.shift();
fruits.unshift(fruit);
console.log (fruit, fruits);

console.log(`\tIs fruits an array? ${Array.isArray(fruits)}`);
console.log(`\tFruits is an array with ${fruits.length} members`);
console.log(`\t'apples' is stored at index: ${fruits.indexOf('apples')}`);

/**
 *  End of Code
 */