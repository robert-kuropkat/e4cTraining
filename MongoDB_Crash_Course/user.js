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
          name          : { type: String, validate: { validator: v => /^[a-zA-Z]+$/.test(v)
                                                    , message  : p => `${p.value} contains non-letters.` }}
        , age           : { type: Number, min: 1 }
        , email         : { type: String, required: true, lowercase: true }
        , createdAt     : { type: Date, default: () => Date.now(), immutable: true }
        , updatedAt     : { type: Date, default: () => Date.now()  }
        , bestFriend    : { type: SchemaTypes.ObjectId, ref: 'user' }  // The ref value is the model name, not the schema name
        , hobbies       : [String]
        , address       : addressSchema
    }
)
userSchema.virtual('namedEmail').get( function () { return `${this.name} <${this.email}>`});
userSchema.statics.getBestFriend = function (bff) { return this.where({ _id: bff }); }
userSchema.methods.getBestFriend = function ()    { return userModel.where({ _id: this.bestFriend }); }
userSchema.pre('save', function(next){this.updatedAt = Date.now(); next();});

const userModel = model('user', userSchema);
userModel.collection.drop();


export {userModel};