/**
 * @file
 * 
 * Simple string manipulation such as old-school concatenation using the
 * '+' sign, sending multiple parameters separated by a comma (to functions
 * that accept that) and Template Strings which are new to me, but similar 
 * printf() in some languages (without the formating options) or Perl 
 * interpolation.
 * <p>
 * Also demonsrated, a sample of builtin string methods and properties such 
 * as substring(), length, toUpperCase() and split().
 * @author Robert Kuropkat <robert.kuropkat@gmail.com>
 */

console.log('\nString Concatination...');
message = 'My name is ' + name + '  and I am ' + age;
console.log("\t'My name is ' + name + '  and I am ' + age");
console.log('\t', message);
console.log('\nTemplate String...');
message = `My name is ${name} and I am ${age}`;
console.log("\t`My name is ${name} and I am ${age}`");
console.log('\t', message);


console.log('\nString Properties and Methods...');
message = 'Hello World!';
console.log(`\t${message.substring(0,12)} has ${message.length} characters.\n\tThey are ${message.toUpperCase().split('')}`);

/**
 *  End of Code
 */