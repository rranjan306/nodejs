'use strict';

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root123',
    database: 'movieswarehouse'
  }
});

module.exports = knex;
