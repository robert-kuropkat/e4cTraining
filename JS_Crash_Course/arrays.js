/**
 * @file
 * Demonstrate creation and manipulation of arrays.  Items demonstrated
 *   - Creation of Array
 *   - Remove and add a the last member of the array (pop/push)
 *   - Remove and add the first member of the array (shift/unshift)
 *   - Builtin array methods and properties such as isArray(), length and indexOf().
 * @author Robert Kuropkat <robert.kuropkat@gmail.com>
 * 
 */

console.log('\nArray Properties and Methods...');

/**
 * @class
 * @summary Create a Fruits list object
 * @description Contains a list (Array) of fruits and the "current" fruit.  All Fruits are
 *              stored as lower case.
 * @example 
 * const myFruits = new Fruits();
 * myFruit = myFruits.addToFront('strawberries');
 * @author  Robert Kuropkat
 */
class Fruits {
    #fruits = [];
    #fruit  = null;

    /**
     * @constructor
     * @description Simple constructor taking no paraemters
     * @returns {Fruits} new Fruits object
     */
    constructor () {}
    /**
     * @method
     * @description Removes first fruit from list and returns it.  Sets Current Fruit to null.
     * @returns {string} Requested Fruit
     */
    removeFirst () 
    {
        this.#fruit = null; 
        return this.#fruits.shift(); 
    }
    /**
     * @method
     * @description Removes last fruit from list and returns it.  Sets Current Fruit to null.
     * @returns {string} Requested Fruit
     */
    removeLast  () 
    { 
        this.#fruit = null; 
        return this.#fruits.pop(); 
    }
    /**
     * @method
     * @description Adds fruit to end of Fruits Array and returns the fruit converted to 
     *              lower case.
     * @returns {string} Current Fruit
     */
    addToEnd (fruit) 
    {
        this.#fruits.push(fruit.toLowerCase());
        return this.#fruit = fruit.toLowerCase();
    }
    /**
     * @method
     * @description Adds fruit to front of Fruits Array and returns the fruit converted to 
     *              lower case.
     * @param {string} fruit  Current Fruit
     */
    addToFront (fruit) 
    {
        this.#fruits.unshift(fruit.toLowerCase());
        return this.#fruit = fruit.toLowerCase();
    }
    /**
     * @method
     * @description Return a count of all fruits in the list
     * @returns {number}
     */
    getFruitCount () { return this.#fruits.length; }
    /**
     * @method
     * @description return the Array index location of the requested fruit
     * @param   {string} fruit 
     * @returns {number}
     */
    whereIsFruit (fruit) 
    {
        return this.#fruits.indexOf(fruit.toLowerCase());
    }
    /**
     * @method 
     * @description Set the value of "Current" fruit and return it converted to lower case.
     * @param {string} fruit 
     * @returns {string}
     */
    setCurrentFruit (fruit) 
    {
        this.#fruit = fruit.toLowerCase();
        return this.#fruit ;
    }
    /**
     * @method
     * @description  Return the Currnet fruit (it should already be in lower case)
     * @returns {string}
     */
    getCurrentFruit () { return this.#fruit; }
    /**
     * @method
     * @description Test if the Fruits list is of type Array
     * @returns {boolean} 
     */
    isListArray () { return Array.isArray(this.#fruits); }
    /**
     * @method
     * @description Return the entire Fruits list as an array
     * @returns {Array}  Fruits
     */
    getFruitList () { return this.#fruits; }
}

/**
 * @const {Fruits}
 */
const myFruits = new Fruits();
/**
 * @type {string}
 */
let myFruit    = '';

myFruit = myFruits.addToFront('strawberries');
myFruit = myFruits.addToFront('apples');
myFruit = myFruits.addToFront('pears');

console.log("\nRemove last value in array, then put it back (pop/push)");
myFruit = myFruits.removeLast();
myFruit = myFruits.addToEnd(myFruit);
console.log (myFruit, myFruits.getFruitList());

console.log("\nRemove first value in array, then put it back (shift/unshift)");
myFruit = myFruits.removeFirst();
myFruit = myFruits.addToFront(myFruit);
console.log (myFruit, myFruits.getFruitList());

console.log(`\tIs fruits an array? ${myFruits.isListArray()}`);
console.log(`\tFruits is an array with ${myFruits.getFruitCount()} members`);
console.log(`\t'apples' is stored at index: ${myFruits.whereIsFruit('apples')}`);

/**
 *  End of Code
 */