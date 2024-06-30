//
// String Concatentation and Templates
//

console.log('\nString Concatination...');
message = 'My name is ' + name + '  and I am ' + age;
console.log("\t'My name is ' + name + '  and I am ' + age");
console.log('\t', message);
console.log('\nTemplate String...');
message = `My name is ${name} and I am ${age}`;
console.log("\t`My name is ${name} and I am ${age}`");
console.log('\t', message);

//
//  String Properties and Methods
//

console.log('\nString Properties and Methods...');
message = 'Hello World!';
console.log(`\t${message.substring(0,12)} has ${message.length} characters.\n\tThey are ${message.toUpperCase().split('')}`);
