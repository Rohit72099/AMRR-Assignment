const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


mongoose.connect(process.env.DBURL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const itemSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  coverImage: String,
  additionalImages: [String]
},{timestamps: true});

const Item = mongoose.model('Item', itemSchema);

// GET all items
app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST a new item
app.post('/api/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json({ message: 'Item saved successfully' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
