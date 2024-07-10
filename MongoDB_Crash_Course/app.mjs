/**
 * @file
 * @description Small NodeJS script to connect to a MongoDB Database and execute a single query
 */

import { MongoClient } from  'mongodb';

const uri    = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

try {
  await client.connect();
  const db        = client.db('myDatabase');
  const movieList = db.collection('movies');
  const pipeline  = [ {$match: { 'year': { $gt: 2000 }}} ];
  const agg       = await movieList.aggregate(pipeline).toArray();
  console.log(agg);    
} catch (e) { console.error(e);
} finally   { await client.close(); }
