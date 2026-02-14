const UserModel= require('../models/User');

exports.create= async (req,res)=>{
    if(!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone){
        res.status(400).send({message: "Content cant be empty"});

    }

    const user= new UserModel({
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone
    });

    await user.save().then(data=>{
        res.send({
            message:"user created successfully",
            user:data
        });
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "some error occured when entering data"
        });
    });
};

exports.findAll = async(req,res)=>{
    try{
        const user= await UserModel.find();
        res.status(200).json(user);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};