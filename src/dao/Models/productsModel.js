import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  thumbnail: String,
  code: String,
  stock: Number,
});

const productsModel = mongoose.model('Product', productSchema);

export default productsModel;
