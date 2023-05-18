import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    quantity:{
        required: true,
        type: Number
    },
    price:{
        required: true,
        type: Number
    }
}, {
    timestamps: true
})

export default model('products', productSchema)