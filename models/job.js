const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salery:{
        type:Number,
        required:false,
        default:0
    },
});

module.exports = mongoose.model("jobs", jobSchema)

