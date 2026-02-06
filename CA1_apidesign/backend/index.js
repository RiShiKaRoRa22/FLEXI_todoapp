const express= require("express");   
const app= express();


app.use(express.json());

app.listen(5000, ()=>{
    console.log("app runs on http://localhost:5000");
})

let todo=[];
let count=1;

app.post("/todos", (req,res)=>{
    const Todo={
        id:count++,
        item:req.body.item,
        isCompleted:req.body.isCompleted?? false
    };
    todo.push(Todo);
    res.status(201).json(todo);
})

app.get("/todos/:id",(req,res)=>{
    const ToDo=todo.find(t=>t.id==req.params.id);
    if(!ToDo){
        return res.status(404).send("Not found");
    }

    res.status(200).json(ToDo);
})

app.get("/todos",(req,res)=>{
    res.json(todo);

})

app.put("/todos/:id",(req,res)=>{
    const ToDo=todo.find(t=>t.id==req.params.id);
    if(!ToDo){
        return res.status(404).send("Not found");
    }
    ToDo.item=req.body.item;
    res.json(ToDo);

})

app.delete("/todos/:id",(req,res)=>{
    const ToDo=todo.find(t=>t.id==req.params.id);
    if(!ToDo){
        return res.status(404).send("Not found");
    }

    todo=todo.filter(t=>t.id!=req.params.id);
    res.send("Deleted");

})