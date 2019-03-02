'use strict';

import knex from '../../../database/knex-connection';
import _ from 'lodash';

class MoviewarehouseEntity {

  constructor() {
    this.model = {};
  }

  setName(name) {
    this.model.name = name;
    return this;
  }

   setEmail(email) {
    this.model.email = email;
    return this;
  }

   setPhone(phone) {
    this.model.phone = phone;
    return this;
  }

   setUsername(username) {
    this.model.username = username;
    return this;
  }

  setPassword(password) {
    this.model.password = password;
    return this;
  }

  getFillable() {
    return ['name', 'email', 'phone', 'username', 'password'];
  }

  getDisplayable() {
    return ['id', 'username', 'email'];
  }

  async getAll() {
    try{
      let feilds = this.getDisplayable();
      let allMovies = knex.queryBuilder()
                      .select(feilds)
                      .from('user');

      return allMovies;
    } catch(error) {
      return Promise.reject(error);
    }
  }

  async  getByID(id) {
    try{
      let feilds = this.getDisplayable();
      let movie = await knex.queryBuilder()
                            .first(...feilds)
                            .from('user')
                            .where({
                              id: id
                            });

      return movie;
    } catch(error) {
      return Promise.reject(id);
    }
  }

  async register() {
    try{
      let columns = this.getFillable();
      let user = await knex.queryBuilder('use')
                      .insert(_.pick(this.model, columns));

    return user;
    } catch(err) {
      return Promise.reject({message: "entity"});
    }
  }
}

export default MoviewarehouseEntity;
