import mongoose from 'mongoose';

const Schema = mongoose.Schema();



const ModuleSchema = new mongoose.Schema({
  name: String,
  number: Number,
  lesson: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }],
  quiz: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  }],
});

// module.exports = mongoose.model('Modulezz', ModuleSchema);


const Module = mongoose.model('Module', ModuleSchema)

export { Module }