//
// Arrays
//

console.log('\nArray Properties and Methods...');

const fruits = ['strawberries', 'apples', 'pears'];
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
