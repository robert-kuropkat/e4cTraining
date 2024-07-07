/**
 * @file
 */

db = connect( 'mongodb://localhost:27017/myDatabase' );

printjson( db.movies.find({year: {$gt:1996}}).sort({'title': 1}) );

printjson(db.movies.find().count());
