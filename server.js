const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Router use korechi.
// user er jonne jotogulo API drkr hobe shob gulo routers folder er userRouter e ache
// sekhan theke amra import / require kore egulo use korbo
const userRouter = require('./routers/userRoute');

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ekhane get/post use kori nai karon ei method er maddhome amra get/post duitar kaj e korte pari
// e chara useRouter.js e router er type mention kora hoyeche
// r /api/users die router er api address thik kore dea hocce
// ekhane /api/users eta autometic add hoye jabe
// and baki ta userRouter theke ashbe, jemon register/login er jonne req thakle api hobe /api/users/login
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.json({
    messsage: 'Welcome to our Application',
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`SERVER is RUNNING ON PORT ${PORT}`);
  mongoose
    .connect('mongodb://localhost/myapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB', err);
    });
});
