import { Schema, model } from 'mongoose'
//import { UserInterface } from '../types/UserTypes'

const UserSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    firstName:{
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
}, {
    // adiciona os campos createdAt e updatedAt
    timestamps: true
})

export default model('User', UserSchema)