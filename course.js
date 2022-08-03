const mongoose = require('mongoose');

//1. Define Schema
const courseSchema = new mongoose.Schema({
 //_id: ObjectId
  title: {
    type: String,
    required: true, 
    validate:{
      validator: function(value){
        return true
      },
      message: 'invalidate input'
    }
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 300

  },
  numberOfTopics: {
    type: Number,
    default: 0,
    min:0,
    max: 100
  },
  publishedAd: {
    type: Date
  },
 
})
//2. Define Model
mongoose.model('Course', courseSchema);

/**
 * Note: 
 * you can use match: /regular expression/ to validate that input
 */