'use strict';

module.exports = function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
};
