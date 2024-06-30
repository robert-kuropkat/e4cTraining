/**
 * Object coding style examples.  
 * 
 * The below code sets up and demonstrates usage  of three Object Oriented 
 * implementations available within JavaScript.  They  are Object Literanls 
 * (structs), Objects implemetned as Functions (pre ESv2015)  and Objects 
 * implemented as Classes (post ESv2015).
 */

console.log('\nObjects...');

console.log('\n\tObject Literal');

/**
 * person
 * @class
 * 
 * @description
 * Create an instance of a person and initial First name, Last name
 * and age.
 * 
 * This version of the person class uses Object Literals to implement
 * a struct like object.
 * 
 * @summary person class as an Object Literal
 * @author  Robert Kuropkat
 * 
 * getFullName() created as part of the Object Literal
 * 
 * @returns {person} new person Object
 */
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
    /**
     * @method getFullName
     * returns a concatenated string of first and last name separated 
     * by a space
     * 
     * @returns {string} firstName <space> lastName
     */
    , getFullName : function () { return `${this.firstName} ${this.lastName}` }
}
/**
 * Add the person.email attribute after creation of the initial struct.
 */
person.email = 'john@gmail.com';

/**
 * Example of 'destructuring' or pulling out an attribute so it can be
 * accessed directly instead of through the 'dot' notation.
 */
const { address } = person;

/**
 * The following code makes use of the 'dot' notation (person.age), the
 * 'dot' notation on a deconstructed variable (address.city) and the
 * method/function getFullName().
 */
console.log(`\t${person.getFullName()} is ${person.age} years old.`);
console.log(`\tHe lives on ${address.street} in ${address.city}, ${address.state}`);
console.log(`\tHe loves ${person.hobbies[1]}.`);
console.log(`\tYou can email him at ${person.email}`);

/**
 * Example of JSON serialization.
 */
console.log('JSON ', JSON.stringify(person));


console.log('\n\tObject function with method prototypes');

/**
 * Person
 * @class
 * 
 * @description
 * Create an instance of a person and initialize First name, Last name
 * and age.
 * 
 * This version of the Person class uses the function directive to 
 * create an object in the pre-ES6 manner.
 * 
 * @summary Create a person object using the 'function' directive
 * @example new Person('Jane', 'Doe', 30)
 * @author  Robert Kuropkat
 * 
 * getFullName() created as a method prototype 
 * 
 * @param   {string*} firstName person's given name 
 * @param   {string} lastName   perons's family name
 * @param   {number} age        person's age
 * @returns {Person}            new Person Object
 */
function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.age       = age;
    
}
/**
 * @method getFullName
 * returns a concatenated string of first and last name separated 
 * by a space
 * 
 * @returns {string} firstName <space> lastName
 */
Person.prototype.getFullName = function  () { return `${this.firstName} ${this.lastName}` }

/**
 * Create person Jane Doe, age 30, display the object to the console
 * then display the full name using the getFullName() method.
 */
const person1 = new Person('Jane', 'Doe', 30);
console.log(person1);
console.log(person1.getFullName());


console.log('\n\tClass');

/** 
 * PersonClass
 * @class 
 * 
 * @description
 * Create an instance of a person and initialize First name, Last name
 * and age.
 * 
 * This version of the Person class uses the ES6 'class' directive
 * 
 * @summary Create a person object using the 'class' directive
 * @example new PersonClass('Jimmy', 'Doe', 5)
 * @author  Robert Kuropkat
 */
class PersonClass  {
    /**
     * 
     * @constructor
     * @param   {string} firstName person's given name 
     * @param   {string} lastName   perons's family name
     * @param   {number} age        person's age
     * @returns {PersonClass}       new Person Object
     */
    constructor (firstName, lastName, age)
    {    
        /** @public */ this.firstName = firstName;
        /** @public */ this.lastName  = lastName;
        /** @public */ this.age       = age;
    }    
    /**
     * returns a concatenated string of first and last name separated 
     * by a space
     * 
     * @returns {string} firstName <space> lastName
     */
    getFullName() { return `${this.firstName} ${this.lastName}` }
}

/**
 * Create person Jimmy Doe, age 5, display the object to the console
 * then display the full name using the getFullName() method.
 */
const person2 = new PersonClass('Jimmy', 'Doe', 5);
console.log(person2);
console.log(person2.getFullName());

/**
 *  End of Code
 */