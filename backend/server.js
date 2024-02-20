const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

const DB = process.env.DB_URI.replace('<password>', process.env.DB_PASS);

mongoose
  .connect(DB)
  .then(() => console.log('DB connected successfully'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Elearning server is running on port ${PORT}`);
});
