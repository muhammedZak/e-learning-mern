const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Course = require('./models/course-modal');
const courses = require('./data/courses');

const DB = process.env.DB_URI.replace('<password>', process.env.DB_PASS);

mongoose
  .connect(DB)
  .then(() => console.log('DB connected successfully'))
  .catch((err) => console.log(err));

const importData = async () => {
  try {
    await Course.deleteMany();

    await Course.insertMany(courses);
    console.log('Data imported!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Course.deleteMany();

    console.log('Data destroyed!');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
