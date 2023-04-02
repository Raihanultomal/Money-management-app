const registerValidator = require('../validator/registerValidator');
const bcrypt = require('bcrypt');
const User = require('../model/User');

module.exports = {
  // login controller
  // router er modde jei condition or je vabe control kora hobe segulo controler er modde likha hobe
  // er pore just ei controller k router e import korlei hobe
  // jemon user router e nicher likha login function k import kora hobe
  login(req, res) {
    //nicher dui vabei distructure kora jabe

    const { name, email } = req.body;
    // let name = req.body.name;
    // let email = req.body.email;

    res.json({
      message: `Welcome ${name}, your given email is ${email}`,
    });
  },

  register(req, res) {
    //registration validation er jonne nicher kaj gulo kora hobe
    //Read client data
    //Validation check user data
    // check for duplicate user
    //New user object
    //save to database
    //response back with new data

    let { name, email, password, confirmPassword } = req.body;
    let validate = registerValidator({
      name,
      email,
      password,
      confirmPassword,
    });
    if (!validate.isValid) {
      res.status(400).json(validate.error);
    } else {
      User.findOne({ email })
        .then((user) => {
          if (user) {
            return res.status(400).json({
              message: 'Email already exist',
            });
          }
          bcrypt.hash(password, 11, (err, hash) => {
            if (err) {
              return res.status(500).json({
                message: 'Server error occurred',
              });
            }
            let user = new User({
              name,
              email,
              password: hash,
            });
            user
              .save()
              .then((user) => {
                res.status(201).json({
                  message: 'User created Successfully',
                  user,
                });
              })
              .catch((error) => {
                console.log(error);
                res.status(500).json({
                  message: 'Server errror occurred',
                });
              });
          });
        })

        .catch((error) => {
          console.log(error);
          res.status(500).json({
            message: 'Server errror ',
          });
        });
    }
  },
};
