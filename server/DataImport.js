import express from 'express'
import asyncHandler from 'express-async-handler'
import User from './models/UserModel.js'
import users from './data/users.js'
import Product from './models/ProductModel.js'
import products from './data/products.js'

const ImportData = express.Router()

ImportData.post("/user",
    asyncHandler(async (req, res) => {
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    })
);

ImportData.post("/product", asyncHandler(async (req, res) => {
    const importProduct = await Product.insertMany(products);
    res.send({ importProduct });
})
);

export default ImportData