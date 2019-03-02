function log(req, res, next) {
  console.log('i m custom :)');
  next();
}

module.exports = log;
