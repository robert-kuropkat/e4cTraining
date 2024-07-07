/**
 * @file
 */

db = connect( 'mongodb://localhost:27017/myDatabase' );

db.movies.insertMany( [
    {
       title: 'Titanic',
       year: 1997,
       genres: [ 'Drama', 'Romance' ]
    },
    {
       title: 'Spirited Away',
       year: 2001,
       genres: [ 'Animation', 'Adventure', 'Family' ]
    },
    {
       title: 'Casablanca',
       genres: [ 'Drama', 'Romance', 'War' ]
    }
 ] )

