require('dotenv').config();
const connectDB = require('./db/connect');

const Job = require('./models/job');

const JobJson = require("./jobs.json");

const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Job.create(JobJson);
        console.log('success'); 
    } catch (error) {
        console.log(error);   
    }
}

start();