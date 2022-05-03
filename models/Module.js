import mongoose from 'mongoose';

const Schema = mongoose.Schema();



const ModuleSchema = new Schema({
  name: String,
  number: Number,
  lesson: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }],
  Quiz: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  }],
});



module.exports = mongoose.model('Module', ModuleSchema);