const express=require("express");
const { DataModel } = require("./model/data.model");
const {connection} =require("./config/store")
var cors = require('cors')
const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.post("/",async(req,res)=>{
    let data1=req.body;
    console.log(data1)
    let data=await DataModel.find() 
    for (const key in data1) {
        if (Object.hasOwnProperty.call(data1, key)) {
           if(data1[key].length<=0){
            data1[key]=data[key]
           }
            
        }
    }
    //const data= new DataModel(data1)
    await DataModel.updateOne({_id: "64140dde5eabb763e021caf9"},data1);
    res.send("posted")
})
app.get("/",async(req,res)=>{
    let data=await DataModel.find() 
    
    res.send(data[2])
})
app.listen(8080,()=>{
    try {
        connection
        console.log("server is running")
    } catch (err) {
        console.log(err)
    }
   
})