
//
//  If statements
//
console.log('\nIf statements...');

// 1 < A

let stringNumber = '1';

if      ( stringNumber ==   1  ) { console.log("\t'stringNumber' is either a string or a number"); };

if      ( stringNumber ===  1  ) { console.log("\t'stringNumber' is a number, not a string"); }
else if ( stringNumber === '1' ) { console.log("\t'stringNumber' is a string, not a number"); }

if (  stringNumber < 2
   && stringNumber > 0
   ) { console.log( "\tstringNumber must be One" ) }


let variableType = typeof(stringNumber) === "string" ? "String" : "Something Else";
console.log(`\nTernary Operator`);
console.log(`\tstringNumber variable is type: ${variableType}`);

//stringNumber = true;
variableType = typeof(stringNumber);

console.log(`\nSwitch Statement`);
switch (variableType) {
    case 'string':
        console.log('\tVariable type is a string');
        break;
    case 'boolean':
        console.log('\tVariable type is a boolean');
        break;
    default:
        console.log('\tVariable type is something else');
        break;
}
