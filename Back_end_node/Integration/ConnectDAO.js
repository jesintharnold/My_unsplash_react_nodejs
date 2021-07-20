require('dotenv').config({path:'../../.env'});
const {MongoClient} =require("mongodb");
const {UnsplashDao}=require('./unsplashDAO');
const client=new MongoClient(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
let db;
const Connectdb=async()=>{

    try{
        const DBCon=await client.connect();
        db=DBCon.db(process.env.CONNECT_DB_NAME);
        console.log(`MongoDB - Connection Successful`);
        await UnsplashDao.FetchCursor(db);
        // console.log(await UnsplashDao.GetAll());
    }
    catch(err){
        console.log(`MongoDB - Connection Failed `+err);
        await client.close().then(()=>{ process.exit(1)});
       }
};

module.exports={Connectdb,db};