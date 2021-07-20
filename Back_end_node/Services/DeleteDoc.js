const {UnsplashDao}=require('../Integration/unsplashDAO');

const DeleteDoc=async (req,res)=>{
    const {_id}=req.body;
    const response=await UnsplashDao.DeleteDocument(_id);
    if(response===1){
        const response_array=await UnsplashDao.GetAll();
        res.status(200).json({data:response_array});
    }
    else{
        res.status(204).json({Error:`Delete action failed + ${response}`});
    }
};

module.exports={DeleteDoc};