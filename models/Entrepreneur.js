import mongoose from 'mongoose';

const Schema = mongoose.Schema();



const EntrepreneurSchema = new Schema({
  name: String,
  internalId: String,
  email: String,
  phone: String,
  address: String,
  modules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module'
  }]
});



module.exports = mongoose.model('Entrepreneur', EntrepreneurSchema);