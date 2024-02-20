const express = require("express");
const { addProduct, getAllProducts, getProduct } = require("../Controller/ProductController");
const router = express.Router()


router.route('/add-product').post(addProduct)
router.route('/get-product').get(getAllProducts)
router.route('/get-product/byId').post(getProduct)

module.exports = router