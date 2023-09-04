const express = require("express")
const app = express()
const tasks = require("./routes/tasks.route")
const cors = require('cors')
require('dotenv').config();
const mongoose = require("mongoose");
// const connectDB = require("./db/connect")

//mongoDB
const URI = process.env.MONGO_URI
mongoose.connect(URI).then(console.log('mongoose connected'));


//cors
app.use(cors())

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("task manager");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`));