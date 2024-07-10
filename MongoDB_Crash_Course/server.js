/**
 * @file
 * @description Mongoose Tutorial
 */

//import mongoose from 'mongoose';
import { mongoose }  from 'mongoose';

import {userModel} from  './user.js';

const uri    = 'mongodb://localhost:27017/myDatabase';
mongoose.connect(uri);


//const user = await userModel.create({ name: 'Robert', age: '39' });
try {
    const user = new userModel({ 
          name      : 'Robert'
        , age       : '58'
        , email     : 'Robert@Kuropkat.COM'
        , hobbies   : [ 'Reading', 'Drawing' ]
        , address   : { street: 'Happy St', city: 'Anytown' } 
    });
    user.save().then(() => console.log('User saved.'));
} catch (err) {
    console.error(err.ValidationError);    
}

