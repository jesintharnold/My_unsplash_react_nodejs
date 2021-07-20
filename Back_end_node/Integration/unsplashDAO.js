// const {db}=require('./ConnectDAO');

const {ObjectId} =require('mongodb');

let UnsplashDB;
let cursor;
const databasename=process.env.DB_UNSPLASH_CLONE;

class UnsplashDao{

    static async FetchCursor(db){
        try{
            UnsplashDB=await db.collection(databasename);
        }
        catch(err){
            console.log(`Error occurred while connecting ...`+err);
        }
    };


    static async InsertDocument(document){
        
        try{
            console.log(`Insert - method Called`);
            cursor=await UnsplashDB.insertOne(document,{writeConcern:{w:"majority"}});
            return cursor.insertedCount;
            
        }
        catch(err){
            console.log(`Insert - method Error `+err);
            return ;
        }
    };


    static async DeleteDocument(id){
         
        try{
            cursor=await UnsplashDB.deleteOne({"_id":new ObjectId(id)});
            if(cursor.deletedCount===1){
                return 1;
            }else{
                return 0;
            }
        }
        catch(err){
            console.log(`MongoDB Delete Error - `+err);
            return ;
        }
    };

    static async GetAll(){
    
    try{
        cursor=await UnsplashDB.find({},{projection:{_id:1,label:1,ImageURL:1}}).sort({"_id":-1});
        return cursor.toArray();
     }
     catch(err){
          console.log(`MongoDB GetAll Error - ` + err);
          return ;
     }
     
    }
};

module.exports={UnsplashDao};


