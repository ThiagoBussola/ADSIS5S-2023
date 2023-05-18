import { Schema, model } from 'mongoose'


const booksSchema = new Schema({
    name: {
        require: true,
        type: String
    },
    author: {
        require: true,
        type: String
    },
    ISBN: {
        require: true,
        type: String
    },
    //editora vem depois

})

export default model('Book', booksSchema)