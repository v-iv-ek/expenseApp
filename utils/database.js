const Sequelize=require('sequelize');
const sequelize=new Sequelize('expenseapp','root','0820',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize;
