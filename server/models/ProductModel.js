import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    rating: {
        type: Number,
        required: true,
    },
    comment:{
        type: String,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "user"
    },
})

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    titlemax: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
},
{
    timestamps:true
}
)

const Product = mongoose.model('Products', productSchema)

export default Product