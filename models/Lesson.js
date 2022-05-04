import mongoose from 'mongoose';

const Schema = mongoose.Schema();



const LessonSchema = new Schema({
  name: Sting,
  text: String,
});



module.exports = mongoose.model('Lesson', LessonSchema);