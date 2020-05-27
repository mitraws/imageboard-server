const User = require("../models").user;
const { toData } = require("./jwt");

function auth(req, res, next) {
  // 1. check for authorization header and "split" it.
  // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.
  //    If not, we return a 401 status and the message: 'Please supply some valid credentials
  //    Remember to try/catch the call to "toData()".
  // 3. Use the value returned from "toData()" to look for that user in your database with User.findByPk
  // 4. If not found, call next();
  // 5. If user is found, set it to `req.user = user` and call next();
}

module.exports = auth;