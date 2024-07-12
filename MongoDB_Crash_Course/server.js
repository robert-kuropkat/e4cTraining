/**
 * @file
 * @description Mongoose Tutorial
 */

import { mongoose }  from 'mongoose';
import {userModel} from  './user.js';

const uri    = 'mongodb://localhost:27017/myDatabase';
mongoose.connect(uri);

try {
    const user = new userModel({ 
          name      : 'Robert'
        , age       : '58'
        , email     : 'Robert@Kuropkat.COM'
        , hobbies   : [ 'Reading', 'Drawing' ]
        , address   : { street: 'Happy St', city: 'Anytown' } 
    });
    await user.save().then(() => console.log('User saved.'));

    const bff = new userModel({ 
        name      : 'Invisible'
      , age       : '58'
      , email     : 'Invisible@Kuropkat.COM'
      , hobbies   : [ 'Reading', 'Drawing' ]
      , address   : { street: 'Happy St', city: 'Anytown' } 
    });
    await bff.save().then(() => console.log('BFF saved.'));

    user.bestFriend = bff._id;
    await user.save().then(() => console.log('bestfriend updated.'));
    await user.populate('bestFriend');   // Note: Saves nothing to the database
    console.log(user);

    console.log('Virtual Field (namedEmail): ', user.namedEmail);
    const friend = await userModel.getBestFriend(user.bestFriend);
    console.log( `Static Method (getBestFriend) ${friend}` );
    const myBFF = await user.getBestFriend();
    console.log(`Object Method (getMyBestFriend) ${myBFF}`);

} catch (err) {
    console.error(err.ValidationError);    
}

