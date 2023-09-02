const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://meta:john5646@nodetutorial.n6pauji.mongodb.net/03-Task-Manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect to MongoDB"))
  .catch((error) => console.log(error));

}

module.exports = connectDB;

