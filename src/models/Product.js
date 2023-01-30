import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String
},{
    timestamps: true, //guarda la fecha de creacion y actualizacion
    versionKey: false   //cuando se crea el doc no aparece el __v
})

export default model('Product', productSchema);

