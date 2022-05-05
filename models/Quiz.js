import mongoose from 'mongoose';

const Schema = mongoose.Schema();



const QuizSchema = new mongoose.Schema({
  name: String,
  answers: [{ String }],
  questions: [{ String }],
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module'
  }
});




// Quiz.exports = mongoose.model('Quiz', ModuleSchema);

const Quiz = mongoose.model('Quiz', QuizSchema)

export { Quiz }