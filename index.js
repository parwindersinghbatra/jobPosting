const express = require('express');
const mongoose = require('mongoose');
const jobRouters = require('./routes/job');

const app = express();

app.use(express.json())

mongoose
.connect("mongodb://localhost:27017/jobapp") 
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.log(err))

app.use(jobRouters)
app.listen(8080, () => console.log("Express Server is running on 8080"))
