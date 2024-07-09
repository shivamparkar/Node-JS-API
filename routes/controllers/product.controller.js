const Product = require("../../models/product.model");


//get
const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

//get by id
const singleProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}


//update
const updateProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
    
        if (!product) {
          return res.status(400).json({ message: "product not found" });
        }
    
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    
}

//Create
const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}


//Delete
const deleteProduct = async ( req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
    
        if (!product) {
          return res.status(400).json({ message: "product not found" });
        }
    
        const deletedProduct = await Product.findById(id);
        res.status(200).json(deletedProduct);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}



module.exports = {
    getProducts,
    deleteProduct,
    createProduct,
    updateProduct,
    singleProduct
}