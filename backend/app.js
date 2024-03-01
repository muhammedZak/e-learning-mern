const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const userRouter = require('./routes/user-routes');
const imageUploader = require('./routes/file-uploader');
const { notFound, errorHandler } = require('./middlewares/error-middleware');

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/users', userRouter);
app.use('/api/upload', imageUploader);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
