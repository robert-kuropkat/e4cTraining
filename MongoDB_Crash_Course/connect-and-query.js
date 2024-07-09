/**
 * @file
 */
/* global connect printjson */

const db = connect( 'mongodb://localhost:27017/myDatabase' );

printjson( db.movies.find({year: {$gt:2000}}).sort({'title': 1}) );

printjson({'rowCount' : db.movies.find().count()});
