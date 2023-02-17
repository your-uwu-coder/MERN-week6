const Product = require('../models/product.models')

module.exports = {

    allProducts: (request, response) => {
        Product.find()
            .then((allProducts) => {
                response.json(allProducts)
            })
            .catch((err) => {
                response.status(500).json(err)
            })
    },

    oneProduct: (request, response) => {
        Product.findOne({_id: request.params.id})
            .then((oneProduct) => {
                response.json(oneProduct)
            })
            .catch((err) => {
                response.status(500).json(err)
            })
    },

    newEntry: (request, response) => {
        Product.create(request.body)
            .then((newProduct) => {
                response.json(newProduct)
            })
            .catch((err) => {
                response.status(500).json(err)
            })
    },

    updateProduct: (request, response) => {
        Product.findOneAndUpdate({_id: request.params.id}, request.body, { new:true, runValidators: true } )
        .then(updatedProduct => {
            response.json(updatedProduct)
        })
        .catch((err) => {
            response.status(500).json(err)
        })
    },

    deleteProduct: (request, response) => {
        Product.deleteOne({ _id: request.params.id })
        .then((res) => {
            response.json(res)
        })
        .catch((err) => {
            response.status(500).json(err)
        })
    }

}