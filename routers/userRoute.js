const router = require('express').Router();

// Registration Router
// localhost:4000/api/users/register
router.post('/register', (req, res) => {});

//login Router
// localhost:4000/api/users/login
router.post('/login', (req, res) => {
  res.json({
    message: 'Hello , this is from login',
  });
});

module.exports = router;
