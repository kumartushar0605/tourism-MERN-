import {User} from '../models/user.js'
import { UserForm } from '../models/form.js';
import ErrorHandler from '../middlewares/error.js';
import { sendCookie } from '../utils/features.js';
import { Alert } from '@chakra-ui/react';


export const image = async(req,res)=>{
    // console.log(`kya hall h bhhai ${req.body}`)
    
    const imageName = req.file.filename;
    console.log(imageName)
    const blogName = req.body.blogtest;
    console.log(blogName)
    

    try{
   
        await User.create({image:imageName,blogg:blogName})
        res.send({status:"ok"})

    }catch(error){
        res.json({status:error});
    }
}
export const getblog = async(req,res)=>{
     try{
        User.find({}).then((data)=>{
            res.send({status:"ok",data:data});
        })
     }catch(error){
        res.json({status:error});
     }
}

export const register = async(req,res)=>{
  const Name = req.body.naame;
  console.log(Name);
  const Email=req.body.emaail;
  console.log(Email);
  const Password=req.body.passsword;
  console.log(Password);
  // console.log(name);
  try{
      let user = await UserForm.findOne({ Email });
            if (user) return next(new ErrorHandler("User Already Exist", 400));

    user=  await UserForm.create({name:Name,email:Email,password:Password})
            sendCookie(user, res, "Registered Successfully", 201);

      res.send({status:"ok"})
      

  }catch(error){
      res.json({status:error});
  }
}

// export const register = async (req, res) => {
     
    // const Name = req.body.name;
    // const Email = req.body;
    // const Pass= req.body;
    // console.log(`Name here ${Name}`)

    // try {

    //   let user = await UserForm.findOne({ Email });
  
    //   if (user) return next(new ErrorHandler("User Already Exist", 400));
  
      // const hashedPassword = await bcrypt.hash(password, 10);
  
    //  let user = await UserForm.create({name:Name, });
    // await UserForm.create({name:Name})
  
    //   sendCookie(user, res, "Registered Successfully", 201);
    // } catch (error) {
      // console.log(error);
    // }


  // };
  export const login = async (req, res, next) => {
    const Email = req.body.emaill;
    console.log(Email);
    const password = req.body.passwordd;
    console.log(password)
    try {
      
  
      const user = await UserForm.findOne({ email:Email }).select("+password").select("+name");
  
      if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));
  
      // const isMatch = await bcrypt.compare(password, user.password);
      const match = user.password;
  
      if (password!=match)
        return next(new ErrorHandler("Invalid Email or Password", 400));
  
      sendCookie(user, res, `Welcome back, ${user.name}`, 200);
      console.log(`Welcome back, ${user.name}`)
      // console.log(`user id ${user.id}`)
    } catch (error) {
      next(error);
    }
  };


  export const getMyProfile = (req,res)=>{ // /:id getting the id dynamically from the database

    res.status(200).json({
      success:true,
      user:req.user
    })
    
    
    }
  
  