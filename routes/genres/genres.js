const Joi = require('joi');
const express = require('express');
const router = express.Router();

let genres = [
  {id: 1, name: 'action'},
  {id: 2, name: 'comedy'},
  {id: 3, name: 'romantic'},
  {id: 4, name: 'kids'}
];

//validation
function validateGenres(data) {
  const schema = {
    id: Joi.number().integer(),
    name: Joi.string().min(1)
  }

  return Joi.validate(data, schema);
}

router.get('/', (req, res) => {
  res.send(genres);
});

router.get('/:id', (req, res) => {
  const { error, value } = validateGenres(req.params); //destructuring

  if(error) return res.status(400).send(error.details[0].message);

  let genresId = value.id;

  let genre = genres.find((g) => g.id === parseInt(genresId));
  res.send(genre);
});

//POST Request
router.post('/', (req, res) => {
  const { error, value } = validateGenres(req.body); //destructuring

  if(error) return res.status(400).send(error.details[0].message);

  genres.push(value);
  res.send(value);
});

//PUT Request
router.put('/:id', (req, res) => {
  const { error, value } = validateGenres(req.params); //destructuring

  if(error) return res.status(400).send(error.details[0].message);

  let genre = genres.find((g) => g.id === value.id);
  if(!genre) return res.status(404).send('id is not found');

  genre = {
    id: value.id,
    name: value.name
  }

  res.send(genre);
})

//DELETE Request
router.delete('/:id', (req, res) => {
  const { error, value } = validateGenres(req.params); //destructuring

  if(error) return res.status(400).send(error.details[0].message);

  let genre = genres.find((g) => g.id === value.id);
  if(!genre) return res.status(404).send('id is not found');

  let index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genres);
});

module.exports = router;