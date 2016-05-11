
var bcrypt = require('bcrypt-then');

function ensureAuthentication(req, res, next) {
  if (req.user) {
    return next();
  } else {
    return res.redirect('/login');
  }
}

function loginRedirect(req, res, next) {
  if (req.user) {
    return res.redirect('/');
  } else {
    return next();
  }
}

function hash(password) {
  return bcrypt.hash(password, 10);
}

function checkPassword(password, hashed) {
  return bcrypt.compare(password, hashed);
}

module.exports = {
  ensureAuthentication: ensureAuthentication,
  loginRedirect: loginRedirect,
  hash: hash,
  checkPassword: checkPassword,
};
