import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
  title: String,
  color: String,
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
