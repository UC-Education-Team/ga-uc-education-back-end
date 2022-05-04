import Entrepreneur from '../models/Entrepreneur.js'

function index(req, res) {
  Entrepreneur.find({})
    .then(entrepreneurs => res.json(entrepreneurs))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

async function show(req, res) {
  try {
    const foundEntrepreneur = await Entrepreneur.findOne({ _id: req.params.id })
    res.json(foundEntrepreneur)
  } catch (err) {
    console.log(err)
  }
}

async function create(req, res) {
  try {
    const newEntrepreneur = await Entrepreneur.create({
      name: req.body.name,
      internalId: req.body.internalId,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    })

    res.json(newEntrepreneur)
  } catch (err) {
    console.log(err)
    res.status(503).json({ msg: "oops server error 503 🔥😭" })
  }
}

async function update(req, res) {
  try {
    const options = { new: true }
    const updatedEntrepreneur = await Entrepreneur.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      options
    )
    res.json(updatedEntrepreneur)
  } catch (err) {
    console.log(err)
  }
}

async function deleteEntrepreneur(req, res) {
  try {
    await Entrepreneur.findByIdAndDelete(req.params.eventId)

    res.json("Entrepreneur deleted")
  } catch (err) {
    console.log(err)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteEntrepreneur as delete,
}