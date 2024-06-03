const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors');
const sequelize=require('./utils/database')
const expenseRoutes=require("./routes/expenseRoutes")

const expense=require("./models/expense")


const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(expenseRoutes)

//Accessing the data from axios.post requesting from script.js file before need to check middleware as set to body-parser.json()

sequelize.sync()
.then((result) => {
    app.listen(4000,()=>{
        console.log("server started at port 4000")
    })
    
}).catch((err) => {
    console.log(err)
});