/**
 * @file
 * @description MongoDB Playground 
 */ 
/* global use, db */

/**
 * Select the database to use. cleanup previous runs and recreate.
 */
use('mongodbVSCodePlaygroundDB');
db.movies.drop();
db.getCollection('movies').insertMany([
    {
        title : 'Titanic',
        year  : 1997,
        genres: [ 'Drama', 'Romance' ]
     },
     {
        title : 'Spirited Away',
        year  : 2001,
        genres: [ 'Animation', 'Adventure', 'Family' ]
     },
     {
        title : 'Casablanca',
        genres: [ 'Drama', 'Romance', 'War' ]
     }
]);

/**
 * Count and print  number of movies in collection.
 */
const movieCount = db.movies.find().count();
console.log(`${movieCount} total movies in the collection.`);

/**
 * Create a simple query aggregation
 */
const moviesAfterY2K = [ {$match: { 'year': { $gt: 2000 }}} ];
db.movies.aggregate(moviesAfterY2K);
