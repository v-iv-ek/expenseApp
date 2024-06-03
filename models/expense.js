const Sequelize=require('sequelize');
const sequelize=require('../utils/database')

const expenseDetails=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    Amount:{
        type:Sequelize.STRING
    },
    Description:{
        type:Sequelize.STRING,
        
    },
    Category:{
        type:Sequelize.STRING,
      
    }
})
module.exports=expenseDetails;