import { User } from '../models/user.js'
import { Profile } from '../models/Profile.js'
import { Quiz } from '../models/Quiz.js'

function index(req, res) {
  Quiz.find({})
    .populate('module')
    .then(result => (res.json(result)))
    .catch(err => console.log(err))
}

function show(req, res) {

}

async function create(req, res) {
  const newQuiz = await Quiz.create(req.body)
  const selectedModule = await Module.find({ _id: newQuiz.body.module })
  selectedModule.quiz.push(newQuiz._id)
  await selectedModule.save()
  return res.send(newQuiz)
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