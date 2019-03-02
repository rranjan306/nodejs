'use strict';

import MoviewarehouseManager from '../manager/moviewarehouse';

class MoviewarehouseController {

  static getAll(req, res, next) {
    let moviewarehouseManager = new MoviewarehouseManager();

    moviewarehouseManager
      .getAll()
      .then((allMovies) => {
        return res.status(200).send(allMovies);
      })
      .catch((error) => {
        next(error);
      })
  }

  static getByID(req, res, next) {
    let id = Number(req.params.id);

    let moviewarehouseManager = new MoviewarehouseManager();

    moviewarehouseManager
      .getByID(id)
      .then((movie) => {
        return res.status(200).send(movie);
      })
      .catch((error) => {
        next(error);
      });
  }

  static register(req, res, next) {
    let data = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone
    };
   
  let moviewarehouseManager = new MoviewarehouseManager();

  moviewarehouseManager
    .register(data)
    .then((registered) => {
      return res.status(201).send(registered);
    })
    .catch((err) => {
      next(err);
    });
  }
}

export default MoviewarehouseController;
