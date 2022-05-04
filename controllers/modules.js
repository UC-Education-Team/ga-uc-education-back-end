import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'
import { Module} from '../models/module.js'

function index(req, res) {

}

function show(req, res) {

}

function create(req, res) {

}

function update(req, res) {

}

function deleteModule(req, res) {

}

function moduleCall(req, res) {
  Module.find({})
  .then(result => console.log(res.json(result)))
  .catch(err => console.log(err))
} 


export {
  index,
  show,
  create,
  update,
  deleteModule as delete,
  moduleCall
}