/**
 * @file
 * @description USer Schema for Mongoose Tutorial
 */
/* global  */

import { Schema, SchemaTypes, model }  from 'mongoose';

const addressSchema = new Schema(
    {
          street: String
        , city  : String
    }
)

const userSchema = new Schema(
    {
          name          : String
        , age           : { type: Number, min: 1 }
        , email         : { type: String, required: true, lowercase: true }
        , createdAt     : { type: Date, default: () => Date.now(), immutable: true }
        , updatedAt     : { type: Date, default: () => Date.now()  }
        , bestFriend    : SchemaTypes.ObjectId
        , hobbies       : [String]
        , address       : addressSchema
    }
)

const userModel = model('user', userSchema);
userModel.collection.drop();


export {userModel};