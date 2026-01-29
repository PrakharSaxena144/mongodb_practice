use ("ecommerce");

// db.products.find({"name": "Wireless Mouse"});
// with filters inside the parantheses

// db.products.find({ price: { $gt: 1000 } }) // greater than 1000
// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })
// db.products.find({}, { name: 1, price: 1, _id: 0 })

db.products.find().sort({ price: -1 }).limit(2)

// Find all products in the "Electronics" category with price greater than 1000