const mongoose = require('mongoose');
const isEmail = require('validator').isEmail; 

//1. Define Schema
const courseSchema = new mongoose.Schema({
 //_id: ObjectId
  title: {
    type: String,
    required: true, 
    validate: isEmail, // in this case is not necessary -.-
  description: {
    type: String,
    minlength: [10,"doesn't meet minimun length"],
    maxlength: 300

    }
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
courseSchema.virtual('info')
  .get(function(){
    //this => document
    return `${this.description}. Topics: ${this.numberOfTopics}. release date:${this.publishedAt}`
  })
  .set(function(value){
    
  });
//2. Define Model
mongoose.model('Course', courseSchema);

/**
 * Note: 
 * you can use match: /regular expression/ to validate that input
 * you can import form validator and then in validate: isEmail
 */