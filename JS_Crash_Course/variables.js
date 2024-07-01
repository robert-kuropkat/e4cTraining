/**
 * @file
 * 
 * Set and check basic datatypes which in JavaScript include string,
 * number, boolean, null and undefined.
 * <p>
 * As per the video, I've learned that 'var' while still valid is no
 * longer in fashion with const and let being preferred.  I also found
 * it of particular curiosity that 'const' isn't really constant when
 * referring to more complex data structures since const will allow 
 * you to 'manipulate' the structure, just not reset it (i.e. use an
 * equal sign).
 */

/**
 * @const {string}
 */
const name      = 'John';
/**
 * @const {number}
 */
const age       = 30;
/**
 * @const {number}
 */
const rating    = 4.5;
/**
 * @const {boolean}
 */
const isCool    = true;
/**
 * @const {null}
 */
const x         = null;
/**
 * @const {undefined}
 */
const y         = undefined;
/**
 * @type {undefined}
 */
let   z;
/**
 * @type {string}
 */
let   message;                  // variable to reuse for console.log() calls

console.log('\nVariable Types...');
console.log('\tName   : ', typeof name);
console.log('\tAge    : ', typeof age);
console.log('\tRating : ', typeof rating);
console.log('\tisCool : ', typeof isCool);
console.log('\tx      : ', typeof x);
console.log('\ty      : ', typeof y);
console.log('\tz      : ', typeof z);

/**
 *  End of Code
 */