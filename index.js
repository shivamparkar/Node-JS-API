const express = require("express");
const app = express();
const port = 3000;
const productRoute = require("./routes/product.route.js");

//Model
const Product = require("./models/product.model.js");

//mongoose
const mongoose = require("mongoose");

//middle wear
app.use(express.json());
app.use(express.urlencoded({extended: false}))


//route
app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use('/api/products', productRoute);





//post
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //get
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

//get with id
// app.get("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

//update
// app.put("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(400).json({ message: "product not found" });
//     }

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

//Delete
// app.delete("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(400).json({ message: "product not found" });
//     }

//     const deletedProduct = await Product.findById(id);
//     res.status(200).json(deletedProduct);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

mongoose
  .connect(
    //connection string
  )
  .then(() => {
    console.log("connected to database");

    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("error", err);
  });
