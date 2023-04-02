// ekhane muloto try-catch er catch er error handle kora hocce
// same type er error bar bar na likhar jonne amra eikhane ekta function create kore nilam
// jokhn dorkar hobe catch er modde function ta call kora hobe

module.exports = {
  serverError(res, error) {
    console.log(error);
    res.status(500).json({
      message: 'Server Error Occurred',
    });
  },
  resourceError(res, message) {
    res.status(400).json({
      message,
    });
  },
};
