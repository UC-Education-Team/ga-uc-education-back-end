import { User } from '../models/user.js'
import { Profile } from '../models/Profile.js'
import { Lesson } from '../models/Lesson.js'

function index(req, res) {

}

function show(req, res) {

}

function create(req, res) {
  Lesson.create(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

function update(req, res) {
  Lesson.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

function deleteLesson(req, res) {

}

export {
  index,
  show,
  create,
  update,
  deleteModule as delete,
}