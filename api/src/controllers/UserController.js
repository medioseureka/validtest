const { User } = require('../models');

exports.index = (req, res) => {
  User.findAll()
    .then( response => {
      return res.status(200).json(response)
    })
    .catch( error => {
      return res.status(400).json({ message: error.message })
    })
}

exports.store = (req, res) => {
  User.create({
    name: req.body.name,
    lastname: req.body.lastname
  })
    .then( response => {
      res.status(200).json(response)
    })
    .catch( error => {
      res.status(400).json({ message: error.message })
    });
}

exports.edit = (req, res) => {
  const { ids } = req.body;

  ids.forEach(id => {
    User.update(
      {
        processed: true
      },
      {
        where: { id }
      })
  });
  res.status(200).json('updated');
}

exports.update = (req, res) => {
  User.update(
    {
      name: req.body.name,
      lastname: req.body.lastname
    },
    {
      where: { id: req.body.id }
    })
    .then( response => {
      res.status(200).json(response)
    })
    .catch( error => {
      res.status(400).json({ message: error.message })
    });
}

