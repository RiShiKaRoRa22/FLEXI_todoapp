const express= require("express");
const connectDB=require("./db");


const app= express();

app.use(express.json());
connectDB();

app.listen(5000, ()=>{
    console.log("app runs at http://localhost:5000");
})

app.get('/', (req,res)=>{
    res.send({"message": "hello crud project"});

})

const UserRoute= require('./routes/routes');
app.use('/user', UserRoute);
