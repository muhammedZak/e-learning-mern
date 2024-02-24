const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRouter = require('./routes/user-routes');
const { notFound, errorHandler } = require('./middlewares/error-middleware');

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/users', userRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
