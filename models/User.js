const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({

    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now()
    }
})

UserSchema.methods.validPassword = (password, savedPassword) =>{
    bcrypt.compare(password, savedPassword,(err,matched)=>{
        if(err) return err;
        if(matched) return matched;
    })
}

module.exports = mongoose.model('users',UserSchema);