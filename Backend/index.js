const bcryptjs =require ("bcryptjs");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require("dotenv");
dotenv.config();
const app = express({limit:'100mb'});

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
       console.log('MongoDB connected');
    })
    .catch(()=>{
    console.log('MongoDB error')});
  

  const userSchema=new mongoose.Schema({
  name:String,
   email:String,
   password:String,
   confirmpassword:String,
  
})
const userModel=mongoose.model('users',userSchema);  


app.get('/',(req,res)=>{
    res.status(200).send('Server is running');
})

app.post('/login', async (req, res) => {
    console.log(req.body);
    const { email,password } = req.body;
  
    try {
      const result = await userModel.findOne({ email: email,password:password});
  
      if (result) {
        console.log(result);
        const datasend = {
          _id: result._id,
          name:result.name,
          email: result.email,
          password:result.password,
          confirmpassword:result.confirmpassword,
        };
        console.log(datasend);
        res.send({ message: "Login successfully", alert: true, data: datasend });
      } else {
        res.send({ message: "Check Email and Password", alert: false });
      }
  
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: "Server error", alert: false });
    }
  });


  app.post('/signup', async (req, res) => {
    const { email } = req.body;
  
    try {
      const result = await userModel.findOne({ email: email });
      console.log(result);
  
      if (result) {
        res.send({ message: "Email id is already register", alert: false });
      } else {
        const data = new userModel(req.body);
        await data.save(); 
        res.send({ message: "Successfully sign up", alert: true });
      }
  
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: "Server error", alert: false });
    }
  });


  const schemaProduct = mongoose.Schema({
    name:String,
  });
  const productModel = mongoose.model("projectdata",schemaProduct)
      
    //save product in data 
   
    app.post("/createproject",async(req,res)=>{
      console.log(req.body)
     const data = await productModel(req.body)
     const datasave = await data.save()
     res.send({message : "Upload successfully"})
  })

  const projectschema = mongoose.Schema({
    name:String,
    description:String,
  });
  const projectModel = mongoose.model("Youtube",projectschema)
      
    //save product in data 
   
    app.post("/fromyoutube",async(req,res)=>{
      console.log(req.body)
     const data = await projectModel(req.body)
     const datasave = await data.save()
     res.send({message : "Upload successfully"})
  })

  app.get("/youtube",async(req,res)=>{
    const data = await projectModel.find({})
    res.send(JSON.stringify(data))
  })

  app.get("/project",async(req,res)=>{
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
  })

  app.listen(PORT,(res,req)=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})