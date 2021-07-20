const {UnsplashModal} =require('../Models/unsplashmodal');
const {UnsplashDao}=require('../Integration/unsplashDAO');


const InsertDoc=async (req,res)=>{

    const {label,ImageURL}=req.body;
    const payload=UnsplashModal(label,ImageURL);   //Creating a incomming value to an Object.
    const response=await UnsplashDao.InsertDocument(payload);
    if(response==1){
        const getArray=await UnsplashDao.GetAll();
        res.json({data:getArray});
    }
    else{
        res.json({Error:"Error occurred during - getResponse"});
    }
};

module.exports={InsertDoc};