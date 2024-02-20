const Product = require("../models/ProductModel")

async function addProduct(req, res) {
    const data = req.body;
    // console.log(body)
    // res.status(201).json(body);

    // await Product.create({
    //     productId: body.productId,
    //     productName: body.productName,
    //     productDescription: body.productDescription,
    //     sellerId: body.sellerId,
    //     sellerName: body.sellerName,
    //     brand: body.brand,
    //     category: body.category,
    //     subCategory: body.subCategory,
    //     price: body.price,
    //     discountAmount: body.discountAmount
    // });

    const product = new Product(data);

    const circleId = req.body.circleId;
    // Save the circle with the updated signalIds
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function getProduct(req, res) {
    const { productId } = req.body;
    const product = await Product.findOne({ productId: productId });

    if (product) {
        res.status(200).json({
            success: true,
            product,
        });
    } else {
        return next(new ErrorHandler("No circle for this id.", 401));
    }
};

async function getAllProducts(req, res) {
    const product = await Product.find();

    if (product) {
        res.status(200).json({
            success: true,
            product,
        });
    } else {
        return next(new ErrorHandler("No product found.", 401));
    }
};

module.exports = { addProduct, getProduct, getAllProducts }