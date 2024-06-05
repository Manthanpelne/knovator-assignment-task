const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


//products
const products = [
  { id: 1, name: 'Microsoft Surface', image: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08520136_1.png', description: 'Description for Product 1', price: 100 },
  { id: 2, name: 'Apple Iphone 15', image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708677095/Croma%20Assets/Communication/Mobiles/Images/300749_0_hyore5.png?tr=w-640', description: 'Description for Product 2', price: 150 }
]


// API to fetch products
app.get('/api/products', (req, res) => {
  res.json(products);
});


// API to place order
app.post('/api/orders', (req, res) => {
  const { firstName, lastName, address, cart } = req.body;

  if (!firstName || !lastName || !address || !cart || cart.length === 0) {
    return res.status(400).json({ message: 'Invalid order data' });
  }
  console.log('Order placed:', { firstName, lastName, address, cart });
  res.json({ message: 'Order placed successfully' });
});




app.listen(8080, () => {
  console.log("Server is running on 8080");
});