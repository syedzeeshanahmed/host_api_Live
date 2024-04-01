const Job =  require("../models/job");

const getAllJobs = async (req, res)=>{
    const jobs = await Job.find(req.query);
    res.status(200).json({jobs})
};


const getAllJobsTesting = async (req, res)=>{
    res.status(200).json({msg: "all Jobs Here Testing"})
};

module.exports = {getAllJobs, getAllJobsTesting};