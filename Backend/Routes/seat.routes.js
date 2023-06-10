const express=require("express")
const {seatModel}=require("../model/seat.model")
const seatRouter=express.Router();

seatRouter.get("/", async(req, res) => {
    
    try{
        const seat=await seatModel.find()
        res.send(seat)
    }catch(err){
        res.send({"msg":"cant fetch data","error":err})
    }
   
})

// seatRouter.post("/register",async (req, res) => {
//     // console.log(req.body)
//    try{
//     const seat = new seatModel(req.body)
//     await seat.save();
//     res.send({"msg":"seat has been Registerd","seatDetails":seat})
//    }catch(err){
//     res.send({"msg":"can not register","error":err.message})
//    }
// })

seatRouter.patch("/update/:id",async(req,res)=>{
    const Id=req.params.id
    const payload=req.body
    try{
        await seatModel.findByIdAndUpdate({_id:Id,payload})
    }catch(err){
        console.log(err)
        res.send({"msg":"can not register","error":err.message})
    }
    res.send({"msg":"updated successfully"})
})

module.exports={
    seatRouter
}