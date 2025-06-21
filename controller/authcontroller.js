
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const User = require('../module/user');


exports.register = async (req, res) => {
  

  const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered", user: newUser });
  } ;
exports.login=async(req,res)=>{
     const {username,password}=req.body;
     const user = await User.findOne({username});
     if(!user || !(await bcrypt.compare(password,user.password))){
        return res.status(401).json({message:'Invalid credential'});
     }
     const token=jwt.sign({userId:user._id},'your_jwt_secret');
     res.json({token});
     
     };

