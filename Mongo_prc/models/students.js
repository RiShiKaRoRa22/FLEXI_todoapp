const mongoose= require('mongoose');

const {Schema}=mongoose;

const students= new Schema({
    name:String,
    age:Number,
    location:String

})

const Student= mongoose.model('Student',students);

