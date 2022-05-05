import { User } from '../models/user.js'
import { Profile } from '../models/Profile.js'
import { Quiz } from '../models/Quiz.js'

function index(req, res) {

}

function show(req, res) {

}

function create(req, res) {
  console.log(req.body)
  Quiz.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

function update(req, res) {
  Quiz.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

function deleteQuiz(req, res) {

}

export {
  index,
  show,
  create,
  update,
  deleteQuiz as delete,
}