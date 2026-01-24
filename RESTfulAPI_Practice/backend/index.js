import express from "express"
//const express= require("express");

const app=express();
app.use(express.json());

app.listen(3000, () => {
    console.log("server runs on port 5000");
    console.log("http://localhost:3000");
});3

let todos=[];
let idCnt= 1;
// /todos= endpoint of api, it takes request and response

app.post("/todos", (req,res) => {
    const todo={
        id:idCnt++,
        title: req.body.title,
        completed:false
    };
    todos.push(todo);
    res.status(201).json(todo);

});

app.get("/todos", (req,res)=> {
    res.json(todos);
});

app.put("/todos/:id", (req,res)=>{
    const todo=todos.find(t => t.id ==req.params.id);
    if(!todo){
        return res(404).send("Todo not found");

    }

    todo.title= req.body.title;
    res.json(todo); 


})

//query params vs path params

app.delete("/todos/:id",(req,res)=>{
    todos=todos.filter(t=> t.id !=req.params.id);
    res.status(200).send("todo Deleted");

})


export default app;
