
//
// Object Lieteral
//

console.log('\nObjects...');

console.log('\n\tObject Literal');

const person = 
{
      firstName : 'John'
    , lastName  : 'Doe'
    , age       : 30
    , hobbies   : ['music', 'movies', 'sports']
    , address   : { street  : '50 Main St.'
                  , city    : 'Anytown'
                  , state   : 'FL'
                  }
}
person.email = 'john@gmail.com';

// Destructuring

const { firstName, lastName } = person;

console.log(`\t${firstName} ${lastName} is ${person.age} years old.`);
console.log(`\tHe lives on ${person.address.street} in ${person.address.city}, ${person.address.state}`);
console.log(`\tHe loves ${person.hobbies[1]}.`);
console.log(`\tYou can email him at ${person.email}`);

console.log('JSON ', JSON.stringify(person));

//
// Object function
//

console.log('\n\tObject function with method prototypes');

function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.age       = age;
    
}
Person.prototype.getFullName = function  () { return `${this.firstName} ${this.lastName}`}

const person1 = new Person('Jane', 'Doe', 30);
console.log(person1);
console.log(person1.getFullName());

//
// Class
//

console.log('\n\tClass');

class PersonClass  {
    constructor (firstName, lastName, age)
    {    
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age       = age;
    }    
    getFullName() { return `${this.firstName} ${this.lastName}`}
}

const person2 = new PersonClass('Jimmy', 'Doe', 5);
console.log(person2);
console.log(person2.getFullName());
