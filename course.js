const mongoose = require("mongoose");
const isEmail = require("validator").isEmail;
const slugify = require("slugify");

//1. Define Schema
const courseSchema = new mongoose.Schema({
  //_id: ObjectId
  title: {
    type: String,
    required: true,
    // validate: isEmail, // in this case is not necessary -.-
    description: {
      type: String,
      minlength: [10, "doesn't meet minimun length"],
      maxlength: 300,
    },
  },
  numberOfTopics: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  publishedAd: {
    type: Date,
  },
  slug: {
    type: String,
    required: true,
  },
});
//Virtuals

courseSchema
  .virtual("info")
  .get(function () {
    //this => document
    return `${this.description}. Topics: ${this.numberOfTopics}. release date:${this.publishedAt}`;
  })
  .set(function (value) {});

//Middlewares => * validate  - save - remove - updateOne - deleteOne - init (hook sync)

courseSchema.post();
courseSchema.pre("validate", function (next) {
  /**Professional Course Mongoose => professional-course-mongoose */
  this.slug = slugify(this.title);
  next();
});
//2. Define Model
// mongoose.model('Course', courseSchema);
const Course = model("Course", courseSchema);
module.exports = Course;

/**
 * Note:
 * you can use match: /regular expression/ to validate that input
 * you can import from validator and then in validate: isEmail
 */
