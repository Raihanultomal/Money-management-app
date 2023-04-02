const router = require('express').Router();

// ekhane userController theke login function k variable akare import kora hoyeche
const { login, register } = require('../controllers/userController.js');

// Registration Router
// localhost:4000/api/users/register
router.post('/register', register);

//login Router
// localhost:4000/api/users/login
router.post('/login', login);
module.exports = router;
