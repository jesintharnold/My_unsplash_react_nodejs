const {UnsplashDao}=require('../Integration/unsplashDAO');

const GetAllDoc= async (req,res)=>{
    const response=await UnsplashDao.GetAll();
    if(response){
        res.status(200).json({data:response});
    }
    else{
        res.status(204).json({Error:"No Response Found"});
    }
};


module.exports={GetAllDoc};