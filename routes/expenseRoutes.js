const express=require("express");
const router=express.Router();
const expenseRoute=require("../Controllers/expenseController")

router.post("/expense",expenseRoute.postAddData);
router.get("/expense",expenseRoute.getAddData);
router.delete("/expense/:userId",expenseRoute.deleteDetails)
module.exports=router;