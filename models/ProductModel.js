const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,

    },
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    sellerId: {
        type: String,
        required: true,
    },
    sellerName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountAmount: {
        type: Number,
        required: true,
    },
    // productPictures: [{
    //     type: String,
    //     required: false,
    // }]

});

// Update the updatedAt field before saving the document, only if it's an update
productSchema.pre('save', function (next) {
    if (this.isModified()) {
        this.updatedAt = new Date();
    }
    next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;