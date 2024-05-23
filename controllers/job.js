const JobModel = require("../models/job");

const createJob = async (req, res) => {
try{
    const jobObj = req.body;
    const newJob = new JobModel(jobObj);
    await newJob.save();
    console.log(jobObj);
  
    res.json({
      success: true,
      message: "Created job successfully",
    });
}catch(err){
        res.json({success: false, message: "Something went wrong with Creating Jobs"});
}

 
};

const listJob = async (req, res) => {
try{
    const {minSalery, maxSalery} = req.query.minSalery;
    const jobList = await JobModel.find({
      $and: [{salery:{$get: minSalery}}, { salery: { $lte: maxSalery }}],
    });
    res.json({
      success: true,
      message: "Job list successfully",
      results: jobList,
    });
    res.json({
      success: true,
      message: "List jobs successfully",
    });
}
catch(err){
    res.json({success: false, message:"Something went wrong with List Jobs"});
}
  
};

const editJob = async (req, res) => {
    try{
        const jobId = req.params.id
        console.log(jobId);
        console.log(req.body)
        await JobModel.findByIdAndUpdate(jobId, req.body)
     res.json({
        success: true,
        message: "Edit jobs successfully",
      });
    }
    catch(erro){
        res.json({success: false, message:"Something went wrong with Edit Jobs"});
    }
   
};

const deleteJob = async (req, res) => {
    const jobId = req.params.id
    await JobModel.findByIdAndDelete(jobId)
  res.json({
    success: true,
    message: "Delete jobs successfully",
  });
};

const jobController = {
  createJob,
  editJob,
  listJob,
  deleteJob,
};

module.exports = jobController;
