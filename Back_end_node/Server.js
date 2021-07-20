require('dotenv').config({path:"./.env"});
const cors = require("cors");
const {Connectdb}=require('./Integration/ConnectDAO');
const app =require("express")();
app.use(cors());
app.use(require('body-parser').json());
const Route=require("../Back_end_node/Api-routes/Approutes");
app.use("/",Route);
Connectdb();


app.listen(process.env.PORT,()=>{
    console.log(" Server Started ");
});
