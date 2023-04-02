const registerValidator = require('../validator/registerValidator');
const loginValidator = require('../validator/loginValidator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const { serverError, resourceError } = require('../util/error');

module.exports = {
  // login controller
  // router er modde jei condition or je vabe control kora hobe segulo controler er modde likha hobe
  // er pore just ei controller k router e import korlei hobe
  // jemon user router e nicher likha login function k import kora hobe
  login(req, res) {
    // login validation er jonne nicher kaj gulo korte hobe
    // Extract data from request
    // Validate Data
    // Check for user availability
    // Compare Password
    // Generate token and response Back

    let { email, password } = req.body;
    let validate = loginValidator({ email, password });

    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    }

    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return resourceError(res, 'User Not Found');
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return serverError(res, err);
          }
          if (!result) {
            return resourceError(res, "Password Doesn't Match");
          }
          // jwt er maddhome login er pore user k ekta token dea hoy

          let token = jwt.sign(
            {
              _id: user._id,
              name: user.name,
              email: user.email,
            },
            'SECRET',
            { expiresIn: '2h' }
          );

          res.status(200).json({
            message: 'Login Successful',
            token: `Bearer ${token}`,
          });
        });
      })
      .catch((error) => serverError(res, error));
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
      return res.status(400).json(validate.error);
    } else {
      User.findOne({ email })
        .then((user) => {
          if (user) {
            return resourceError(res, 'Email Already Exist');
          }

          bcrypt.hash(password, 11, (err, hash) => {
            if (err) {
              return resourceError(res, 'Server Error Occurred');
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
                  message: 'User Created Successfully',
                  user,
                });
              })
              .catch((error) => serverError(res, error));
          });
        })
        .catch((error) => serverError(res, error));
    }
  },
};
