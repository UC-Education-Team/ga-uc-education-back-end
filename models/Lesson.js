import mongoose from 'mongoose';

const Schema = mongoose.Schema();



const LessonSchema = new mongoose.Schema({
  text: String,
  name: String,
  moduleId: String,
});



// module.exports = mongoose.model('Lesson', LessonSchema);


const Lesson = mongoose.model('Lesson', LessonSchema)

export { Lesson }