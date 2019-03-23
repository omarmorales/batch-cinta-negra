const authActions = require("./authActions");
const userActions = require('./userActions');

module.exports = {
    ...userActions,
    ...authActions,
}