import mongoose from 'mongoose';

const Schema = mongoose.Schema();



const LessonSchema = new Schema({
  text: String,
});



module.exports = mongoose.model('Lesson', LessonSchema);