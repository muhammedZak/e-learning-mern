const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A course name is required'],
    unique: true,
    trim: true,
    maxLength: [40, 'Course name cannot exceed more than 40 charecters'],
    minLength: [10, 'Course name cannot be less than 10 charecters'],
  },
  instructor: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Instructor is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required for the course'],
    trim: true,
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'Summary is required for the course'],
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required for the course'],
  },
  difficulty: {
    type: String,
    required: [true, 'A course must have a difficulty'],
    enum: {
      values: ['beginner', 'intermediate', 'advanced', 'All levels'],
      message:
        'Difficulty is either: beginner, intermediate, advanced, All levels',
    },
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  priceDiscount: {
    type: Number,
    validate: {
      validator: function (val) {
        return val < this.price;
      },
      message: 'Discount price ({VALUE}) should be below regular price',
    },
  },
  photo: {
    imageUrl: String,
    public_id: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
