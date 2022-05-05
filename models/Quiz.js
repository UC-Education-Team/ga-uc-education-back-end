import mongoose from 'mongoose';

const Schema = mongoose.Schema();



const QuizSchema = new mongoose.Schema({
  answers: [String],
  questions: [[String]],
});



// Quiz.exports = mongoose.model('Quiz', ModuleSchema);

const Quiz = mongoose.model('Quiz', QuizSchema)

export { Quiz }