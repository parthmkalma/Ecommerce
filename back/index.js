const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose"); // Import Mongoose
app.use(cors());
app.use(express.json());

// Step 1: Set up a MongoDB connection using Mongoose
mongoose
  .connect("mongodb://0.0.0.0:27017/ecomcart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfully");
  })
  .catch(() => {
    console.log("error");
  });

// Step 2: Define a Mongoose schema
const cartItemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
  // Add more fields as needed for your cart items
});

// Step 3: Create a Mongoose model based on the schema
const CartItem = mongoose.model("CartItem", cartItemSchema);

app.post("/cartadata", async (req, res) => {
  try {
    // Step 4: Inside the route handler, create an instance of the Mongoose model and save it to the database
    const productName = req.body.productData;
    console.log(productName);

    const cartItem = new CartItem(productName); // Create a new cart item instance
    await cartItem.save(); // Save it to the database

    console.log(`Added to cart: ${productName}`);
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/cartitems", async (req, res) => {
  try {
    const cartItems = await CartItem.find({});
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cart items" });
  }
});
// Create a route to delete all cart items
app.delete("/cartitemss", async (req, res) => {
  try {
    await CartItem.deleteMany({});
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting cart items" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
