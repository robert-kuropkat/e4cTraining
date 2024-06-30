/**
 * Loops
 * 
 * Demonsrate various looping mechanisms by looping over an array of structs.  Styles
 * demonsrated include a 'traditional' for loop with initializer, terminator and index,
 * a 'for-of' style loop which is new to me but a very nice, compact structure I can 
 * see being very useful for looping over arrays of complex structures and finallly 
 * the builtin Array.foreach() method which is a nice concept, but a bit cumbersome 
 * in that you have to pass it a callback function.
 * 
 * ToDo: Can functions be defined outside the the foreach() call and passed in?  
 * Something like:
 * 
 *    function CallMe () { ... do something ... };
 *    Array.function( CallMe() );
 * 
 * Also included, since the work much the same as Array.foreach(), map() and filter()
 * and as a bonus, stacking them, just cause...
 * 
 */

console.log('\nLoops and Arrays...');

const todos = [
      {
          id            : 1
        , text          : 'Take out trash'
        , isCompleted   : true
      }
    , {
          id            : 1
        , text          : 'Meeting with boss'
        , isCompleted   : true
      }
    , {
          id            : 1
        , text          : 'Dentist appt'
        , isCompleted   : false
      }
];

console.log("\nFor loop with iterator");
console.log("for (i=0; i<todos.length; i++) \n\t{ console.log(`${todos[i].text}`); }");
for (i=0; i<todos.length; i++)  { console.log(`\t${todos[i].text}`); }

console.log("\n'For-of' loop");
console.log("for (let todo of todos) \n\t{ console.log(`${todo.text}`); }");
for (let todo of todos)         { console.log(`\t${todo.text}`); }

console.log("\nForeach Array method");
todos.forEach( function(todo) { console.log(`\t${todo.text}`); } );

console.log("\nMap and Filter Array method (get text of completed items)");
const todoText = todos.filter( function(todo) { return todo.isCompleted === true; } ).map( function(todo) { return todo.text } );
console.log(todoText);

/**
 *  End of Code
 */
