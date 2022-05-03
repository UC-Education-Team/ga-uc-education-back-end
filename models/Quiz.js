import mongoose from 'mongoose';

const Schema = mongoose.Schema();



const QuizSchema = new Schema({
  answered: [String],
  questions: [String],
});



Quiz.exports = mongoose.model('Quiz', ModuleSchema);