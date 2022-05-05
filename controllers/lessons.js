import { User } from '../models/user.js'
import { Profile } from '../models/Profile.js'
import { Lesson } from '../models/Lesson.js'
import { Module } from '../models/Module.js'

function index(req, res) {

}

async function show(req, res) {
  try {
    const foundModule = await Module.findOne({_id: req.params.id }).populate('lesson quiz')
    res.json(foundModule)
  } catch (err) {
    console.log(err)
  }
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
  deleteLesson as delete,
}

