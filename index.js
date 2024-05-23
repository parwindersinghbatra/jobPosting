const express = require('express');
const mongoose = require('mongoose');
const jobRouters = require('./routes/job');

const app = express();

app.use(express.json())

mongoose
.connect("mongodb+srv://parwindersinghbatra:DiEmry6N3GFHly1s@appjobs.rhgvqmh.mongodb.net/") 
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.log(err))

app.use(jobRouters)
app.listen(10000, () => console.log("Express Server is running on 8080"))

//DiEmry6N3GFHly1s
// mongodb+srv://parwindersinghbatra:<password>@appjobs.rhgvqmh.mongodb.net/