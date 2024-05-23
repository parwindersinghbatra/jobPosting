const JobModel = require("../models/job");

const createJob = async (req, res) => {
  const jobObj = req.body;
  const newJob = new JobModel(jobObj);
  await newJob.save();
  console.log(jobObj);

  res.json({
    success: true,
    message: "Created job successfully",
  });
};

const listJob = async (req, res) => {
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
};

const editJob = async (req, res) => {
    const jobId = req.params.id
    console.log(jobId);
    console.log(req.body)
    await JobModel.findByIdAndUpdate(jobId, req.body)
 res.json({
    success: true,
    message: "Edit jobs successfully",
  });
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
