'use strict';

import Joi from 'joi';
import MoviewarehouseSchema from '../schema/moviewarehouse';
import MoviewarehouseEntity from '../entity/moviewarehouse';

class MoviewarehouseManager {

  validate(data) {
    let {error, value} = Joi.validate(data, MoviewarehouseSchema);

    return new Promise((resolve, reject) => {
      if(error) {
        error.badRequest = true;
        reject(error.details[0])
      } else {
        resolve(value);
      }
    });
  }

  async getAll() {
    try{
      let moviewarehouseEntity = new MoviewarehouseEntity();

      let allMovies = await moviewarehouseEntity.getAll();

      return allMovies;
    } catch(error) {
      return Promise.reject(error);
    }
  }

  async getByID(id) {
    try{

      let moviewarehouseEntity = new MoviewarehouseEntity();

      let movie = await moviewarehouseEntity.getByID(id);

      return movie;
    } catch(error) {
      return Promise.reject(error);
    }
  }

  async register(data){
    try{
      let validatedData = await this.validate(data);

      let moviewarehouseEntity = new MoviewarehouseEntity();

      moviewarehouseEntity
        .setName(validatedData.name)
        .setEmail(validatedData.email)
        .setPhone(validatedData.phone)
        .setUsername(validatedData.username)
        .setPassword(validatedData.password);

      let user = await moviewarehouseEntity.register();

      return user;
    } catch(error) {
      return Promise.reject(error);
    }
  }
}

export default MoviewarehouseManager;
