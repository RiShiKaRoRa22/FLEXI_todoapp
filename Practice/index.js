const express= require("express");

const app= express();

app.use(express.json());

app.listen(5000, ()=>{
    console.log("app runs at http://localhost:5000");
})

student=[];
id=1;

app.post("/students", (req,res)=>{
    const stu={
        "id":id++,
        "name":req.body.name,
        "age":req.body.age,
        "course":req.body.course
    }
    student.push(stu);
    res.status(201).json(student);
})

app.get("/students",(req,res)=>{
    res.json(student);
})

app.put("/students/:name",(req,res)=>{
    const nam= student.find(n=>n.name==req.params.name);
    if(!nam){
        return res.send("No name found");
    }

    nam.name=req.body.name;
    res.json(nam);
})

app.delete("/students/:name",(req,res)=>{
    student=student.filter(n=>n.name!=req.params.name);

    res.send("deleted successfully");
})