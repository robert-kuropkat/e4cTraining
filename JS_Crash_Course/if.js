/**
 * Branching Logic
 * 
 * Demonstrate various branching constructs.  In particular the if/else if, Ternary
 * operator and the switch statement.
 * 
 * Also of interest is the difference between '==' and '===' which is new to me and
 * so demonsrated below
 * 
 * NOTE: This also contains examples of my default coding style.  The first is to 
 * flatten or "one-line" simple if statements.  I feel devoting entire lines to 
 * opening and closing punctuation to be a waste of screen real estate unless they
 * are blocking of larger sections of code.
 * 
 * I also tend to align punctuation and other markers such as opening and closing
 * braces, equalit comparisons, etc.  This is done because, especially on one-line
 * type statements the difference between the 'if' and and the 'else' can be subtle.
 * This alignment usually makes it easier to distinguish the difference.
 * 
 * Finally, when I have a complex 'if' directive, I tend to put them on separate lines
 * and align them.  Again, I simply feel this is more readable.
 * 
 * P.S.  I've always been a big fan of the Ternary Operator... :-)
 */

console.log('\nIf statements...');

/**
 * Set a variable to the string '1', then do comparisons using '==' and '==='
 * against both a string and a number value.
 * 
 * ToDo:  is there a not euqal, grater than or less than version of '===' that compares
 * the value and does a type check?  Is there any use to such a thing?
 */

let stringNumber = '1';

if      ( stringNumber ==   1  ) { console.log("\t'stringNumber' is either a string or a number"); };

if      ( stringNumber ===  1  ) { console.log("\t'stringNumber' is a number, not a string"); }
else if ( stringNumber === '1' ) { console.log("\t'stringNumber' is a string, not a number"); }

if (  stringNumber < 2
   && stringNumber > 0
   ) { console.log( "\tstringNumber must be One" ) }

/**
 * use the Ternary Operator and typeOf() function to check if the variable is a string.
 * The use of '===' in this case was unneccesary...
 */
let variableType = typeof(stringNumber) === "string" ? "String" : "Something Else";
console.log(`\nTernary Operator`);
console.log(`\tstringNumber variable is type: ${variableType}`);

/**
 * Use a switch statement to check variable type.  Obviously the switch statement
 * is not complete for all data types.
 */
console.log(`\nSwitch Statement`);

switch (typeof(stringNumber)) {
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

/**
 *  End of Code
 */