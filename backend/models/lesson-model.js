const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content_type: {
    type: String,
    required: true,
    enum: ['video', 'document', 'quiz'],
  },
  module_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Module',
    required: true,
  },
  lesson_order: {
    type: Number,
    required: true,
  },
  content: {
    video_url: String,
    document_url: String,
    quiz_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'Qiuz',
    },
  },
  duration: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
