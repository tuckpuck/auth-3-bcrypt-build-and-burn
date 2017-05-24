var bcrypt = require("bcrypt");

function hash(plaintext) {
  var encrypted = bcrypt.hashSync(plaintext, 8);
  return encrypted;
}

function compare(plaintext, hash) {
  var decoded = bcrypt.compareSync(plaintext, hash);
  return decoded;
}

module.exports = {
  hash, compare
};
