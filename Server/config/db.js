const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect("mongodb+srv://manisha_7667:12008095@cluster0.ym7vi7e.mongodb.net/")
    .then(() => console.log(`connection to database established...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
