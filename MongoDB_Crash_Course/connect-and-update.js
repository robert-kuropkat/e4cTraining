/**
 * @file
 */
/* global connect */

const db = connect( 'mongodb://localhost:27017/myDatabase' );

db.movies.updateOne({title: 'Casablanca'}, {$set: {year: 1998}});
