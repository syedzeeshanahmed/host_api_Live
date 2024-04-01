require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const jobs_routes = require("./routes/jobs");

app.get("/", (req, res)=>{
    res.send("Hi I am live");
});

// middlewre or set router
app.use("/api/jobs", jobs_routes); 


const PORT = process.env.PORT || 5000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error)
    }
}

start();