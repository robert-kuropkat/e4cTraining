
/**
 * Functions
 * 
 * Demonsrate the creation and use of functions.  Functions are created in two
 * styles.  The first is the older style makinguse of the 'function' directive.
 * The second is the 'arrow function' style.
 * 
 * The arrow function style is newer to me and quite frankly looks more complicated
 * than it is worth in these simple examples.  I am assuming it will prove useful
 * in some later. more complex code constructs.
 * 
 * NOTE: Because these functions are small one-liners, I've coded them in a manner
 * I am prone to.  i.e. "one-lining" the whole function.  I've never believed 
 * punctuation deserves so much screen real estate unless it is blocking off larger
 * sections of code.
 */

console.log('\nFunctions...');

function ApplyDiscount_f(price) { return price * .75; }
console.log(`\tOld school function (25% discount)\t: ${ApplyDiscount_f(100)}`);

const ApplyDiscount_af = (price) => { return price *.80; }
console.log(`\tArrow function (20% discount)\t\t: ${ApplyDiscount_af(100)}`);

/**
 *  End of Code
 */