const mongoose= require("mongoose");
require('dotenv').config();

const mongodb_uri= process.env.MONGODB_URI

const connectdb=async ()=>{
    try{
        await mongoose.connect(mongodb_uri);
        console.log("mongodb connected");
    }
    catch(error){
        console.log("error connecting to mongodb");
        console.log(error.message);
        process.exit(1);

    }
}

connectdb();
