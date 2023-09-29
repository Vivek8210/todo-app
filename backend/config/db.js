const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // await mongoose.connect(`${process.env.MONGO_URI}`, {
    await mongoose.connect('mongodb://127.0.0.1:27017/user', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error(`Error connecting to the database: ${error}`);
  }
};

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = connectDB;
