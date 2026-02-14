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

exports.deleteByEmail=async (req,res)=>{
    try{
        const email= req.params.email;
        const deletedUser= await UserModel.findOneAndDelete({'email':req.params.email});
        if(!deletedUser){
            return res.send("user not found");
        }
        else{
            return res.json({"message":"User deleted successfully",deletedUser});
        }

    }
    catch(error){
        res.send(404).json({message: error.message});
    }
};

exports.updatebyEmail = async (req,res)=>{
    try{
        const email= req.params.email;
        const updated= await UserModel.findOneAndUpdate({'email':req.params.email},{ 'firstName':req.body.firstName, 'lastName': req.body.lastName, 'phone': req.body.phone},{new:true});
        if(!updated){
            return res.send(404).json({'message': 'record not found'});
        }
        else{
            return res.json({'message':'record updated', updated});
        }
    }
    catch(error){
        res.json({'message': error.message});
    }
};