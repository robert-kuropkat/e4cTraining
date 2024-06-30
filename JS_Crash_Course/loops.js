//
// Loops
//

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

