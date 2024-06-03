const sequelize=require("../models/expense");


exports.postAddData = async (req,res,next)=>{
 try{
   const amount=req.body.amount;
   const desc=req.body.desc;
   const category=req.body.category;
  
   const data=await sequelize.create({
    Amount:amount,
    Description:desc,
    Category:category
   })
   res.status(201).json({data})
 }
catch(err){
        console.log(err)
  }
}
exports.getAddData=async (req,res,next)=>{
  try {
    const data=await  sequelize.findAll()
    const getData= data.map((element,i)=> {
      return  data[i].dataValues
   }); 
   res.status(200).json(getData);   
    
  } catch (error) {
    console.log(error)
    
  }
   
}
exports.deleteDetails= async (req, res, next) => {
  try{
    if(!req.params.userId){
      console.log(req.url)
      res.status(400).json(err)
    }
  const prodId=req.params.userId;
   await  sequelize.destroy({where:{id:prodId}}) ;
   res.sendStatus(200)
  }
  catch(err){
    res.sendStatus(500).json(err)
  }
     
};